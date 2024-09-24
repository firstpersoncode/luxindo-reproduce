import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TYPE "enum_properties_template" ADD VALUE 'Default';
  ALTER TYPE "enum_properties_template" ADD VALUE 'Search';
  ALTER TYPE "enum_pages_template" ADD VALUE 'Default';
  ALTER TYPE "enum_pages_template" ADD VALUE 'Home';
  ALTER TYPE "enum_pages_template" ADD VALUE 'About';
  ALTER TYPE "enum_pages_template" ADD VALUE 'Contact';
  ALTER TABLE "properties_blocks_search_collection" RENAME TO "properties_blocks_search_properties";
  ALTER TABLE "pages_blocks_search_collection" RENAME TO "pages_blocks_search_properties";
  ALTER TABLE "properties_blocks_search_properties" RENAME COLUMN "search_collection" TO "search_properties";
  ALTER TABLE "pages_blocks_search_properties" RENAME COLUMN "search_collection" TO "search_properties";
  ALTER TABLE "properties_blocks_search_properties" DROP CONSTRAINT "properties_blocks_search_collection_parent_id_fk";
  
  ALTER TABLE "pages_blocks_search_properties" DROP CONSTRAINT "pages_blocks_search_collection_parent_id_fk";
  
  DROP INDEX IF EXISTS "properties_blocks_search_collection_order_idx";
  DROP INDEX IF EXISTS "properties_blocks_search_collection_parent_id_idx";
  DROP INDEX IF EXISTS "properties_blocks_search_collection_path_idx";
  DROP INDEX IF EXISTS "pages_blocks_search_collection_order_idx";
  DROP INDEX IF EXISTS "pages_blocks_search_collection_parent_id_idx";
  DROP INDEX IF EXISTS "pages_blocks_search_collection_path_idx";
  ALTER TABLE "properties" ALTER COLUMN "area_2" SET DATA TYPE varchar;
  DO $$ BEGIN
   ALTER TABLE "properties_blocks_search_properties" ADD CONSTRAINT "properties_blocks_search_properties_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_search_properties" ADD CONSTRAINT "pages_blocks_search_properties_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_properties_order_idx" ON "properties_blocks_search_properties" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_properties_parent_id_idx" ON "properties_blocks_search_properties" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_properties_path_idx" ON "properties_blocks_search_properties" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_properties_order_idx" ON "pages_blocks_search_properties" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_properties_parent_id_idx" ON "pages_blocks_search_properties" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_properties_path_idx" ON "pages_blocks_search_properties" USING btree ("_path");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_area_2" AS ENUM('Kedungu', 'Berawa', 'Buleleng', 'Umalas', 'Tegal Cupek', 'Sanur', 'Seminyak', 'Jimbaran', 'Cemagi', 'Pecatu', 'Pererenan', 'Mas', 'Keramas', 'Nyanyi', 'Tibubeneng', 'Tumbak Bayuh', 'Batu Bolong / Echo Beach', 'Payangan', 'Gili Islands', 'Buduk', 'Petitenget', 'Mentawai', 'GILI TRAWANGAN', 'Kerobokan', 'Ketewel', 'South Bukit', 'Padonan', 'Tegallalang', 'Others', 'Amed / Tulamben', 'Seseh', 'Ungasan', 'Kuta', 'Kayu Tulang', 'Legian', 'Mandalika', 'Kaba - Kaba', 'Batu Belig', 'Pantai Lima', 'Babakan', 'Balian', 'Tying Tutul', 'Kuta Area', 'Medewi', 'Singaraja', 'Senggigi Area');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  ALTER TYPE "enum_properties_template" ADD VALUE 'default';
  ALTER TYPE "enum_properties_template" ADD VALUE 'collection';
  ALTER TYPE "enum_pages_template" ADD VALUE 'default';
  ALTER TYPE "enum_pages_template" ADD VALUE 'home';
  ALTER TYPE "enum_pages_template" ADD VALUE 'about';
  ALTER TYPE "enum_pages_template" ADD VALUE 'contact';
  ALTER TABLE "properties_blocks_search_properties" RENAME TO "properties_blocks_search_collection";
  ALTER TABLE "pages_blocks_search_properties" RENAME TO "pages_blocks_search_collection";
  ALTER TABLE "properties_blocks_search_collection" RENAME COLUMN "search_properties" TO "search_collection";
  ALTER TABLE "pages_blocks_search_collection" RENAME COLUMN "search_properties" TO "search_collection";
  ALTER TABLE "properties_blocks_search_collection" DROP CONSTRAINT "properties_blocks_search_properties_parent_id_fk";
  
  ALTER TABLE "pages_blocks_search_collection" DROP CONSTRAINT "pages_blocks_search_properties_parent_id_fk";
  
  DROP INDEX IF EXISTS "properties_blocks_search_properties_order_idx";
  DROP INDEX IF EXISTS "properties_blocks_search_properties_parent_id_idx";
  DROP INDEX IF EXISTS "properties_blocks_search_properties_path_idx";
  DROP INDEX IF EXISTS "pages_blocks_search_properties_order_idx";
  DROP INDEX IF EXISTS "pages_blocks_search_properties_parent_id_idx";
  DROP INDEX IF EXISTS "pages_blocks_search_properties_path_idx";
  ALTER TABLE "properties" ALTER COLUMN "area_2" SET DATA TYPE enum_properties_area_2;
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
  
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_collection_order_idx" ON "properties_blocks_search_collection" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_collection_parent_id_idx" ON "properties_blocks_search_collection" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_blocks_search_collection_path_idx" ON "properties_blocks_search_collection" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_collection_order_idx" ON "pages_blocks_search_collection" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_collection_parent_id_idx" ON "pages_blocks_search_collection" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_search_collection_path_idx" ON "pages_blocks_search_collection" USING btree ("_path");`)
}
