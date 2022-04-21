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
 * @file Recipe additions for Immersive Engineering's crafting methods.
 * 
 * Includes templates for adding Fermenter and Squeezer recipes.
 * Other recipes are handled via KubeJS Immersive Engineering.
 * 
 * @see crushing.js for crushing recipes.
 * 
 */

/**
 * Immersive Engineering Recipe Event Handler
 */
onEvent('recipes', event => {

  /**
   * Creates a Fermenter recipe for Immersive Engineering.
   * @param {*} fluid The fluid to create.
   * @param {*} input The ingredient to ferment.
   * @param {number} amount The amount of fluid to create (in millibuckets).
   */
  const fermenter = (fluid, input, amount) => {
    event.custom({
        type: 'immersiveengineering:fermenter',
        fluid: {
          fluid: fluid,
          amount: amount
        },
        input: Ingredient.of(input).toJson(),
        energy: 6400
    });
  };

  /**
   * Creates a Squeezer recipe for Immersive Engineering.
   * @param {*} fluid The fluid to create.
   * @param {*} input The ingredient to squeeze.
   * @param {number} amount The amount of fluid to create (in millibuckets).
   */
  const squeezer = (fluid, input, amount) => {
    event.custom({
        type: 'immersiveengineering:squeezer',
        fluid: {
          fluid: fluid,
          amount: amount
        },
        input: Ingredient.of(input).toJson(),
        energy: 6400
    });
  };

  // ----- Fermenter Recipes -----
  fermenter('immersiveengineering:ethanol', '#forge:seeds/rice', 80);

  // ----- Squeezer Recipes -----
  squeezer('immersiveengineering:plantoil', '#forge:seeds/hemp', 120);
  squeezer('immersiveengineering:plantoil', '#forge:seeds/flax', 100);
  squeezer('immersiveengineering:plantoil', 'forbidden_arcanus:golden_orchid_seeds', 40);

  // ----- Other Recipes -----

  // Additional Blast Furnace Fuel Sources
  event.recipes.immersiveengineeringBlastFurnaceFuel('#mekanism:enriched/carbon').time(600);

  // Additional Fertilizers
  event.recipes.immersiveengineeringFertilizer('minecolonies:compost').growthModifier(1.5);

  // Cloche Recipes
  // TODO

  // Metal Press Recipes
  // TODO

});