import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "properties_blocks_rich_text_locales" ALTER COLUMN "content" SET DATA TYPE varchar;
  ALTER TABLE "properties_locales" ALTER COLUMN "descriptions" SET DATA TYPE varchar;
  ALTER TABLE "pages_blocks_rich_text_locales" ALTER COLUMN "content" SET DATA TYPE varchar;
  ALTER TABLE "properties_blocks_rich_text" DROP COLUMN IF EXISTS "content_html";
  ALTER TABLE "properties_locales" DROP COLUMN IF EXISTS "descriptions_html";
  ALTER TABLE "pages_blocks_rich_text" DROP COLUMN IF EXISTS "content_html";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "properties_blocks_rich_text_locales" ALTER COLUMN "content" SET DATA TYPE jsonb;
  ALTER TABLE "properties_locales" ALTER COLUMN "descriptions" SET DATA TYPE jsonb;
  ALTER TABLE "pages_blocks_rich_text_locales" ALTER COLUMN "content" SET DATA TYPE jsonb;
  ALTER TABLE "properties_blocks_rich_text" ADD COLUMN "content_html" varchar;
  ALTER TABLE "properties_locales" ADD COLUMN "descriptions_html" varchar;
  ALTER TABLE "pages_blocks_rich_text" ADD COLUMN "content_html" varchar;`)
}
