import * as migration_20240913_152957_initial from './20240913_152957_initial';
import * as migration_20240913_202754_lat_lng_textfield from './20240913_202754_lat_lng_textfield';
import * as migration_20240913_203525_lat_lng_textfield1 from './20240913_203525_lat_lng_textfield1';

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
    name: '20240913_203525_lat_lng_textfield1'
  },
];
