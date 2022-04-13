// priority: 100
// Valhelsia: Volatile
// Recipe Input & Output Replacements

onEvent('recipes', function (event) {

  const replaceInputID = (id, from, to) => {
    event.replaceInput({id: id}, from, to, true)
  };

  const replaceInput = (from, to) => {
    event.replaceInput({}, from, to, true)
  };

  // Fix BYG's use of the Fabric tag for lecterns instead of the Forge tag when changing the Lectern recipe.
  replaceInputID('minecraft:lectern', '#c:bookshelves', '#forge:bookshelves');

  // Cobblestone variants in place of Minecraft Cobblestone in some recipes:
  [ // Recipe ID:
    'minecraft:dispenser',
    'minecraft:dropper',
    'minecraft:observer',
    'minecraft:piston',
    'botania:cobble_rod',
    'botania:apothecary_default',
    'supplementaries:turn_table',
    'structurize:sceptergold',
  ].forEach(function (id) {
    replaceInputID(id, 'minecraft:cobblestone', '#minecraft:stone_crafting_materials');
  });

  // Stone variants in place of Minecraft Stone in some recipes:
  [ // Recipe ID:
    'botania:exchange_rod',
    'botania:temperance_stone',
    'botania:tiny_planet',
    'botania:tiny_planet_block',
    'multiblock:multiblock',
  ].forEach(function (id) {
    replaceInputID(id, 'minecraft:stone', '#forge:stone');
  });

  // Feather variants in place of Minecraft Feathers in some recipes:
  [ // Recipe ID:
    'minecraft:writable_book',
    'botania:flighttiara_0',
    'botania:tornado_rod',
    'darkutils:crafting/levitation_plate',
    'darkutils:crafting/slowfall_plate',
    'pneumaticcraft:jet_boots_upgrade_2',
    'rftoolsutility:featherfalling_module',
    'rftoolsutility:featherfallingplus_module',
    'xercamusic:music_sheet',
  ].forEach(function (id) {
    replaceInputID(id, 'minecraft:feather', '#forge:feathers');
  });
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:feather', '#forge:feathers', true);

  // Vine variants in place of Minecraft Vines in some recipes:
  [ // Recipe ID:
    'minecraft:mossy_cobblestone_from_vine',
    'minecraft:mossy_stone_bricks_from_vine',
    'alexsmobs:vine_lasso',
    'botania:mossy_livingwood_planks_vine',
    'botania:mossy_livingrock_bricks_vine',
    'botania:mossy_dreamwood_planks_vine',
    'botania:keep_ivy',
    'botania:thorn_chakram',
    'botania:vine_ball',
    'byg:mossy_stone',
    'byg:mossy_red_rock_bricks',
    'valhelsia_structures:lapidified_jungle_log',
    'waystones:mossy_waystone_convert',
    
  ].forEach(function (id) {
    replaceInputID(id, 'minecraft:vine', '#valhelsia:vines/green');
  });

  // Kelp variants in place of Minecraft Kelp in some recipes:
  [ // Recipe ID:
    'alexsmobs:shark_tooth_arrow',
    'minecraft:dried_kelp_from_campfire_cooking',
    'minecraft:dried_kelp_from_smelting',
    'minecraft:dried_kelp_from_smoking',
  ].forEach(function (id) {
    replaceInputID(id, 'minecraft:kelp', '#valhelsia:kelp');
  });
});
