import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "properties_locales" ADD COLUMN "descriptions_html" varchar;
  ALTER TABLE "properties" DROP COLUMN IF EXISTS "descriptions_html";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "properties" ADD COLUMN "descriptions_html" varchar;
  ALTER TABLE "properties_locales" DROP COLUMN IF EXISTS "descriptions_html";`)
}
