// priority: 0

onEvent('rei.hide.items', event => {

  // Hide debug items, logos, and similar clutter.
  event.hide([
    'minecraft:barrier',
    'minecraft:jigsaw',
    'minecraft:light',
    'minecraft:structure_block',
    'minecraft:structure_void',
    'alexsmobs:tab_icon',
    'byg:byg_logo',
    'carryon:entity_item',
    'carryon:tile_item',
    'chiselsandbits:block_bit',
    'citadel:debug',
    'citadel:citadel_book',
    'citadel:effect_item',
    'citadel:fancy_item',
    'titanium:block_test',
    'titanium:block_twenty_four_test',
    'titanium:block_asset_test',
    'titanium:machine_test',
    'titanium:creative_generator',
    'immersiveengineering:fake_icon_birthday',
    'immersiveengineering:fake_icon_lucky',
    'immersiveengineering:fake_icon_drillbreak',
    'immersiveengineering:fake_icon_ravenholm'
  ]);

  // Hide Disabled Items
  event.hide([
    'byg:chain_plating',
  ]);
});