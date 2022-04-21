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
 * @file Sawing recipes for Valhelsia: Volatile.
 * 
 * Includes a function to add sawing recipes to multiple mods at the same time.
 * Also replaces some existing sawing recipes in order to unify them between mods.
 */

/**
 * Sawing Recipe Event Handler
 */
 onEvent('recipes', event => {
  /**
   * Creates a sawing recipe for multiple mods.
   * @param {(string|Item)} output The resulting item(s).
   * @param {(string|Ingredient)} input A single ingredient to saw.
   */
  const saw = (output, input) => {
    event.recipes.immersiveengineeringSawmill(output, input);
    // TODO: Expand this to allow secondary outputs and stripping.
    // For future reference:
    // event.recipes.immersiveengineeringSawmill(output, input, [secondaries]) // Secondary output format: {stripping: true, output: 'item:id'}
    // event.recipes.immersiveengineeringSawmill(output, input, [secondaries], stripped)

    // TODO: Add other mods.
  };

  // Remove unused sawing recipes.
  // Note: Only remove recipes here if they're being replaced immediately afterwards in this script.
  // For removal of sawing recipes with no replacement, use remove.js instead.
  [
    // Placeholder.
  ].forEach(function (remove) {
    event.remove({id: remove});
  });

  // TODO: Add sawing recipes here.
  //       To start with, look at existing IE sawmill recipes and add any missing mods.
});