import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "properties_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"content_html" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties_blocks_search_collection" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"search_collection" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_search_collection" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"search_collection" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_navigations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"title" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "footer_navigation_groups_navigations" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"title" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_navigation_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"footer_note" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "properties_blocks_rich_text" ADD CONSTRAINT "properties_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_blocks_search_collection" ADD CONSTRAINT "properties_blocks_search_collection_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_search_collection" ADD CONSTRAINT "pages_blocks_search_collection_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_navigations" ADD CONSTRAINT "header_navigations_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_navigations" ADD CONSTRAINT "header_navigations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_navigation_groups_navigations" ADD CONSTRAINT "footer_navigation_groups_navigations_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_navigation_groups_navigations" ADD CONSTRAINT "footer_navigation_groups_navigations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_navigation_groups"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_navigation_groups" ADD CONSTRAINT "footer_navigation_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer" ADD CONSTRAINT "footer_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "properties_blocks_rich_text_order_idx" ON "properties_blocks_rich_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_blocks_rich_text_parent_id_idx" ON "properties_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_blocks_rich_text_path_idx" ON "properties_blocks_rich_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_collection_order_idx" ON "properties_blocks_search_collection" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_collection_parent_id_idx" ON "properties_blocks_search_collection" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_collection_path_idx" ON "properties_blocks_search_collection" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_collection_order_idx" ON "pages_blocks_search_collection" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_collection_parent_id_idx" ON "pages_blocks_search_collection" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_collection_path_idx" ON "pages_blocks_search_collection" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "header_navigations_order_idx" ON "header_navigations" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_navigations_parent_id_idx" ON "header_navigations" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_navigation_groups_navigations_order_idx" ON "footer_navigation_groups_navigations" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_navigation_groups_navigations_parent_id_idx" ON "footer_navigation_groups_navigations" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_navigation_groups_order_idx" ON "footer_navigation_groups" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_navigation_groups_parent_id_idx" ON "footer_navigation_groups" USING btree ("_parent_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "properties_blocks_rich_text";
  DROP TABLE "properties_blocks_search_collection";
  DROP TABLE "pages_blocks_search_collection";
  DROP TABLE "header_navigations";
  DROP TABLE "header";
  DROP TABLE "footer_navigation_groups_navigations";
  DROP TABLE "footer_navigation_groups";
  DROP TABLE "footer";`)
}
