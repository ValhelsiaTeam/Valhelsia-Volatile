// priority: 110
// Valhelsia: Volatile
// Entity Type Tags

onEvent('tags.entity_type', event => {

  // Add Halloween Event Candy to Spoopy Mobs
  event.get('valhelsia_tweaks:drops_candy').add([
    'minecraft:zombie',
    'minecraft:husk',
    'minecraft:skeleton',
    'minecraft:stray',
    'minecraft:witch',
    'minecraft:spider',
    'minecraft:phantom',
    'minecraft:cave_spider',
    'quark:wraith',
    'quark:forgotten',
    'goblintraders:goblin_trader', // Arguably not spoopy enough, but I'm sure they horde candy.
    'goblintraders:vein_goblin_trader',
    'graveyard:acolyte',
    'graveyard:ghoul',
    'graveyard:nightmare',
    'graveyard:reaper',
    'graveyard:revenant',
    'graveyard:skeleton_creeper',
  ]);

});