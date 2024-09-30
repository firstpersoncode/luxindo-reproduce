import * as migration_20240930_011215_init from './20240930_011215_init';

export const migrations = [
  {
    up: migration_20240930_011215_init.up,
    down: migration_20240930_011215_init.down,
    name: '20240930_011215_init'
  },
];
