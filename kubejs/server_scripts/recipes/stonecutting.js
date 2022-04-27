// priority: 10

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
 * @file Stonecutter recipe additions for Valhelsia: Volatile.
 * Includes functions for frequently used recipe templates.
 */

/**
 * Stonecutting Recipe Event Handler
 */
onEvent('recipes', event => {

  /**
   * Creates stonecutting recipes to convert items between each other.
   * Typically used to convert between equivalent stones from different mods (such as Create Limestone and Quark Limestone).
   * @param {(string|Item)} itemA An item, usually a type of raw stone.
   * @param {(string|Item)} itemB Another item, usually a type of raw stone.
   */
  const scReversible = (itemA, itemB) => {
    event.stonecutting(itemA, itemB);
    event.stonecutting(itemB, itemA);
  };

  // Limestone Conversions
  scReversible('create:limestone', 'quark:limestone');
  // TODO: Stairs, Slabs, Walls, etc.

  // Scoria Conversions
  scReversible('create:scoria', 'byg:scoria_stone');
  scReversible('create:scoria_pillar', 'byg:scoria_pillar');
  scReversible('create:cut_scoria_bricks', 'byg:scoria_stonebricks');
  scReversible('create:cut_scoria_brick_stairs', 'byg:scoria_stonebrick_stairs');
  scReversible('create:cut_scoria_brick_slab', 'byg:scoria_stonebrick_slab');
  scReversible('create:cut_scoria_brick_wall', 'byg:scoria_stonebrick_wall');

  // Twigs
  event.stonecutting('9x twigs:pebble', 'minecraft:cobblestone');
});
