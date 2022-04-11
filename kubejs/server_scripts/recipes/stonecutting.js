// priority: 10
// Valhelsia: Volatile
// Stonecutting Recipes

onEvent('recipes', function (event) {

  // Stonecutting Recipe Template for items that can be converted back and forth freely.
  let scReversible = (itemA, itemB) => {
    event.stonecutting(itemA, itemB);
    event.stonecutting(itemB, itemA);
  };

  // Limestone Conversions
  scReversible('create:limestone', 'quark:limestone');
  // TODO: Stairs, Slabs, Walls, etc.

  // Scoria Conversions
  scReversible('create:scoria', 'byg:scoria_stone');
  scReversible('create:scoria_pillar', 'byg:scoria_pillar');
  scReversible('create:cut_scoria_bricks', 'byg:scoria_stonebricks');
  scReversible('create:cut_scoria_brick_stairs', 'byg:scoria_stonebrick_stairs');
  scReversible('create:cut_scoria_brick_slab', 'byg:scoria_stonebrick_slab');
  scReversible('create:cut_scoria_brick_wall', 'byg:scoria_stonebrick_wall');

  // Twigs
  event.stonecutting('9x twigs:pebble', 'minecraft:cobblestone');
});
