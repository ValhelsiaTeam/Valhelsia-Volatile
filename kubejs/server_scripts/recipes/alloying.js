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
 * @file Alloying recipes for Valhelsia: Volatile.
 * 
 * Includes a function to add alloying recipes to multiple mods at the same time.
 * Also replaces some existing alloying recipes in order to unify them between mods.
 */

/**
 * Alloying Recipe Event Handler
 */
onEvent('recipes', event => {

  /**
   * Creates an alloy recipe for multiple mods.
   * @param {*} output 
   * @param {*[]} inputs 
   */
  const alloy = (output, inputs) => {
    // Create
    event.recipes.createMixing(output, inputs).heated();
    // TODO: Consider adding a flag to switch between unheated, heated, superheated mixing recipes.
    //       For now, heated is a sensible default for most alloying.

    // Immersive Engineering
    if (inputs.length == 2) {
      event.recipes.immersiveengineeringAlloy(output, inputs[0], inputs[1]);
    }
  };

  // Remove unused alloying recipes.
  // Note: Only remove recipes here if they're being replaced immediately afterwards in this script.
  // For removal of alloying recipes with no replacement, use remove.js instead.
  [
    'create:mixing/brass_ingot',
    'immersiveengineering:alloysmelter/brass',
    'immersiveengineering:alloysmelter/bronze',
    'immersiveengineering:alloysmelter/constantan',
    'immersiveengineering:alloysmelter/electrum',
  ].forEach(function (remove) {
    event.remove({id: remove});
  });

  // Create
  alloy('2x create:brass_ingot', ['#forge:ingots/copper', '#forge:ingots/zinc']);
  // TODO: Look through Create mixing recipes - there's plenty more that should be removed and moved here
  //       in order to add compatibility with other alloying methods.
  
  // Forbidden and Arcanus
  alloy('forbidden_arcanus:obsidian_ingot', ['4x #forge:dusts/obsidian', '4x #forge:nuggets/iron']);

  // The Graveyard
  alloy('graveyard:dark_iron_ingot', ['#forge:ingots/iron', 'graveyard:corruption']);
  
  // Immersive Engineering
  alloy('2x immersiveengineering:ingot_constantan', ['#forge:ingots/copper', '#forge:ingots/nickel']);
  alloy('2x immersiveengineering:ingot_constantan', ['#forge:dusts/copper', '#forge:dusts/nickel']);
  alloy('2x immersiveengineering:ingot_electrum', ['#forge:ingots/gold', '#forge:ingots/silver']);
  alloy('2x immersiveengineering:ingot_electrum', ['#forge:dusts/gold', '#forge:dusts/silver']);

  // Mekanism
  alloy('4x mekanism:ingot_bronze', ['3x #forge:ingots/copper', '#forge:ingots/tin']);
  alloy('4x mekanism:ingot_bronze', ['3x #forge:dusts/copper', '#forge:dusts/tin']);
  alloy('mekanism:alloy_infused', ['#forge:ingots/iron', '#forge:dusts/redstone']);
  alloy('mekanism:alloy_reinforced', ['#forge:alloys/advanced', '2x #forge:dusts/diamond']);
  alloy('mekanism:alloy_atomic', ['#forge:alloys/elite', '4x #forge:dusts/refined_obsidian']);

  // Refined Storage
  alloy('4x refinedstorage:quartz_enriched_iron', ['3x #forge:ingots/iron', '#forge:gems/quartz']);
  alloy('4x refinedstorage:quartz_enriched_iron', ['3x #forge:dusts/iron', '#forge:gems/quartz']);

});