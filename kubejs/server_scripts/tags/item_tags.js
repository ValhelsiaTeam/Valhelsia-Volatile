// priority: 110
// Valhelsia: Volatile
// Item Tags
// These are mostly for recipe inputunification, but sometimes have other uses.

onEvent('tags.items', event => {

  // Crops
  event.add('forge:crops', [
    'alexsmobs:banana',
    'byg:cattail_sprout',
  ]);

  event.add('forge:crops/cattail', 'byg:cattail_sprout');

  // Fruits
  event.add('forge:fruits', [
    'minecraft:apple',
    'minecraft:golden_apple',
    'minecraft:enchanted_golden_apple',
    'minecraft:melon_slice',
    'minecraft:sweet_berries',
    'minecraft:glow_berries',
    'ecologics:coconut_slice',
    'ecologics:prickly_pear',
    'undergarden:droopvine_item',
  ]);

  event.add('forge:fruits/apple', [
    'minecraft:apple',
    'byg:green_apple',
    'minecraft:golden_apple',
    'minecraft:enchanted_golden_apple',
  ]);

  event.add('forge:fruits/baobab', 'byg:baobab_fruit');
  event.add('forge:fruits/coconut', 'ecologics:coconut_slice');
  event.add('forge:fruits/melon', 'minecraft:melon_slice');
  event.add('forge:fruits/prickly_pear', 'ecologics:prickly_pear');

  event.add('rootsclassic:berries', [
    'minecraft:sweet_berries',
    'minecraft:glow_berries',
    'byg:crimson_berries',
    'byg:holly_berries',
    'byg:nightshade_berries',
    'byg:blueberries',
  ]);

  // Feathers
  event.add('forge:feathers', [
    'alexsmobs:roadrunner_feather',
    'alexsmobs:emu_feather',
    'ecologics:penguin_feather',
  ]);

  // Ingots
  event.add('forge:ingots', [
    'botania:gaia_ingot',
    'byg:pendorite_ingot',
    'immersiveengineering:ingot_hop_graphite',
    'undergarden:forgotten_ingot',
  ]);

  // Nuggets
  event.add('forge:nuggets', [
    'byg:emeraldite_shards',
  ]);

  event.add('forge:nuggets/emeraldite', 'byg:emeraldite_shards');
  event.add('forge:nuggets/froststeel', 'undergarden:froststeel_nugget');
  event.add('forge:nuggets/forgotten_metal', 'undergarden:forgotten_nugget');

  // Ores
  event.add('forge:ores', [
    'byg:emeraldite_ore',
  ]);
  event.add('forge:ores/emeraldite', 'byg:emeraldite_ore');

  // Raw Materials
  event.add('forge:raw_materials', [
    'byg:raw_pendorite',
    'undergarden:raw_cloggrum',
    'undergarden:raw_froststeel',
  ]);

  event.add('forge:raw_materials/pendorite', 'byg:raw_pendorite');

  // Storage Blocks
  event.add('forge:storage_blocks', [
    'byg:raw_pendorite_block',
    'undergarden:raw_cloggrum_block',
    'undergarden:raw_froststeel_block',
  ]);

  event.add('forge:storage_blocks/raw_pendorite', 'byg:raw_pendorite_block');
  event.add('forge:storage_blocks/raw_cloggrum', 'undergarden:raw_cloggrum_block');
  event.add('forge:storage_blocks/raw_froststeel', 'undergarden:raw_froststeel_block');
  event.add('forge:storage_blocks/forgotten_metal', 'undergarden:forgotten_block');

  // Sandstones
  event.add('forge:sandstone', [
    'byg:black_smooth_sandstone',
    'byg:blue_smooth_sandstone',
    'byg:pink_smooth_sandstone',
    'byg:purple_smooth_sandstone',
    'byg:white_smooth_sandstone',
    'quark:sandstone_bricks',
    'quark:red_sandstone_bricks',
  ]);

  event.add('forge:sandstone/black', [
    'byg:black_sandstone',
    'byg:black_chiseled_sandstone',
    'byg:black_cut_sandstone',
    'byg:black_smooth_sandstone',
  ]);
  
  event.add('forge:sandstone/blue', [
    'byg:blue_sandstone',
    'byg:blue_chiseled_sandstone',
    'byg:blue_cut_sandstone',
    'byg:blue_smooth_sandstone',
  ]);

  event.add('forge:sandstone/colorless', [
    'quark:sandstone_bricks',
  ]);

  event.add('forge:sandstone/pink', [
    'byg:pink_sandstone',
    'byg:pink_chiseled_sandstone',
    'byg:pink_cut_sandstone',
    'byg:pink_smooth_sandstone',
  ]);

  event.add('forge:sandstone/purple', [
    'byg:purple_sandstone',
    'byg:purple_chiseled_sandstone',
    'byg:purple_cut_sandstone',
    'byg:purple_smooth_sandstone',
  ]);
  
  event.add('forge:sandstone/red', [
    'quark:red_sandstone_bricks',
  ]);

  event.add('forge:sandstone/soul', [
    'quark:soul_sandstone',
    'quark:soul_sandstone_bricks',
    'quark:smooth_soul_sandstone',
    'quark:cut_soul_sandstone',
    'quark:chiseled_soul_sandstone',
  ]);

  event.add('forge:sandstone/soulless', [
    'forbidden_arcanus:soulless_sandstone',
    'forbidden_arcanus:cut_soulless_sandstone',
    'forbidden_arcanus:polished_soulless_sandstone',
  ]);
  
  event.add('forge:sandstone/windswept', [
    'byg:windswept_sandstone',
    'byg:chiseled_windswept_sandstone',
    'byg:cut_windswept_sandstone',
    'byg:smooth_windswept_sandstone',
    'byg:windswept_sandstone_pillar',
  ]);

  event.add('forge:sandstone/white', [
    'byg:white_sandstone',
    'byg:white_chiseled_sandstone',
    'byg:white_cut_sandstone',
    'byg:white_smooth_sandstone',
  ]);

  // Leaf Carpets
  event.add('valhelsia:leaf_carpets', allLeafCarpets);
  event.add('minecolonies:compostables_poor', '#valhelsia:leaf_carpets');

  event.add('valhelsia:vines', [
    'minecraft:vine',
    'minecraft:weeping_vines',
    'minecraft:twisting_vines',
    'quark:cut_vines',
    'byg:imparius_vine',
    'byg:lament_vine',
    'byg:skyris_vine',
    'byg:embur_gel_vines',
    'byg:wailing_vine',
    'byg:shulkren_vine',
    'valhelsia_structures:hanging_vine',
  ]);

  event.add('valhelsia:vines/green', [
    'minecraft:vine',
    'quark:cut_vines',
    'valhelsia_structures:hanging_vine',
  ]);

});