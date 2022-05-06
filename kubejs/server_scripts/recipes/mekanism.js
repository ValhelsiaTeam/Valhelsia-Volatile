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
 * @file Recipe additions for Mekanism's crafting methods.
 * 
 * @see crushing.js for crushing recipes.
 * 
 */

/**
 * Mekanism Recipe Event Handler
 */
onEvent('recipes', event => {

  /**
   * Adds a recipe to fill a Metallurgic Infuser with a given type of infusion material.
   * @param {string} type The infusion material to fill the infuser with (eg. 'mekanism:carbon').
   * @param {(string|Ingredient)} input The input ingredient to convert into the infusion material.
   * @param {number} amount The amount of the given type to add.
   */
  const infusionConversion = (type, input, amount) => {
    event.custom({
      type: 'mekanism:infusion_conversion',
      input: {
        ingredient: Ingredient.of(input).toJson()
      },
      output: {
        infuse_type: type,
        amount: amount
      }
    });
  };

  /**
   * Creates a recipe to turn a block into a mossy version of it.
   * @param {(string|Item)} output The item or item ID of the mossy block.
   * @param {(string|Ingredient)} input The item or item ID of the base block.
   */
  const mossify = (output, input) => {
    event.recipes.mekanismMetallurgicInfusing(output, input, 'mekanism:bio', 10);
  };

  /**
   * Creates a recipe to turn a block into a fungal version of it.
   * @param {(string|Item)} output The item or item ID of the mossy block.
   * @param {(string|Ingredient)} input The item or item ID of the base block.
   */
  const fungify = (output, input) => {
    event.recipes.mekanismMetallurgicInfusing(output, input, 'mekanism:fungi', 10);
  };

  /**
   * Creates a recipe to crush an ingredient into Bio Fuel.
   * Note: This is in mekanism.js rather than in crushing.js due to being Mekanism-specific.
   * @param {(string|Ingredient)} input The item or item ID of the base block.
   * @param {number} quantity The number of Bio Fuel items to output.
   */
  const bioCrush = (input, quantity) => {
    event.recipes.mekanismCrushing(`${quantity}x mekanism:bio_fuel`, input);
  };

  // TODO: Add recipes here.
  // Note: When adding bio fuel crushing, use tags where practical, even if they have to be created
  // (such as 'valhelsia:grasses' or 'valhelsia:fruits' or whatever).
  
});