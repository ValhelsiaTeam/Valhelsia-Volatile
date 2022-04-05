// priority: 10
// Valhelsia: Volatile
// Shapeless Crafting Recipes

onEvent('recipes', event => {
  // Minecraft
  event.shapeless('minecraft:string', ['#forge:crops/cattail', '#forge:crops/cattail', '#forge:crops/cattail']);

  // BYG
  event.shapeless('byg:mossy_stone', ['minecraft:stone', 'minecraft:moss_block']);
  event.shapeless('byg:mossy_red_rock_bricks', ['byg:red_rock_bricks', 'minecraft:moss_block']);
});
