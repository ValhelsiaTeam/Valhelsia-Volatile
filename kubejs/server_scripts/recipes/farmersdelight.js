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
 * @file Recipe additions for Farmer's Delight's crafting methods.
 * 
 * Includes templates for adding cutting board or cooking pot recipes,
 * including presets for different categories of cutting board recipe
 * (eg. stripping, chopping, cutting).
 * 
 */

/**
 * Farmer's Delight Recipe Event Handler
 */
onEvent('recipes', function (event) {

  // Cutting Board Axe Stripping Recipe Template
  const strip = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: "farmersdelight:tool",
        tag: "forge:tools/axes"
      },
      result: [
        Item.of(output).toResultJson(),
        {item: "farmersdelight:tree_bark"}
      ],
      sound: "minecraft:item.axe.strip"
    });
  };

  // Cutting Board Axe Chopping Recipe Template
  const chop = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: "farmersdelight:tool",
        tag: "forge:tools/axes"
      },
      result: [
        Item.of(output).toResultJson()
      ]
    });
  };

  // Cutting Board Knife Cutting Recipe Template
  // Note: When using this, ensure that output is an array.
  const cut = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        tag: "forge:tools/knives"
      },
      result: output
    });
  };

  // Cooking Pot Recipe Template
  const pot = (output, input, container) => {
    event.custom({
      type: "farmersdelight:cooking",
      ingredients: input,
      result: Item.of(output).toResultJson(),
      container: Item.of(container).toJson(),
      experience: 0.2,
      cookingtime: 200
    });
  };

  // ----- Axe Recipes -----

  // ----- Knife Recipes -----
  cut([Item.of('minecraft:string', 2)], '#minecraft:wool');

  // ----- Cooking Pot Recipes -----

});