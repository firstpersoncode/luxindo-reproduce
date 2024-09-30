import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_blocks_search_filter_types" AS ENUM('Land', 'Villa Rental', 'Villa / House / Apartment', 'Hotel, Resort, Villa Complex', 'Commercial Space');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_search_filter_types" AS ENUM('Land', 'Villa Rental', 'Villa / House / Apartment', 'Hotel, Resort, Villa Complex', 'Commercial Space');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE TABLE IF NOT EXISTS "properties_blocks_search_filter_types" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_properties_blocks_search_filter_types",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_search_filter_types" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_search_filter_types",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "properties_blocks_search_filter_types" ADD CONSTRAINT "properties_blocks_search_filter_types_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."properties_blocks_search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_search_filter_types" ADD CONSTRAINT "pages_blocks_search_filter_types_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_filter_types_order_idx" ON "properties_blocks_search_filter_types" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_filter_types_parent_idx" ON "properties_blocks_search_filter_types" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_filter_types_order_idx" ON "pages_blocks_search_filter_types" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_filter_types_parent_idx" ON "pages_blocks_search_filter_types" USING btree ("parent_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "properties_blocks_search_filter_types";
  DROP TABLE "pages_blocks_search_filter_types";`)
}
