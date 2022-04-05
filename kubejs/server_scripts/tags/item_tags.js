// priority: 110
// Valhelsia: Volatile
// Item Tags
// These are mostly for recipe inputunification, but sometimes have other uses.

onEvent('tags.items', event => {

  // Crops
  event.get('forge:crops').add([
    'alexsmobs:banana',
    'byg:cattail_sprout',
  ]);

  event.add('forge:crops/cattail', 'byg:cattail_sprout');

  // Fruits
  event.get('forge:fruits').add([
    'minecraft:apple',
    'minecraft:golden_apple',
    'minecraft:enchanted_golden_apple',
    'minecraft:melon_slice',
  ]);

  event.get('forge:fruits/apple').add([
    'minecraft:apple',
    'byg:green_apple',
    'minecraft:golden_apple',
    'minecraft:enchanted_golden_apple',
  ]);
  event.add('forge:fruits/melon', 'minecraft:melon_slice');

  // Ingots
  event.get('forge:ingots').add([
    'botania:gaia_ingot',
    'byg:pendorite_ingot',
    'immersiveengineering::ingot_hop_graphite',
    'undergarden:forgotten_ingot',
  ]);

  // Nuggets
  event.add('forge:nuggets/froststeel', 'undergarden:froststeel_nugget');
  event.add('forge:nuggets/forgotten_metal', 'undergarden:forgotten_nugget');

  // Raw Materials
  event.get('forge:raw_materials').add([
    'byg:raw_pendorite',
    'undergarden:raw_cloggrum',
    'undergarden:raw_froststeel',
  ]);

  event.add('forge:raw_materials/pendorite', 'byg:raw_pendorite');

  // Storage Blocks
  event.get('forge:storage_blocks').add([
    'byg:raw_pendorite_block',
    'undergarden:raw_cloggrum_block',
    'undergarden:raw_froststeel_block',
  ]);

  event.add('forge:storage_blocks/raw_pendorite', 'byg:raw_pendorite_block');
  event.add('forge:storage_blocks/raw_cloggrum', 'undergarden:raw_cloggrum_block');
  event.add('forge:storage_blocks/raw_froststeel', 'undergarden:raw_froststeel_block');
  event.add('forge:storage_blocks/forgotten_metal', 'undergarden:forgotten_block');

  // Sandstones
  event.get('forge:sandstone').add([
    'byg:black_smooth_sandstone',
    'byg:blue_smooth_sandstone',
    'byg:pink_smooth_sandstone',
    'byg:purple_smooth_sandstone',
    'byg:white_smooth_sandstone',
    'quark:sandstone_bricks',
    'quark:red_sandstone_bricks',
  ]);

  event.get('forge:sandstone/black').add([
    'byg:black_sandstone',
    'byg:black_chiseled_sandstone',
    'byg:black_cut_sandstone',
    'byg:black_smooth_sandstone',
  ]);
  
  event.get('forge:sandstone/blue').add([
    'byg:blue_sandstone',
    'byg:blue_chiseled_sandstone',
    'byg:blue_cut_sandstone',
    'byg:blue_smooth_sandstone',
  ]);

  event.get('forge:sandstone/colorless').add([
    'quark:sandstone_bricks',
  ]);

  event.get('forge:sandstone/pink').add([
    'byg:pink_sandstone',
    'byg:pink_chiseled_sandstone',
    'byg:pink_cut_sandstone',
    'byg:pink_smooth_sandstone',
  ]);

  event.get('forge:sandstone/purple').add([
    'byg:purple_sandstone',
    'byg:purple_chiseled_sandstone',
    'byg:purple_cut_sandstone',
    'byg:purple_smooth_sandstone',
  ]);
  
  event.get('forge:sandstone/red').add([
    'quark:red_sandstone_bricks',
  ]);

  event.get('forge:sandstone/soul').add([
    'quark:soul_sandstone',
    'quark:soul_sandstone_bricks',
    'quark:smooth_soul_sandstone',
    'quark:cut_soul_sandstone',
    'quark:chiseled_soul_sandstone',
  ]);

  event.get('forge:sandstone/soulless').add([
    'forbidden_arcanus:soulless_sandstone',
    'forbidden_arcanus:cut_soulless_sandstone',
    'forbidden_arcanus:polished_soulless_sandstone',
  ]);
  
  event.get('forge:sandstone/windswept').add([
    'byg:windswept_sandstone',
    'byg:chiseled_windswept_sandstone',
    'byg:cut_windswept_sandstone',
    'byg:smooth_windswept_sandstone',
    'byg:windswept_sandstone_pillar',
  ]);

  event.get('forge:sandstone/white').add([
    'byg:white_sandstone',
    'byg:white_chiseled_sandstone',
    'byg:white_cut_sandstone',
    'byg:white_smooth_sandstone',
  ]);

});