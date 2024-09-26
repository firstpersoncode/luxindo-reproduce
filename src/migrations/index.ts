import * as migration_20240925_093151_initial from './20240925_093151_initial';
import * as migration_20240925_163655_block_search_properties_filter_fields from './20240925_163655_block_search_properties_filter_fields';

export const migrations = [
  {
    up: migration_20240925_093151_initial.up,
    down: migration_20240925_093151_initial.down,
    name: '20240925_093151_initial',
  },
  {
    up: migration_20240925_163655_block_search_properties_filter_fields.up,
    down: migration_20240925_163655_block_search_properties_filter_fields.down,
    name: '20240925_163655_block_search_properties_filter_fields'
  },
];
