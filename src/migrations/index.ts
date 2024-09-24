import * as migration_20240913_152957_initial from './20240913_152957_initial';
import * as migration_20240913_202754_lat_lng_textfield from './20240913_202754_lat_lng_textfield';
import * as migration_20240913_203525_lat_lng_textfield1 from './20240913_203525_lat_lng_textfield1';
import * as migration_20240915_191449_page_collection from './20240915_191449_page_collection';
import * as migration_20240916_142422_sections from './20240916_142422_sections';
import * as migration_20240918_113318_required_fields from './20240918_113318_required_fields';
import * as migration_20240923_083738_properties from './20240923_083738_properties';
import * as migration_20240923_084634_properties from './20240923_084634_properties';
import * as migration_20240923_085731_properties from './20240923_085731_properties';
import * as migration_20240923_110816_properties from './20240923_110816_properties';
import * as migration_20240923_131213_richtext from './20240923_131213_richtext';

export const migrations = [
  {
    up: migration_20240913_152957_initial.up,
    down: migration_20240913_152957_initial.down,
    name: '20240913_152957_initial',
  },
  {
    up: migration_20240913_202754_lat_lng_textfield.up,
    down: migration_20240913_202754_lat_lng_textfield.down,
    name: '20240913_202754_lat_lng_textfield',
  },
  {
    up: migration_20240913_203525_lat_lng_textfield1.up,
    down: migration_20240913_203525_lat_lng_textfield1.down,
    name: '20240913_203525_lat_lng_textfield1',
  },
  {
    up: migration_20240915_191449_page_collection.up,
    down: migration_20240915_191449_page_collection.down,
    name: '20240915_191449_page_collection',
  },
  {
    up: migration_20240916_142422_sections.up,
    down: migration_20240916_142422_sections.down,
    name: '20240916_142422_sections',
  },
  {
    up: migration_20240918_113318_required_fields.up,
    down: migration_20240918_113318_required_fields.down,
    name: '20240918_113318_required_fields',
  },
  {
    up: migration_20240923_083738_properties.up,
    down: migration_20240923_083738_properties.down,
    name: '20240923_083738_properties',
  },
  {
    up: migration_20240923_084634_properties.up,
    down: migration_20240923_084634_properties.down,
    name: '20240923_084634_properties',
  },
  {
    up: migration_20240923_085731_properties.up,
    down: migration_20240923_085731_properties.down,
    name: '20240923_085731_properties',
  },
  {
    up: migration_20240923_110816_properties.up,
    down: migration_20240923_110816_properties.down,
    name: '20240923_110816_properties',
  },
  {
    up: migration_20240923_131213_richtext.up,
    down: migration_20240923_131213_richtext.down,
    name: '20240923_131213_richtext'
  },
];
