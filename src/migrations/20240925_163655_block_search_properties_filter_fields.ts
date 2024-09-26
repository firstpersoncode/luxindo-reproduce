import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_blocks_search_properties_filter_type" AS ENUM('Land', 'Villa Rental', 'Villa / House / Apartment', 'Hotel, Resort, Villa Complex', 'Commercial Space');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_blocks_search_properties_filter_ownership" AS ENUM('Rental', 'Freehold', 'Leasehold');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_search_properties_filter_type" AS ENUM('Land', 'Villa Rental', 'Villa / House / Apartment', 'Hotel, Resort, Villa Complex', 'Commercial Space');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_search_properties_filter_ownership" AS ENUM('Rental', 'Freehold', 'Leasehold');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  ALTER TABLE "properties_blocks_hero_search" ADD COLUMN "title" varchar;
  ALTER TABLE "properties_blocks_hero_search" ADD COLUMN "cta" varchar;
  ALTER TABLE "properties_blocks_hero_search" ADD COLUMN "search_page_slug" varchar;
  ALTER TABLE "properties_blocks_search_properties" ADD COLUMN "filter_area_1" varchar;
  ALTER TABLE "properties_blocks_search_properties" ADD COLUMN "filter_area_2" varchar;
  ALTER TABLE "properties_blocks_search_properties" ADD COLUMN "filter_type" "enum_properties_blocks_search_properties_filter_type";
  ALTER TABLE "properties_blocks_search_properties" ADD COLUMN "filter_ownership" "enum_properties_blocks_search_properties_filter_ownership";
  ALTER TABLE "pages_blocks_hero_search" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_hero_search" ADD COLUMN "cta" varchar;
  ALTER TABLE "pages_blocks_hero_search" ADD COLUMN "search_page_slug" varchar;
  ALTER TABLE "pages_blocks_search_properties" ADD COLUMN "filter_area_1" varchar;
  ALTER TABLE "pages_blocks_search_properties" ADD COLUMN "filter_area_2" varchar;
  ALTER TABLE "pages_blocks_search_properties" ADD COLUMN "filter_type" "enum_pages_blocks_search_properties_filter_type";
  ALTER TABLE "pages_blocks_search_properties" ADD COLUMN "filter_ownership" "enum_pages_blocks_search_properties_filter_ownership";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "properties_blocks_hero_search" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "properties_blocks_hero_search" DROP COLUMN IF EXISTS "cta";
  ALTER TABLE "properties_blocks_hero_search" DROP COLUMN IF EXISTS "search_page_slug";
  ALTER TABLE "properties_blocks_search_properties" DROP COLUMN IF EXISTS "filter_area_1";
  ALTER TABLE "properties_blocks_search_properties" DROP COLUMN IF EXISTS "filter_area_2";
  ALTER TABLE "properties_blocks_search_properties" DROP COLUMN IF EXISTS "filter_type";
  ALTER TABLE "properties_blocks_search_properties" DROP COLUMN IF EXISTS "filter_ownership";
  ALTER TABLE "pages_blocks_hero_search" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "pages_blocks_hero_search" DROP COLUMN IF EXISTS "cta";
  ALTER TABLE "pages_blocks_hero_search" DROP COLUMN IF EXISTS "search_page_slug";
  ALTER TABLE "pages_blocks_search_properties" DROP COLUMN IF EXISTS "filter_area_1";
  ALTER TABLE "pages_blocks_search_properties" DROP COLUMN IF EXISTS "filter_area_2";
  ALTER TABLE "pages_blocks_search_properties" DROP COLUMN IF EXISTS "filter_type";
  ALTER TABLE "pages_blocks_search_properties" DROP COLUMN IF EXISTS "filter_ownership";`)
}
