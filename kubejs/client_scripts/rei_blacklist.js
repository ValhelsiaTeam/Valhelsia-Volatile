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
    'graveyard:tg_rooted_dirt',
    'graveyard:tg_tuff',
    'graveyard:tg_moss_block',
    'graveyard:tg_deepslate',
    'graveyard:tg_grass_block',
    'graveyard:tg_dirt',
    'graveyard:tg_coarse_dirt',
    'graveyard:tg_andesite',
    'graveyard:tg_granite',
    'graveyard:tg_diorite',
    'graveyard:tg_stone',
    'graveyard:tg_podzol',
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
    'valhelsia_structures:stone',
    'valhelsia_structures:granite',
    'valhelsia_structures:diorite',
    'valhelsia_structures:andesite',
    'valhelsia_structures:grass_block',
    'valhelsia_structures:dirt',
    'valhelsia_structures:coarse_dirt',
  ]);

  // Hide Disabled Items
  event.hide([
    'byg:chain_plating', // Redundant.
    'valhelsia_structures:explorers_tent', // Unfinished.
    'valhelsia_structures:hibiscus', // Unfinished.
    'valhelsia_structures:giant_fern', // Unfinished.

    // Immersive Engineering
    'immersiveengineering:deepslate_ore_lead',
    'immersiveengineering:deepslate_ore_uranium',
    'immersiveengineering:dust_copper',
    'immersiveengineering:dust_gold',
    'immersiveengineering:dust_iron',
    'immersiveengineering:dust_lead',
    'immersiveengineering:dust_steel',
    'immersiveengineering:dust_uranium',
    'immersiveengineering:ingot_lead',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:nugget_copper',
    'immersiveengineering:nugget_lead',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:ore_lead',
    'immersiveengineering:ore_uranium',
    'immersiveengineering:plate_copper',
    'immersiveengineering:plate_gold',
    'immersiveengineering:plate_iron',
    'immersiveengineering:raw_block_lead',
    'immersiveengineering:raw_block_uranium',
    'immersiveengineering:raw_lead',
    'immersiveengineering:raw_uranium',
    'immersiveengineering:sword_steel',
    'immersiveengineering:pickaxe_steel',
    'immersiveengineering:axe_steel',
    'immersiveengineering:shovel_steel',
    'immersiveengineering:hoe_steel',

    // Mekanism Tools
    'mekanismtools:steel_helmet',
    'mekanismtools:steel_chestplate',
    'mekanismtools:steel_leggings',
    'mekanismtools:steel_boots',
    'mekanismtools:lapis_lazuli_sword',
    'mekanismtools:lapis_lazuli_pickaxe',
    'mekanismtools:lapis_lazuli_axe',
    'mekanismtools:lapis_lazuli_shovel',
    'mekanismtools:lapis_lazuli_hoe',
    'mekanismtools:lapis_lazuli_paxel',
    'mekanismtools:lapis_lazuli_helmet',
    'mekanismtools:lapis_lazuli_chestplate',
    'mekanismtools:lapis_lazuli_leggings',
    'mekanismtools:lapis_lazuli_boots',
    'mekanismtools:lapis_lazuli_shield',
  ]);

  // Hide other items that clutter up REI too much.
  event.hide([
    // Hide duplicate Refined Storage things that are just different colour variants. You can still see that they can be dyed by looking at the recipes / uses.
    /refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/
  ]);

});

onEvent('rei.hide.fluids', event => {
  // Hide Fluids.
});