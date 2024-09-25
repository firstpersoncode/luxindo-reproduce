import * as migration_20240925_093151_initial from './20240925_093151_initial';

export const migrations = [
  {
    up: migration_20240925_093151_initial.up,
    down: migration_20240925_093151_initial.down,
    name: '20240925_093151_initial'
  },
];
