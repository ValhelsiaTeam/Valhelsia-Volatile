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
 * @file Crushing recipes for Valhelsia: Volatile.
 * 
 * Includes a function to add crushing recipes to multiple mods at the same time.
 */

/**
 * Crushing Recipe Event Handler
 */
onEvent('recipes', event => {
  /**
   * Creates a crushing recipe for multiple mods.
   * Note: This currently only works for simple recipes that have one input ingredient and one output item type.
   * @param {*} output 
   * @param {*} input 
   */
  const crush = (output, input) => {
    // TODO: Rework this to allow secondary outputs to work - not entirely simple since IE and Create have very
    //       different approaches to how they handle this (and Mekanism doesn't appear to handle it at all).
    //       Recipes with secondary outputs might end up with a separate function instead of this one.
    event.recipes.immersiveengineeringCrusher(output, input);
    //event.recipes.mekanismCrushing(output, input); // TODO: Add back once KJS Mekanism updates.
    event.recipes.createCrushing(output, input);
  };

  // Remove unused crushing recipes.
  // Note: Only remove recipes here if they're being replaced immediately afterwards in this script.
  // For removal of crushing recipes with no replacement, use remove.js instead.
  [
    // Placeholder.
  ].forEach(function (remove) {
    event.remove({id: remove});
  });

  // TODO: Add crushing recipes here.
});