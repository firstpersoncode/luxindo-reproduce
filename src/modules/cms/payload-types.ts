/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    agents: Agent;
    properties: Property;
    pages: Page;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    header: Header;
    footer: Footer;
  };
  locale: 'en' | 'id' | 'fr';
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "agents".
 */
export interface Agent {
  id: number;
  name: string;
  image?: (number | null) | Media;
  contacts?:
    | {
        title: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "properties".
 */
export interface Property {
  id: number;
  title: string;
  slug: string;
  description?: string | null;
  sku?: string | null;
  type?:
    | ('Land' | 'Villa Rental' | 'Villa / House / Apartment' | 'Hotel, Resort, Villa Complex' | 'Commercial Space')
    | null;
  ownership?: ('Rental' | 'Freehold' | 'Leasehold') | null;
  price?: number | null;
  currency?: ('IDR' | 'USD') | null;
  keywords?: string | null;
  template?: ('Default' | 'Search') | null;
  image?: (number | null) | Media;
  plans?:
    | {
        icon?: (number | null) | Media;
        icon_placeholder?: string | null;
        title?: ('Area (M 2)' | 'Bedrooms' | 'Bathrooms' | 'Garages' | 'Rooms') | null;
        value?: string | null;
        id?: string | null;
      }[]
    | null;
  spaces?:
    | {
        icon?: (number | null) | Media;
        title?:
          | (
              | 'Land Size'
              | 'Price/are/year'
              | 'Leasehold valid until'
              | 'Year Built'
              | 'Price per m2'
              | 'Lease until '
              | 'Electricity'
              | 'Title'
              | 'Year of renovation '
              | 'Road Access'
              | 'Leasehold Valid Until'
              | 'Swimming Pool '
              | 'Electricity '
              | 'Road Access '
              | 'Leasehold Valid Until '
              | 'Price / Are / Year'
              | 'Title '
              | 'Renovated '
              | 'Leasehold valid until '
              | 'Price / Are '
              | 'Villa Unit'
              | 'Price / Year / Unit'
              | 'Leasehold'
              | 'Price / Are/ Year'
              | 'Swimming Pool'
              | 'Leasedhold Valid until '
              | 'Price/are'
              | 'Price / Are'
              | 'Price / Are / Years'
              | 'Price/Are/Year'
              | 'Leasehold '
              | 'Beach frontage '
              | 'Mainroad frontage'
              | 'PRICE / ARE '
              | 'ROAD ACCESS'
              | 'PRICE / ARE'
              | 'Sauna for '
              | 'Architecture'
              | 'LEASEHOLD VALID UNTIL '
              | 'BUILDING SIZE'
              | 'Price / m2'
              | 'TITLE STATUS '
              | 'LEASEHOLD VALID UNTIL'
              | 'ELECTRICITY'
              | 'BUILDING SIZE '
              | 'ELECTRICITY '
              | 'SWIMMING POOL '
              | 'PRICE/ARE'
              | 'SWIMMING POOL'
              | 'Available On'
              | 'PRICE/ARE/YEAR'
              | 'Building Size'
              | 'Price/Are'
              | 'Building Size '
              | 'Garden'
              | 'TITLE STATUS'
              | 'Price /are '
              | 'Leasehold until'
              | 'Price / are / year'
              | 'Open for leasehold '
              | 'Price / year'
              | 'Price/ are'
              | 'Price / are '
              | 'Price / are'
              | 'Price / are / year '
              | 'Extension '
              | 'Car park'
              | 'lease valid until '
              | 'Available on '
              | 'Swimmimg Pool'
              | 'Available on'
              | 'ELectricity'
              | 'swimming pool'
              | 'Swimming pool'
              | 'RENTED'
              | 'Staffs'
              | 'No'
              | 'Available after'
              | 'IDR'
              | 'Measurement'
              | 'Leasehold until '
              | 'Available for Monthly Rental'
              | 'Available for yearly rental'
              | '3 and 5 years '
              | '20 years'
              | 'Elecricity'
              | 'The construction will be completed by '
              | 'Swimming pool '
              | 'Construction starting '
              | 'Available for monthly rental'
              | 'This villa will be available and completion '
              | 'Available for'
              | 'Price per are '
              | 'Price per are (per year)'
              | 'Available '
              | 'Available for leasehold '
              | 'Available for Freehold'
              | 'View'
              | 'Leasehold Valid until'
              | 'Selling price of '
              | 'Price/are '
              | 'Living Area '
              | 'Rented until'
              | 'Leasehold valid for'
              | 'Valid until'
              | 'Swimming Pool Size'
              | 'Price/year'
              | 'Complex of'
              | 'Renovated'
              | 'Unit Available'
              | 'Internet'
              | 'Leasehold for'
              | 'Swimming pool size'
              | 'LEASEHOLD UNTIL'
              | 'PLN'
              | 'Restaurant Size'
              | 'Staff Building Size'
              | 'Bar'
              | 'Reception hall'
              | 'Villa 2 Bedrooms'
              | 'Bungalows'
              | 'Free to Build'
              | 'Swimming Pool size'
              | 'Parking size'
              | 'Unit'
              | 'Access '
              | 'Leaehold valid until'
              | 'Available for '
              | 'Booked until '
              | 'Price/m2'
              | 'PRICE PER M2'
              | 'Swimming Pool Size '
              | 'Swimming pool size '
              | 'Leasehold valid'
              | 'Lease valid until'
              | 'LEASE UNTIL'
              | 'OPTION TO EXTEND'
              | 'PRICE / M2 / YEAR'
              | 'Long lease valid until '
              | 'Title Status'
              | 'Monthly '
              | 'Yearly'
              | 'Lesehold until'
              | 'LEASEHOLD '
              | 'FREEHOLD LAND'
              | 'LEASEHOLD LAND 1'
              | 'LEASEHOLD LAND 2 '
              | 'LICENSE'
              | 'PRICE PER ARE'
              | 'Price per Are'
              | 'BEACH FRONTAGE'
              | 'SWIMMING POOL SIZE'
              | 'Water'
              | 'LEASEHOLD UNTIL '
              | 'Price per m2 '
              | 'Surf spot '
              | 'Land shape'
              | 'EXPIRATION DATE '
              | 'LEASE EXPIRATION DATE'
              | 'Price / m2 '
              | 'Lease ends '
              | 'Floor'
              | 'Access'
              | 'Ownership Type'
              | 'Electricity Capacity'
              | 'Price per Are '
            )
          | null;
        value?: string | null;
        id?: string | null;
      }[]
    | null;
  amenities?:
    | {
        icon?: (number | null) | Media;
        title?:
          | (
              | 'City Center View'
              | 'Commercial Zoning'
              | 'Fully Furnished'
              | 'Kitchen'
              | 'Living Area'
              | 'Modern Minimalist'
              | 'Residential Zoning'
              | 'Swimming Pool'
              | 'Water'
              | 'Architecture'
              | 'Dryer Machine & washing machine'
              | 'Garden'
              | 'Guest Toilet'
              | 'Gym'
              | 'Laundry Space'
              | 'Outdoor Terrace and Bar'
              | 'Pantry'
              | 'Parking'
              | 'River Front View'
              | 'Security'
              | 'Smart Tv'
              | 'Staff Room'
              | 'Terrace'
              | 'Wifi'
              | 'Parking Area'
              | 'Pondok Wisata Zoning'
              | 'Rental license'
              | 'Surf Spot'
              | 'Beachside'
              | 'Internet'
              | 'Spa'
              | 'Beachfront View'
              | 'Cliff Front View'
              | 'Ocean View'
              | 'Garage'
              | 'Tropical Architecture'
              | 'TV Cable'
              | 'Jungle View'
              | 'Partly Furnished'
              | 'Rice Field View'
              | 'Unfurnished'
              | 'Mediterranean'
              | 'Mountains View'
              | 'Rooftop'
              | 'Koi Ponds'
              | 'Village'
              | 'VIP Room'
              | 'Wedding Area'
              | 'Solar Panels'
              | 'Tourism Zoning'
              | 'CCTV'
              | 'Powder Room'
              | 'Water filter'
              | 'Wet kitchen'
              | 'Water Supply'
              | 'Rooftop Gazebo'
              | 'Fiber Optic Internet'
              | 'lobby'
              | 'Android TV'
              | 'splitable'
              | 'Traditional Joglo'
              | 'Banquet Area'
              | 'Additional'
              | 'Reversed osmosis filtered water'
              | 'Solar power heating water'
              | 'Water softener'
              | 'Zoning'
              | 'Furniture'
            )
          | null;
        value?: string | null;
        id?: string | null;
      }[]
    | null;
  descriptions?: string | null;
  area_1?: string | null;
  area_2?: string | null;
  address?: string | null;
  lat?: string | null;
  lng?: string | null;
  country?: 'Indonesia' | null;
  state?:
    | (
        | 'Bali'
        | 'East Nusa Tenggara'
        | 'Nusa Tenggara Barat'
        | 'West Sumatra'
        | 'West Nusa Tenggara'
        | 'East Java'
        | 'Nusa Tenggara Timur'
        | 'West Java'
      )
    | null;
  street_name?: string | null;
  street_number?: string | null;
  post_code?: string | null;
  video?: string | null;
  images?:
    | {
        file: number | Media;
        id?: string | null;
      }[]
    | null;
  sections?: (RichTextBlock | HeroSearchBlock | SearchBlock | SearchPropertiesBlock)[] | null;
  agent?: (number | null) | Agent;
  related_properties?: (number | Property)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RichTextBlock".
 */
export interface RichTextBlock {
  content?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'RichText';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroSearchBlock".
 */
export interface HeroSearchBlock {
  title?: string | null;
  cta?: string | null;
  search_page_slug?: string | null;
  images?:
    | {
        file: number | Media;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'HeroSearch';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SearchBlock".
 */
export interface SearchBlock {
  title?: string | null;
  filter_area?: string | null;
  filter_sub_area?: string | null;
  filter_types?:
    | ('Land' | 'Villa Rental' | 'Villa / House / Apartment' | 'Hotel, Resort, Villa Complex' | 'Commercial Space')[]
    | null;
  filter_ownerships?: ('Rental' | 'Freehold' | 'Leasehold')[] | null;
  filter_price_start?: number | null;
  filter_price_end?: number | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Search';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SearchPropertiesBlock".
 */
export interface SearchPropertiesBlock {
  filter_area_1?: string | null;
  filter_area_2?: string | null;
  filter_type?:
    | ('Land' | 'Villa Rental' | 'Villa / House / Apartment' | 'Hotel, Resort, Villa Complex' | 'Commercial Space')
    | null;
  filter_ownership?: ('Rental' | 'Freehold' | 'Leasehold') | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'SearchProperties';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  slug: string;
  description?: string | null;
  keywords?: string | null;
  template?: ('Default' | 'Home' | 'About' | 'Contact') | null;
  image?: (number | null) | Media;
  sections?: (RichTextBlock | HeroSearchBlock | SearchBlock | SearchPropertiesBlock)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'agents';
        value: number | Agent;
      } | null)
    | ({
        relationTo: 'properties';
        value: number | Property;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: number;
  logo?: (number | null) | Media;
  navigations?:
    | {
        icon?: (number | null) | Media;
        title: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  logo?: (number | null) | Media;
  footer_note?: string | null;
  navigation_groups?:
    | {
        label?: string | null;
        navigations?:
          | {
              icon?: (number | null) | Media;
              title: string;
              value: string;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}