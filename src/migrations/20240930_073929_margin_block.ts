import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "properties_blocks_margin" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"margin_desktop" numeric,
  	"margin_mobile" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_margin" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"margin_desktop" numeric,
  	"margin_mobile" numeric,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "properties_blocks_margin" ADD CONSTRAINT "properties_blocks_margin_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_margin" ADD CONSTRAINT "pages_blocks_margin_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "properties_blocks_margin_order_idx" ON "properties_blocks_margin" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_blocks_margin_parent_id_idx" ON "properties_blocks_margin" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_blocks_margin_path_idx" ON "properties_blocks_margin" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_margin_order_idx" ON "pages_blocks_margin" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_margin_parent_id_idx" ON "pages_blocks_margin" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_margin_path_idx" ON "pages_blocks_margin" USING btree ("_path");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "properties_blocks_margin";
  DROP TABLE "pages_blocks_margin";`)
}
