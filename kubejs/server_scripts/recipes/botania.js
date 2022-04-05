// priority: 10
// Valhelsia: Volatile
// Botania Additions & Compatibility

onEvent('recipes', event => {

  // Pure Daisy Recipe Template
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

  // Alchemy Catalyst Recipe Template
  const alchemy = (output, input, mana, group) => {
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

  // Conjuration Catalyst Recipe Template
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

  const conj2xPlant = (plant) => {
    conjuration(Item.of(plant, 2), plant, 800);
  }

  const conj2xLeaves = (leaves) => {
    conjuration(Item.of(leaves, 2), leaves, 2000);
  }

  // Mana Infusion (without catalyst) Recipe Template
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

  // ----- Conjuration Infusion Recipes -----

  // Item Duplication
  // Reference Botania Mana Costs: 
  // 200 for Netherrack, 720 for gravel, 800 mana for grass, 1500 for soul sand, 2000 mana for leaves, 2100 for coal, 5000 for glowstone dust.

  // Plant Duplication
  allLeafCarpets.forEach(function (plant) {
    conj2xPlant(plant);
  });

  [
    'minecraft:nether_sprouts',
    'byg:lament_sprouts',
    'byg:sythian_sprout',
    'byg:embur_sprouts',
    'byg:ivis_sprout',
    'byg:bulbis_sprout',
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
    'byg:imparius_vine',
    'byg:ivis_roots',
    'byg:ender_lily',
    'twigs:bamboo_leaves',
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
  allBYGLeaves.forEach(function (leaves) {
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

});