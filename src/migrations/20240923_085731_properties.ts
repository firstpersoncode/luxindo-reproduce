import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "properties_blocks_rich_text_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "properties_blocks_rich_text_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_rich_text_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "pages_blocks_rich_text_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  ALTER TABLE "properties" ALTER COLUMN "area_1" SET DATA TYPE varchar;
  DO $$ BEGIN
   ALTER TABLE "properties_blocks_rich_text_locales" ADD CONSTRAINT "properties_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_rich_text_locales" ADD CONSTRAINT "pages_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  ALTER TABLE "properties_blocks_rich_text" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "pages_blocks_rich_text" DROP COLUMN IF EXISTS "content";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_area_1" AS ENUM('TABANAN AREA', 'CANGGU AREA', 'NORTH BALI AREA', 'UMALAS AND KEROBOKAN AREA', 'BUKIT AREA', 'SANUR AND EAST COAST AREA', 'ROTE ISLAND', 'SEMINYAK AREA', 'DENPASAR', 'UBUD AREA', 'MENGWI', 'SUMBAWA', 'NUSA LEMBONGAN / CENINGAN / PENIDA', 'LOMBOK', 'BADUNG AREA', 'SUMBA', 'WEST SUMATERA', 'FLORES', 'EAST JAVA', 'Kintamani', 'GIANYAR', 'NUSA DUA', 'JEMBRANA AREA', 'WEST JAVA', 'OTHERS');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DROP TABLE "properties_blocks_rich_text_locales";
  DROP TABLE "pages_blocks_rich_text_locales";
  ALTER TABLE "properties" ALTER COLUMN "area_1" SET DATA TYPE enum_properties_area_1;
  ALTER TABLE "properties_blocks_rich_text" ADD COLUMN "content" jsonb;
  ALTER TABLE "pages_blocks_rich_text" ADD COLUMN "content" jsonb;`)
}
