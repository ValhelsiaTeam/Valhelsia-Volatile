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
 * @file Recipe additions for Botania's crafting methods.
 * 
 * Includes templates for adding Pure Daisy and Mana Infusion
 * recipes (with variants for each catalyst, as well as no catalyst).
 */

/**
 * Botania Recipe Event Handler
 */
onEvent('recipes', event => {

  /**
   * Creates a Pure Daisy recipe.
   * Whichever block is specified as the input will be converted into the output block over time.
   * @param {string} output The block ID of the resulting block.
   * @param {string} input The block ID of the block to convert.
   */
  const purify = (output, input) => {
    event.custom({
      type: 'botania:pure_daisy',
      input: {
          type: 'block',
          block: input
      },
      output: {
          name: output
      }
    });
  };

  /**
   * Creates an Alchemy Catalyst Mana Infusion recipe (without group).
   * @param {(string|Item)} output One or more output items. Usually just one as alchemy is used for transformation.
   * @param {(string|Ingredient)} input A single input ingredient.
   * @param {number} mana The mana cost of the infusion. For reference, logs tend to cost 40 and saplings 120 mana.
   */
  const alchemy = (output, input, mana) => {
    event.custom({
      type: 'botania:mana_infusion',
      input: Ingredient.of(input).toJson(),
      output: Item.of(output).toResultJson(),
      mana: mana,
      catalyst: {
        type: 'block',
        block: 'botania:alchemy_catalyst'
      }
    });
  };

  /**
   * Creates an Alchemy Catalyst Mana Infusion recipe (with group).
   * @param {(string|Item)} output One or more output items. Usually just one as alchemy is used for transformation.
   * @param {(string|Ingredient)} input A single input ingredient.
   * @param {number} mana The mana cost of the infusion. For reference, logs tend to cost 40 and saplings 120 mana.
   * @param {string} group The Botania item group ID to add the recipe to. Examples: 'botania:log_cycle', 'botania:sapling_cycle', 'botania:shrub_cycle'.
   */
   const alchemyG = (output, input, mana, group) => {
    event.custom({
      type: 'botania:mana_infusion',
      input: Ingredient.of(input).toJson(),
      output: Item.of(output).toResultJson(),
      mana: mana,
      group: group,
      catalyst: {
        type: 'block',
        block: 'botania:alchemy_catalyst'
      }
    });
  };

  /**
   * Creates a Conjuration Catalyst Mana Infusion recipe.
   * @param {(string|Item)} output One or more output item(s). Usually exactly two as conjuration is used for doubling.
   * @param {(string|Ingredient)} input A single input ingredient.
   * @param {number} mana The mana cost of the infusion. For reference, plants tend to cost 800 mana and leaves cost 2000.
   */
  const conjuration = (output, input, mana) => {
    event.custom({
      type: 'botania:mana_infusion',
      input: Ingredient.of(input).toJson(),
      output: Item.of(output).toResultJson(),
      mana: mana,
      catalyst: {
        type: 'block',
        block: 'botania:conjuration_catalyst'
      }
    });
  };

  /**
   * A shortcut to creating a plant-doubling Conjuration Catalyst Mana Infusion recipe.
   * @param {(string|Item)} plant The plant item to double. Acts as both the input and output.
   */
  const conj2xPlant = (plant) => {
    conjuration(Item.of(plant, 2), plant, 800);
  };

  /**
   * A shortcut to creating a leaf-doubling Conjuration Catalyst Mana Infusion recipe.
   * @param {(string|Item)} leaves The leaf item to double. Acts as both the input and output.
   */
  const conj2xLeaves = (leaves) => {
    conjuration(Item.of(leaves, 2), leaves, 2000);
  };

  /**
   * Creates a Mana Infusion recipe (without any catalyst being present).
   * @param {(string|Item)} output One or more output items.
   * @param {(string|Ingredient)} input A single input item.
   * @param {number} mana The mana cost of the infusion. See Botania's built-in recipes for reference.
   */
  const infusion = (output, input, mana) => {
    event.custom({
      type: 'botania:mana_infusion',
      input: Ingredient.of(input).toJson(),
      output: Item.of(output).toResultJson(),
      mana: mana
    });
  };

  // ----- Pure Daisy Recipes -----
  purify('forbidden_arcanus:soulless_sand', 'minecraft:soul_sand');
  //purify('minecraft:sand', 'forbidden_arcanus:soulless_sand') // Can't currently chain recipes, it converts the entire way instantly for some reason.

  // ----- Alchemy Infusion Recipes -----
  alchemy('byg:end_sand', 'minecraft:end_stone', 100);
  alchemy('minecraft:kelp', 'minecraft:seagrass', 200, 'botania:aquatic_cycle');
  alchemy('minecraft:seagrass', 'minecraft:kelp', 200, 'botania:aquatic_cycle');

  // ----- Conjuration Infusion Recipes -----

  // Item Duplication
  // Reference Botania Mana Costs: 
  // 200 for Netherrack, 720 for gravel, 800 mana for grass, 1500 for soul sand, 2000 mana for leaves, 2100 for coal, 5000 for glowstone dust.

  // Plant Duplication
  ALL_LEAF_CARPETS.forEach(function (plant) {
    conj2xPlant(plant);
  });

  [
    'minecraft:nether_sprouts',
    'byg:lament_sprouts',
    'byg:sythian_sprout',
    'byg:embur_sprouts',
    'byg:ivis_sprout',
    'byg:bulbis_sprouts',
    'byg:nightshade_sprouts',
    'byg:cattail_sprout',
    'byg:clover_patch',
    'byg:witch_hazel_branch',
    'byg:witch_hazel_blossom',
    'byg:ether_bulbs',
    'byg:bulbis_oddity',
    'byg:bulbis_anomaly',
    'byg:purple_bulbis_oddity',
    'byg:purple_bulbis_anomaly',
    'byg:imparius_bush',
    'byg:ivis_roots',
    'byg:ender_lily',
    'twigs:bamboo_leaves',
    'twigs:azalea_flowers',
    'undergarden:deepturf',
    'undergarden:ashen_deepturf',
    'undergarden:frozen_deepturf',
    'undergarden:tall_deepturf',
    'undergarden:shimmerweed',
    'undergarden:tall_shimmerweed',
    'valhelsia_structures:hanging_vines',
  ].forEach(function (plant) {
    conj2xPlant(plant);
  });

  // Leaves Duplication
  ALL_BYG_LEAVES.forEach(function (leaves) {
    conj2xLeaves(leaves);
  });

  [
    'ecologics:coconut_leaves',
    'ecologics:walnut_leaves',
    'forbidden_arcanus:cherrywood_leaves',
    'forbidden_arcanus:mysterywood_leaves', // deliberately not the nuggety ones.
    'quark:blue_blossom_leaves',
    'quark:lavender_blossom_leaves',
    'quark:orange_blossom_leaves',
    'quark:pink_blossom_leaves',
    'quark:yellow_blossom_leaves',
    'quark:red_blossom_leaves',
    'undergarden:smogstem_leaves',
    'undergarden:wigglewood_leaves',
    'undergarden:grongle_leaves',
    'undergarden:hanging_grongle_leaves',
  ].forEach(function (leaves) {
    conj2xLeaves(leaves);
  });

  // Mana Infusion Recipes
  // ---------------------
  // None yet.

});