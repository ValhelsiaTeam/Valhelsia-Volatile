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
 * @file Shapeless recipe additions for Valhelsia: Volatile.
 * @see shaped.js
 */

/**
 * Shapeless Recipe Event Handler
 */
onEvent('recipes', event => {
  // Minecraft
  event.shapeless('minecraft:string', ['#forge:crops/cattail', '#forge:crops/cattail', '#forge:crops/cattail']);

  // BYG
  event.shapeless('byg:mossy_stone', ['minecraft:stone', 'minecraft:moss_block']);
  event.shapeless('byg:mossy_red_rock_bricks', ['byg:red_rock_bricks', 'minecraft:moss_block']);
});
