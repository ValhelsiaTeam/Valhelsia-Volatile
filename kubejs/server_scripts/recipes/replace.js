// priority: 100
// Valhelsia: Volatile
// Recipe Input & Output Replacements

onEvent('recipes', function (event) {

  // Cobblestone variants in place of cobblestone in some recipes:
  [ // Recipe ID:
    'minecraft:dispenser',
    'minecraft:dropper',
    'minecraft:observer',
    'minecraft:piston',
    'botania:cobble_rod',
    'botania:apothecary_default',
    'supplementaries:turn_table',
    'structurize:sceptergold',
  ].forEach(function (recipeid) {
    event.replaceInput({id: recipeid}, 'minecraft:cobblestone', '#minecraft:stone_crafting_materials', true);
  });

  // Stone variants in place of stone in some recipes:
  [ // Recipe ID:
    'botania:exchange_rod',
    'botania:temperance_stone',
    'botania:tiny_planet',
    'botania:tiny_planet_block',
    'multiblock:multiblock',
  ].forEach(function (recipeid) {
    event.replaceInput({id: recipeid}, 'minecraft:stone', '#forge:stone', true);
  });

  // Feather variants in place of feathers in some recipes:
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
  ].forEach(function (recipeid) {
    event.replaceInput({id: recipeid}, 'minecraft:feather', '#forge:feathers', true);
  });
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:feather', '#forge:feathers', true);

  // Vine variants in place of vines in some recipes:
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
    
  ].forEach(function (recipeid) {
    event.replaceInput({id: recipeid}, 'minecraft:vine', '#valhelsia:vines/green', true);
  });

  // Misc inter-mod compatibility:
  event.replaceInput({id: 'alexsmobs:shark_tooth_arrow'}, 'minecraft:kelp', '#valhelsia:kelp', true);
});
