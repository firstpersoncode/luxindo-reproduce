import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "properties_blocks_margin" ADD COLUMN "background_color" varchar;
  ALTER TABLE "pages_blocks_margin" ADD COLUMN "background_color" varchar;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "properties_blocks_margin" DROP COLUMN IF EXISTS "background_color";
  ALTER TABLE "pages_blocks_margin" DROP COLUMN IF EXISTS "background_color";`)
}
