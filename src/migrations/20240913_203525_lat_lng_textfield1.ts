import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "properties" RENAME COLUMN "lat" TO "lat_str";
  ALTER TABLE "properties" RENAME COLUMN "lng" TO "lng_str";`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "properties" RENAME COLUMN "lat_str" TO "lat";
  ALTER TABLE "properties" RENAME COLUMN "lng_str" TO "lng";`)
}
