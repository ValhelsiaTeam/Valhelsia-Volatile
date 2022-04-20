// priority: 120

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
 * @file Item Tag Removal for Valhelsia: Volatile
 */

/**
 * Item Tag Event Handler (to be used for tag removal only).
 * @see item_tags.js
 */
onEvent('tags.items', event => {

  // Mistakenly applied to the ingot instead of the nugget by the mod.
  // TODO: Check if The Undergarden fixes this in an update and remove if no longer required in the future.
  event.remove('forge:nuggets/froststeel', 'undergarden:froststeel_ingot'); 
  event.remove('forge:nuggets/forgotten_metal', 'undergarden:forgotten_ingot'); 

});