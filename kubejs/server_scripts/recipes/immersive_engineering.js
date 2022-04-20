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
 */

/**
 * Immersive Engineering Recipe Event Handler
 */
onEvent('recipes', event => {

  // Fermenter Recipe Template
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

  // Squeezer Recipe Template
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

  // ----- Squeezer Recipes -----
  squeezer('immersiveengineering:plantoil', '#forge:seeds/hemp', 120)
  squeezer('immersiveengineering:plantoil', '#forge:seeds/flax', 100)

});