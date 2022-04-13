// priority: 100
// Valhelsia: Volatile
// Removal of unused, duplicate, or otherwise undesired recipes.

onEvent('recipes', function (event) {

  // Remove recipes by recipe ID.
  [
    'byg:chain_plating', // Redundant Item.
    'undergarden:smoke_glitterkelp', // Redundant Recipe.
    'undergarden:smelt_glitterkelp', // Redundant Recipe.

    // Immersive Engineering
    'immersiveengineering:crafting/gold_ingot_from_dust_from_blasting', // Duplicate recipe.
    'immersiveengineering:crafting/gold_ingot_from_dust', // Duplicate recipe.
    'immersiveengineering:crafting/iron_ingot_from_dust_from_blasting', // Duplicate recipe.
    'immersiveengineering:crafting/iron_ingot_from_dust', // Duplicate recipe.
    'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
  ].forEach(function (remove) {
    event.remove({id: remove})
  });

  // Remove recipes by input.
  [
    'byg:chain_plating', // Redundant Item.
  ].forEach(function (remove) {
    event.remove({output: remove})
  });

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
    'immersiveengineering:plate_copper',
    'immersiveengineering:plate_gold',
    'immersiveengineering:plate_iron',
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
  ].forEach(function (remove) {
    event.remove({output: remove})
  });

});
