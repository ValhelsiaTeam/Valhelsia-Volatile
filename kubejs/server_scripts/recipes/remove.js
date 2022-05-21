// priority: 100

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
 * @file Recipe removals for Valhelsia: Volatile.
 * 
 * If intending to replace the recipe with a new one (be it differing input or output), 
 * it is preferable to use replace instead of remove, if practical.
 * @see replace.js
 * 
 * The Alloying and Crushing scripts also remove relevant recipes in the same script
 * only if immediately creating a new recipe that is intended to replace that recipe
 * (typically to add multi-mod support for a recipe).
 * @see alloying.js
 * @see crushing.js
 * 
 */

/**
 * Recipe Removal Event Handler (to be used for recipe removal only).
 */
onEvent('recipes', function (event) {

  // Remove recipes by recipe ID.
  [
    'byg:chain_plating', // Redundant Item.
    'graveyard:dark_iron_ingot', // Crafting method changing.
    'immersiveengineering:crafting/gold_ingot_from_dust_from_blasting', // Duplicate recipe.
    'immersiveengineering:crafting/gold_ingot_from_dust', // Duplicate recipe.
    'immersiveengineering:crafting/iron_ingot_from_dust_from_blasting', // Duplicate recipe.
    'immersiveengineering:crafting/iron_ingot_from_dust', // Duplicate recipe.
    'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
    'immersiveengineering:crafting/nugget_copper_to_copper_ingot', // Redundant recipe.
    'undergarden:smoke_glitterkelp', // Redundant Recipe.
    'undergarden:smelt_glitterkelp', // Redundant Recipe.

    // Immersive Engineering
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove recipes by input.
  [
    'byg:chain_plating', // Redundant Item.
  ].forEach((ingredientID) => event.remove({input: ingredientID}));

  // Remove recipes by output.
  [
    // Immersive Engineering
    'immersiveengineering:ingot_lead',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:nugget_copper',
    'immersiveengineering:nugget_lead',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:raw_block_lead',
    'immersiveengineering:raw_block_uranium',
    'immersiveengineering:raw_lead',
    'immersiveengineering:raw_uranium',
    'immersiveengineering:sword_steel',
    'immersiveengineering:pickaxe_steel',
    'immersiveengineering:axe_steel',
    'immersiveengineering:shovel_steel',
    'immersiveengineering:hoe_steel',

    // Mekanism Tools
    'mekanismtools:steel_helmet',
    'mekanismtools:steel_chestplate',
    'mekanismtools:steel_leggings',
    'mekanismtools:steel_boots',
    'mekanismtools:lapis_lazuli_sword',
    'mekanismtools:lapis_lazuli_pickaxe',
    'mekanismtools:lapis_lazuli_axe',
    'mekanismtools:lapis_lazuli_shovel',
    'mekanismtools:lapis_lazuli_hoe',
    'mekanismtools:lapis_lazuli_paxel',
    'mekanismtools:lapis_lazuli_helmet',
    'mekanismtools:lapis_lazuli_chestplate',
    'mekanismtools:lapis_lazuli_leggings',
    'mekanismtools:lapis_lazuli_boots',
    'mekanismtools:lapis_lazuli_shield',
  ].forEach((itemID) => event.remove({output: itemID}));

});
