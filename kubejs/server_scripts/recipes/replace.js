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
    'multiblock:multiblock'
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

});
