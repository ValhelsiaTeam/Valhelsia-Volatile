// priority: 0
// Valhelsia: Volatile
// REI Blacklist

onEvent('rei.hide.items', event => {

  // Hide debug items, logos, and similar clutter.
  event.hide([
    'minecraft:barrier',
    'minecraft:jigsaw',
    'minecraft:light',
    'minecraft:structure_block',
    'minecraft:structure_void',
    'alexsmobs:tab_icon',
    'alexsmobs:vine_lasso_inventory',
    'alexsmobs:vine_lasso_hand',
    'byg:byg_logo',
    'carryon:entity_item',
    'carryon:tile_item',
    'citadel:debug',
    'citadel:citadel_book',
    'citadel:effect_item',
    'citadel:fancy_item',
    'create:copper_backtank_placeable',
    'titanium:block_test',
    'titanium:block_twenty_four_test',
    'titanium:block_asset_test',
    'titanium:machine_test',
    'titanium:creative_generator',
    'immersiveengineering:fake_icon_birthday',
    'immersiveengineering:fake_icon_lucky',
    'immersiveengineering:fake_icon_drillbreak',
    'immersiveengineering:fake_icon_ravenholm',
    'supplementaries:placeable_item',
    'valhelsia_tweaks:birthday_cake', // Seasonal stuff should usually be a surprise.
    'valhelsia_tweaks:valhelsia_firework_rocket',
  ]);

  // Hide Disabled Items
  event.hide([
    'byg:chain_plating', // Redundant.
    'valhelsia_structures:explorers_tent', // Unfinished.
    'valhelsia_structures:hibiscus', // Unfinished.
    'valhelsia_structures:giant_fern', // Unfinished.
  ]);

  // Hide other items that clutter up REI too much.
  event.hide([
    // Hide duplicate Refined Storage things that are just different colour variants. You can still see that they can be dyed by looking at the recipes / uses.
    /refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/
  ]);

});

onEvent('rei.hide.items', event => {
  // Hide Fluids.
});