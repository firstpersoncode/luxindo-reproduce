import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "properties" ALTER COLUMN "lat" SET DATA TYPE varchar;
  ALTER TABLE "properties" ALTER COLUMN "lat" DROP DEFAULT;
  ALTER TABLE "properties" ALTER COLUMN "lng" SET DATA TYPE varchar;
  ALTER TABLE "properties" ALTER COLUMN "lng" DROP DEFAULT;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "properties" ALTER COLUMN "lat" SET DATA TYPE numeric;
  ALTER TABLE "properties" ALTER COLUMN "lat" SET DEFAULT 0;
  ALTER TABLE "properties" ALTER COLUMN "lng" SET DATA TYPE numeric;
  ALTER TABLE "properties" ALTER COLUMN "lng" SET DEFAULT 0;`)
}
