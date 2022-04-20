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
 * @file Entity Type Tags for Valhelsia: Volatile
 */

/**
 * Entity Type Tag Event Handler
 */
onEvent('tags.entity_type', event => {

  // Add Halloween Event Candy to Spoopy Mobs
  event.add('valhelsia_tweaks:drops_candy', [
    'minecraft:zombie',
    'minecraft:husk',
    'minecraft:skeleton',
    'minecraft:stray',
    'minecraft:witch',
    'minecraft:spider',
    'minecraft:phantom',
    'minecraft:cave_spider',
    'quark:wraith',
    'quark:forgotten',
    'goblintraders:goblin_trader', // Arguably not spoopy enough, but I'm sure they horde candy.
    'goblintraders:vein_goblin_trader',
    'graveyard:acolyte',
    'graveyard:ghoul',
    'graveyard:nightmare',
    'graveyard:reaper',
    'graveyard:revenant',
    'graveyard:skeleton_creeper',
  ]);

});