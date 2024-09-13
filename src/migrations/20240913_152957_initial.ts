import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DO $$ BEGIN
   CREATE TYPE "public"."_locales" AS ENUM('en', 'id', 'fr');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_type" AS ENUM('Land', 'Villa Rental', 'Villa / House / Apartment', 'Hotel, Resort, Villa Complex', 'Commercial Space');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_ownership" AS ENUM('Rental', 'Freehold', 'Leasehold');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_currency" AS ENUM('IDR', 'USD');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_plans_title" AS ENUM('Area (M 2)', 'Bedrooms', 'Bathrooms', 'Garages', 'Rooms');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_spaces_title" AS ENUM('Land Size', 'Price/are/year', 'Leasehold valid until', 'Year Built', 'Price per m2', 'Lease until ', 'Electricity', 'Title', 'Year of renovation ', 'Road Access', 'Leasehold Valid Until', 'Swimming Pool ', 'Electricity ', 'Road Access ', 'Leasehold Valid Until ', 'Price / Are / Year', 'Title ', 'Renovated ', 'Leasehold valid until ', 'Price / Are ', 'Villa Unit', 'Price / Year / Unit', 'Leasehold', 'Price / Are/ Year', 'Swimming Pool', 'Leasedhold Valid until ', 'Price/are', 'Price / Are', 'Price / Are / Years', 'Price/Are/Year', 'Leasehold ', 'Beach frontage ', 'Mainroad frontage', 'PRICE / ARE ', 'ROAD ACCESS', 'PRICE / ARE', 'Sauna for ', 'Architecture', 'LEASEHOLD VALID UNTIL ', 'BUILDING SIZE', 'Price / m2', 'TITLE STATUS ', 'LEASEHOLD VALID UNTIL', 'ELECTRICITY', 'BUILDING SIZE ', 'ELECTRICITY ', 'SWIMMING POOL ', 'PRICE/ARE', 'SWIMMING POOL', 'Available On', 'PRICE/ARE/YEAR', 'Building Size', 'Price/Are', 'Building Size ', 'Garden', 'TITLE STATUS', 'Price /are ', 'Leasehold until', 'Price / are / year', 'Open for leasehold ', 'Price / year', 'Price/ are', 'Price / are ', 'Price / are', 'Price / are / year ', 'Extension ', 'Car park', 'lease valid until ', 'Available on ', 'Swimmimg Pool', 'Available on', 'ELectricity', 'swimming pool', 'Swimming pool', 'RENTED', 'Staffs', 'No', 'Available after', 'IDR', 'Measurement', 'Leasehold until ', 'Available for Monthly Rental', 'Available for yearly rental', '3 and 5 years ', '20 years', 'Elecricity', 'The construction will be completed by ', 'Swimming pool ', 'Construction starting ', 'Available for monthly rental', 'This villa will be available and completion ', 'Available for', 'Price per are ', 'Price per are (per year)', 'Available ', 'Available for leasehold ', 'Available for Freehold', 'View', 'Leasehold Valid until', 'Selling price of ', 'Price/are ', 'Living Area ', 'Rented until', 'Leasehold valid for', 'Valid until', 'Swimming Pool Size', 'Price/year', 'Complex of', 'Renovated', 'Unit Available', 'Internet', 'Leasehold for', 'Swimming pool size', 'LEASEHOLD UNTIL', 'PLN', 'Restaurant Size', 'Staff Building Size', 'Bar', 'Reception hall', 'Villa 2 Bedrooms', 'Bungalows', 'Free to Build', 'Swimming Pool size', 'Parking size', 'Unit', 'Access ', 'Leaehold valid until', 'Available for ', 'Booked until ', 'Price/m2', 'PRICE PER M2', 'Swimming Pool Size ', 'Swimming pool size ', 'Leasehold valid', 'Lease valid until', 'LEASE UNTIL', 'OPTION TO EXTEND', 'PRICE / M2 / YEAR', 'Long lease valid until ', 'Title Status', 'Monthly ', 'Yearly', 'Lesehold until', 'LEASEHOLD ', 'FREEHOLD LAND', 'LEASEHOLD LAND 1', 'LEASEHOLD LAND 2 ', 'LICENSE', 'PRICE PER ARE', 'Price per Are', 'BEACH FRONTAGE', 'SWIMMING POOL SIZE', 'Water', 'LEASEHOLD UNTIL ', 'Price per m2 ', 'Surf spot ', 'Land shape', 'EXPIRATION DATE ', 'LEASE EXPIRATION DATE', 'Price / m2 ', 'Lease ends ', 'Floor', 'Access', 'Ownership Type', 'Electricity Capacity', 'Price per Are ');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_amenities_title" AS ENUM('City Center View', 'Commercial Zoning', 'Fully Furnished', 'Kitchen', 'Living Area', 'Modern Minimalist', 'Residential Zoning', 'Swimming Pool', 'Water', 'Architecture', 'Dryer Machine & washing machine', 'Garden', 'Guest Toilet', 'Gym', 'Laundry Space', 'Outdoor Terrace and Bar', 'Pantry', 'Parking', 'River Front View', 'Security', 'Smart Tv', 'Staff Room', 'Terrace', 'Wifi', 'Parking Area', 'Pondok Wisata Zoning', 'Rental license', 'Surf Spot', 'Beachside', 'Internet', 'Spa', 'Beachfront View', 'Cliff Front View', 'Ocean View', 'Garage', 'Tropical Architecture', 'TV Cable', 'Jungle View', 'Partly Furnished', 'Rice Field View', 'Unfurnished', 'Mediterranean', 'Mountains View', 'Rooftop', 'Koi Ponds', 'Village', 'VIP Room', 'Wedding Area', 'Solar Panels', 'Tourism Zoning', 'CCTV', 'Powder Room', 'Water filter', 'Wet kitchen', 'Water Supply', 'Rooftop Gazebo', 'Fiber Optic Internet', 'lobby', 'Android TV', 'splitable', 'Traditional Joglo', 'Banquet Area', 'Additional', 'Reversed osmosis filtered water', 'Solar power heating water', 'Water softener', 'Zoning', 'Furniture');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_area_1" AS ENUM('TABANAN AREA', 'CANGGU AREA', 'NORTH BALI AREA', 'UMALAS AND KEROBOKAN AREA', 'BUKIT AREA', 'SANUR AND EAST COAST AREA', 'ROTE ISLAND', 'SEMINYAK AREA', 'DENPASAR', 'UBUD AREA', 'MENGWI', 'SUMBAWA', 'NUSA LEMBONGAN / CENINGAN / PENIDA', 'LOMBOK', 'BADUNG AREA', 'SUMBA', 'WEST SUMATERA', 'FLORES', 'EAST JAVA', 'Kintamani', 'GIANYAR', 'NUSA DUA', 'JEMBRANA AREA', 'WEST JAVA', 'OTHERS');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_area_2" AS ENUM('Kedungu', 'Berawa', 'Buleleng', 'Umalas', 'Tegal Cupek', 'Sanur', 'Seminyak', 'Jimbaran', 'Cemagi', 'Pecatu', 'Pererenan', 'Mas', 'Keramas', 'Nyanyi', 'Tibubeneng', 'Tumbak Bayuh', 'Batu Bolong / Echo Beach', 'Payangan', 'Gili Islands', 'Buduk', 'Petitenget', 'Mentawai', 'GILI TRAWANGAN', 'Kerobokan', 'Ketewel', 'South Bukit', 'Padonan', 'Tegallalang', 'Others', 'Amed / Tulamben', 'Seseh', 'Ungasan', 'Kuta', 'Kayu Tulang', 'Legian', 'Mandalika', 'Kaba - Kaba', 'Batu Belig', 'Pantai Lima', 'Babakan', 'Balian', 'Tying Tutul', 'Kuta Area', 'Medewi', 'Singaraja', 'Senggigi Area');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_country" AS ENUM('Indonesia');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE TYPE "public"."enum_properties_state" AS ENUM('Bali', 'East Nusa Tenggara', 'Nusa Tenggara Barat', 'West Sumatra', 'West Nusa Tenggara', 'East Java', 'Nusa Tenggara Timur', 'West Java');
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "agents_contacts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "agents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "properties_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"icon_placeholder" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties_plans_locales" (
  	"title" "enum_properties_plans_title",
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "properties_plans_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "properties_spaces" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "properties_spaces_locales" (
  	"title" "enum_properties_spaces_title",
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "properties_spaces_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "properties_amenities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "properties_amenities_locales" (
  	"title" "enum_properties_amenities_title",
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	CONSTRAINT "properties_amenities_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "properties_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"file_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "properties" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"sku" varchar,
  	"type" "enum_properties_type",
  	"ownership" "enum_properties_ownership",
  	"price" numeric DEFAULT 0,
  	"currency" "enum_properties_currency",
  	"descriptions_html" varchar,
  	"area_1" "enum_properties_area_1",
  	"area_2" "enum_properties_area_2",
  	"address" varchar,
  	"lat" numeric DEFAULT 0,
  	"lng" numeric DEFAULT 0,
  	"country" "enum_properties_country",
  	"state" "enum_properties_state",
  	"street_name" varchar,
  	"street_number" varchar,
  	"post_code" varchar,
  	"video" varchar,
  	"agent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "properties_locales" (
  	"title" varchar,
  	"description" varchar,
  	"descriptions" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL,
  	CONSTRAINT "properties_locales_locale_parent_id_unique" UNIQUE("_locale","_parent_id")
  );
  
  CREATE TABLE IF NOT EXISTS "properties_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"properties_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "agents_contacts" ADD CONSTRAINT "agents_contacts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."agents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "agents" ADD CONSTRAINT "agents_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_plans" ADD CONSTRAINT "properties_plans_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_plans" ADD CONSTRAINT "properties_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_plans_locales" ADD CONSTRAINT "properties_plans_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties_plans"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_spaces" ADD CONSTRAINT "properties_spaces_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_spaces" ADD CONSTRAINT "properties_spaces_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_spaces_locales" ADD CONSTRAINT "properties_spaces_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties_spaces"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_amenities" ADD CONSTRAINT "properties_amenities_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_amenities" ADD CONSTRAINT "properties_amenities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_amenities_locales" ADD CONSTRAINT "properties_amenities_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties_amenities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_images" ADD CONSTRAINT "properties_images_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_images" ADD CONSTRAINT "properties_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties" ADD CONSTRAINT "properties_agent_id_agents_id_fk" FOREIGN KEY ("agent_id") REFERENCES "public"."agents"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_locales" ADD CONSTRAINT "properties_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "agents_contacts_order_idx" ON "agents_contacts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "agents_contacts_parent_id_idx" ON "agents_contacts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "agents_created_at_idx" ON "agents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "properties_plans_order_idx" ON "properties_plans" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_plans_parent_id_idx" ON "properties_plans" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_spaces_order_idx" ON "properties_spaces" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_spaces_parent_id_idx" ON "properties_spaces" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_amenities_order_idx" ON "properties_amenities" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_amenities_parent_id_idx" ON "properties_amenities" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_images_order_idx" ON "properties_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_images_parent_id_idx" ON "properties_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_slug_idx" ON "properties" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "properties_created_at_idx" ON "properties" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "properties_rels_order_idx" ON "properties_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "properties_rels_parent_idx" ON "properties_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_path_idx" ON "properties_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "users";
  DROP TABLE "media";
  DROP TABLE "agents_contacts";
  DROP TABLE "agents";
  DROP TABLE "properties_plans";
  DROP TABLE "properties_plans_locales";
  DROP TABLE "properties_spaces";
  DROP TABLE "properties_spaces_locales";
  DROP TABLE "properties_amenities";
  DROP TABLE "properties_amenities_locales";
  DROP TABLE "properties_images";
  DROP TABLE "properties";
  DROP TABLE "properties_locales";
  DROP TABLE "properties_rels";
  DROP TABLE "payload_preferences";
  DROP TABLE "payload_preferences_rels";
  DROP TABLE "payload_migrations";`)
}
