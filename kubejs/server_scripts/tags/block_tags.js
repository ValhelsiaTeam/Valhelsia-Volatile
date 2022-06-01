// priority: 110
//   __   ___   _    _  _ ___ _    ___ ___   _   
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\  
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \ 
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\
//     __   _____  _      _ _____ ___ _    ___     
//     \ \ / / _ \| |    /_\_   _|_ _| |  | __|    
//      \ V / (_) | |__ / _ \| |  | || |__| _|     
//       \_/ \___/|____/_/ \_\_| |___|____|___|    
//

/**
 * @file Block Tag Additions for Valhelsia: Volatile.
 * 
 * These tags differ from item tags in that they impact the block form only,
 * and therefore mainly have in-world effects. 
 * 
 */

/**
 * Block Tag Event Handler.
 */
onEvent('tags.blocks', event => {

  // Ores
  event.add('forge:ores', [
    'byg:emeraldite_ore',
  ]);
  event.add('forge:ores/emeraldite', 'byg:emeraldite_ore');

  // Storage Blocks
  event.add('forge:storage_blocks', [
    'byg:raw_pendorite_block',
    'undergarden:forgotten_block',
  ]);

  event.add('forge:storage_blocks/raw_pendorite', 'byg:raw_pendorite_block');
  event.add('forge:storage_blocks/forgotten_metal', 'undergarden:forgotten_block');

  // Sandstones
  event.add('forge:sandstone', [
    'byg:black_smooth_sandstone',
    'byg:blue_smooth_sandstone',
    'byg:pink_smooth_sandstone',
    'byg:purple_smooth_sandstone',
    'byg:white_smooth_sandstone',
    'quark:sandstone_bricks',
    'quark:red_sandstone_bricks',
  ]);

  event.add('forge:sandstone/black', [
    'byg:black_sandstone',
    'byg:black_chiseled_sandstone',
    'byg:black_cut_sandstone',
    'byg:black_smooth_sandstone',
  ]);

  event.add('forge:sandstone/blue', [
    'byg:blue_sandstone',
    'byg:blue_chiseled_sandstone',
    'byg:blue_cut_sandstone',
    'byg:blue_smooth_sandstone',
  ]);

  event.add('forge:sandstone/colorless', [
    'quark:sandstone_bricks',
  ]);

  event.add('forge:sandstone/pink', [
    'byg:pink_sandstone',
    'byg:pink_chiseled_sandstone',
    'byg:pink_cut_sandstone',
    'byg:pink_smooth_sandstone',
  ]);

  event.add('forge:sandstone/purple', [
    'byg:purple_sandstone',
    'byg:purple_chiseled_sandstone',
    'byg:purple_cut_sandstone',
    'byg:purple_smooth_sandstone',
  ]);

  event.add('forge:sandstone/red', [
    'quark:red_sandstone_bricks',
  ]);

  event.add('forge:sandstone/soul', [
    'quark:soul_sandstone',
    'quark:soul_sandstone_bricks',
    'quark:smooth_soul_sandstone',
    'quark:cut_soul_sandstone',
    'quark:chiseled_soul_sandstone',
  ]);

  event.add('forge:sandstone/soulless', [
    'forbidden_arcanus:soulless_sandstone',
    'forbidden_arcanus:cut_soulless_sandstone',
    'forbidden_arcanus:polished_soulless_sandstone',
  ]);

  event.add('forge:sandstone/windswept', [
    'byg:windswept_sandstone',
    'byg:chiseled_windswept_sandstone',
    'byg:cut_windswept_sandstone',
    'byg:smooth_windswept_sandstone',
    'byg:windswept_sandstone_pillar',
  ]);

  event.add('forge:sandstone/white', [
    'byg:white_sandstone',
    'byg:white_chiseled_sandstone',
    'byg:white_cut_sandstone',
    'byg:white_smooth_sandstone',
  ]);

});