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
    event.replaceInput({id: recipeid}, 'minecraft:cobblestone', '#minecraft:stone_crafting_materials');
  });

  // Stone variants in place of stone in some recipes:
  [ // Recipe ID:
    'multiblock:multiblock'
  ].forEach(function (recipeid) {
    event.replaceInput({id: recipeid}, 'minecraft:stone', '#forge:stone');
  });

});
