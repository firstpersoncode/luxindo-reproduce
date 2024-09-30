import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_blocks_search_filter_ownerships" AS ENUM('Rental', 'Freehold', 'Leasehold');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_search_filter_ownerships" AS ENUM('Rental', 'Freehold', 'Leasehold');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE TABLE IF NOT EXISTS "properties_blocks_search_filter_ownerships" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_properties_blocks_search_filter_ownerships",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "properties_blocks_search" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"filter_area" varchar,
  	"filter_sub_area" varchar,
  	"filter_price_start" numeric,
  	"filter_price_end" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_search_filter_ownerships" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_search_filter_ownerships",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_search" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"filter_area" varchar,
  	"filter_sub_area" varchar,
  	"filter_price_start" numeric,
  	"filter_price_end" numeric,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "properties_blocks_search_filter_ownerships" ADD CONSTRAINT "properties_blocks_search_filter_ownerships_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."properties_blocks_search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_blocks_search" ADD CONSTRAINT "properties_blocks_search_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_search_filter_ownerships" ADD CONSTRAINT "pages_blocks_search_filter_ownerships_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_search" ADD CONSTRAINT "pages_blocks_search_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_filter_ownerships_order_idx" ON "properties_blocks_search_filter_ownerships" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_filter_ownerships_parent_idx" ON "properties_blocks_search_filter_ownerships" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_order_idx" ON "properties_blocks_search" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_parent_id_idx" ON "properties_blocks_search" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_path_idx" ON "properties_blocks_search" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_filter_ownerships_order_idx" ON "pages_blocks_search_filter_ownerships" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_filter_ownerships_parent_idx" ON "pages_blocks_search_filter_ownerships" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_order_idx" ON "pages_blocks_search" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_parent_id_idx" ON "pages_blocks_search" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_path_idx" ON "pages_blocks_search" USING btree ("_path");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "properties_blocks_search_filter_ownerships";
  DROP TABLE "properties_blocks_search";
  DROP TABLE "pages_blocks_search_filter_ownerships";
  DROP TABLE "pages_blocks_search";`)
}
