import * as migration_20240928_073648_init from './20240928_073648_init';
import * as migration_20240928_075432_search_block from './20240928_075432_search_block';
import * as migration_20240928_075657_block_search from './20240928_075657_block_search';
import * as migration_20240928_082111_block_search from './20240928_082111_block_search';

export const migrations = [
  {
    up: migration_20240928_073648_init.up,
    down: migration_20240928_073648_init.down,
    name: '20240928_073648_init',
  },
  {
    up: migration_20240928_075432_search_block.up,
    down: migration_20240928_075432_search_block.down,
    name: '20240928_075432_search_block',
  },
  {
    up: migration_20240928_075657_block_search.up,
    down: migration_20240928_075657_block_search.down,
    name: '20240928_075657_block_search',
  },
  {
    up: migration_20240928_082111_block_search.up,
    down: migration_20240928_082111_block_search.down,
    name: '20240928_082111_block_search'
  },
];
