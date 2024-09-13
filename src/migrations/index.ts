import * as migration_20240913_152957_initial from './20240913_152957_initial';

export const migrations = [
  {
    up: migration_20240913_152957_initial.up,
    down: migration_20240913_152957_initial.down,
    name: '20240913_152957_initial'
  },
];
