import * as migration_20240930_011215_init from './20240930_011215_init';
import * as migration_20240930_073929_margin_block from './20240930_073929_margin_block';
import * as migration_20240930_075219_margin_block from './20240930_075219_margin_block';

export const migrations = [
  {
    up: migration_20240930_011215_init.up,
    down: migration_20240930_011215_init.down,
    name: '20240930_011215_init',
  },
  {
    up: migration_20240930_073929_margin_block.up,
    down: migration_20240930_073929_margin_block.down,
    name: '20240930_073929_margin_block',
  },
  {
    up: migration_20240930_075219_margin_block.up,
    down: migration_20240930_075219_margin_block.down,
    name: '20240930_075219_margin_block'
  },
];
