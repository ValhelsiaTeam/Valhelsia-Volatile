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
 * Includes functions to add crushing and milling recipes to multiple mods at the same time.
 * Also replaces some existing crushing recipes in order to unify them between mods.
 */

/**
 * Crushing Recipe Event Handler
 */
onEvent('recipes', event => {
  /**
   * Creates a Crushing recipe for multiple mods.
   * Note: This currently only works for simple recipes that have one input ingredient and one output item type.
   * @param {(string|Item)} output The resulting crushed item(s).
   * @param {(string|Ingredient)} input A single ingredient to crush.
   */
  const crush = (output, input) => {
    // TODO: Rework this to allow secondary outputs to work - not entirely simple since IE and Create have very
    //       different approaches to how they handle this (and Mekanism doesn't appear to handle it at all).
    //       Recipes with secondary outputs might end up with a separate function instead of this one.
    event.recipes.immersiveengineeringCrusher(output, input);
    event.recipes.mekanismCrushing(output, input);
    event.recipes.createCrushing(output, input);
    // TODO: Add Ars Nouveau Crushing.
    // TODO: Add MineColonies Crushing.
  };

  /**
   * Creates a Milling recipe for multiple mods.
   * Milling recipes are also added as crushing recipes (but not the reverse). This is in line with the way
   * the Create mod handles Milling vs Crushing.
   * Note: This currently only works for simple recipes that have one input ingredient and one output item type.
   * @param {(string|Item)} output The resulting milled item(s).
   * @param {(string|Ingredient)} input A single ingredient to mill.
   */
   const mill = (output, input) => {
    event.recipes.createMilling(output, input);
    crush(output, input);
  };

  // Remove unused crushing/milling recipes.
  // Note: Only remove recipes here if they're being replaced immediately afterwards in this script.
  // For removal of crushing/milling recipes with no replacement, use remove.js instead.
  [
    'create:milling/granite',
    'create:milling/sandstone',
    'create:milling/terracotta',
    'mekanism:crushing/soul_soil_to_soul_sand',
  ].forEach(function (remove) {
    event.remove({id: remove});
  });

  // Crushing
  crush('minecraft:red_sand', 'minecraft:granite');
  crush('byg:end_sand', 'minecraft:end_stone');

  // Milling + Crushing
  // Sandstone, Terracotta, and other soft materials can be milled.
  // Harder materials (stone, ore) should only be crushable, not millable.
  mill('minecraft:red_sand', '#forge:sandstone/red');
  mill('minecraft:red_sand', 'minecraft:terracotta');
  mill('minecraft:soul_sand', 'minecraft:soul_soil');
  mill('minecraft:sand', '#forge:sandstone/colorless');
  mill('minecraft:soul_sand', '#forge:sandstone/soul');
  mill('blue_skies:crystal_sand', '#forge:sandstone/crystal');
  mill('blue_skies:midnight_sand', '#forge:sandstone/midnight');
  mill('byg:black_sand', '#forge:sandstone/black');
  mill('byg:blue_sand', '#forge:sandstone/blue');
  mill('byg:pink_sand', '#forge:sandstone/pink');
  mill('byg:purple_sand', '#forge:sandstone/purple');
  mill('byg:white_sand', '#forge:sandstone/white');
  mill('byg:windswept_sand', '#forge:sandstone/windswept');
  mill('forbidden_arcanus:soulless_sand', '#forge:sandstone/soulless');
});