// priority: 9001

//   __   ___   _    _  _ ___ _    ___ ___   _   
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\  
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \ 
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\
//     __   _____  _      _ _____ ___ _    ___     
//     \ \ / / _ \| |    /_\_   _|_ _| |  | __|    
//      \ V / (_) | |__ / _ \| |  | || |__| _|     
//       \_/ \___/|____/_/ \_\_| |___|____|___|    
//

/**
 * @file Global Constants for use in other scripts.
 */

/**
 * NBT data for the filled Akashic Tome. Should be updated whenever new recipe books are added to the pack.
 */
const AKASHIC_TOME_NBT = '{"akashictome:data":{alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},botania:{Count:1b,id:"botania:lexicon"},immersiveengineering:{Count:1b,id:"immersiveengineering:manual"},oc2:{Count:1b,id:"oc2:manual"},patchouli:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}},patchouli_0:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"patchouli_0","patchouli:book":"engineersdecor:engineersdecor_manual"}},patchouli_1:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"patchouli_1","patchouli:book":"littlelogistics:guide"}},rftoolsbase:{Count:1b,id:"rftoolsbase:manual"},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},patchouli_2:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"patchouli_2","patchouli:book":"advancedperipherals:manual"}},rootsclassic:{Count:1b,id:"rootsclassic:runic_tablet"},tconstruct:{Count:1b,id:"tconstruct:materials_and_you"},byg:{Count:1b,id:"byg:biomepedia"}}}';

/**
 * Minecraft's default colors, as used in vanilla item IDs and by most mods.
 * Note: Some mods use abnormal names for colors, such as Absent By Design (which uses 'silver' in some places 
 * instead of 'light_gray'), so this shouldn't be used blindly without verifying that the mod uses standard
 * color names.
 */
const COLORS = [
  'white',
  'orange',
  'magenta',
  'light_blue',
  'yellow',
  'lime',
  'pink',
  'gray',
  'light_gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'black'
];

/**
 * Item IDs for all leaf carpets (or BYG's foliage, which is essentially the same thing).
 */
const ALL_LEAF_CARPETS = [
  'byg:pink_cherry_foliage',
  'byg:white_cherry_foliage',
  'byg:ether_foliage',
  'quark:oak_leaf_carpet',
  'quark:spruce_leaf_carpet',
  'quark:birch_leaf_carpet',
  'quark:jungle_leaf_carpet',
  'quark:acacia_leaf_carpet',
  'quark:dark_oak_leaf_carpet',
  'quark:azalea_leaf_carpet',
  'quark:flowering_azalea_leaf_carpet',
  'quark:lavender_blossom_leaf_carpet',
  'quark:yellow_blossom_leaf_carpet',
  'quark:pink_blossom_leaf_carpet',
  'quark:blue_blossom_leaf_carpet',
  'quark:red_blossom_leaf_carpet',
  'quark:orange_blossom_leaf_carpet',
];

/**
 * Item IDs of all BYG leaves.
 */
const ALL_BYG_LEAVES = [
  'byg:aspen_leaves',
  'byg:baobab_leaves',
  'byg:blue_enchanted_leaves',
  'byg:pink_cherry_leaves',
  'byg:white_cherry_leaves',
  'byg:cika_leaves',
  'byg:cypress_leaves',
  'byg:ebony_leaves',
  'byg:ether_leaves',
  'byg:fir_leaves',
  'byg:green_enchanted_leaves',
  'byg:holly_berry_leaves',
  'byg:holly_leaves',
  'byg:jacaranda_leaves',
  'byg:flowering_jacaranda_leaves',
  'byg:indigo_jacaranda_leaves',
  'byg:flowering_indigo_jacaranda_leaves',
  'byg:lament_leaves',
  'byg:mahogany_leaves',
  'byg:mangrove_leaves',
  'byg:maple_leaves',
  'byg:red_maple_leaves',
  'byg:silver_maple_leaves',
  'byg:flowering_nightshade_leaves',
  'byg:nightshade_leaves',
  'byg:palm_leaves',
  'byg:flowering_palo_verde_leaves',
  'byg:palo_verde_leaves',
  'byg:pine_leaves',
  'byg:rainbow_eucalyptus_leaves',
  'byg:redwood_leaves',
  'byg:green_apple_skyris_leaves',
  'byg:skyris_leaves',
  'byg:willow_leaves',
  'byg:blooming_witch_hazel_leaves',
  'byg:witch_hazel_leaves',
  'byg:zelkova_leaves',
  'byg:withering_oak_leaves',
  'byg:araucaria_leaves',
  'byg:blue_spruce_leaves',
  'byg:brown_birch_leaves',
  'byg:brown_oak_leaves',
  'byg:brown_zelkova_leaves',
  'byg:joshua_leaves',
  'byg:ripe_joshua_leaves',
  'byg:orange_birch_leaves',
  'byg:orange_oak_leaves',
  'byg:orange_spruce_leaves',
  'byg:ripe_orchard_leaves',
  'byg:flowering_orchard_leaves',
  'byg:orchard_leaves',
  'byg:red_birch_leaves',
  'byg:red_oak_leaves',
  'byg:red_spruce_leaves',
  'byg:yellow_birch_leaves',
  'byg:yellow_spruce_leaves',
  'byg:firecracker_leaves',
];

/**
 * Block IDs of all natural logs, used mainly for the Reap mod.
 * To avoid accidental damage to custom builds, this list should be as close as possible to the
 * full set of naturally generating / growing log & stem blocks, without including any unnatural
 * ones (such as stripped / wood variants).
 */
const ALL_NATURAL_LOGS = [
  'minecraft:oak_log',
  'minecraft:spruce_log',
  'minecraft:birch_log',
  'minecraft:jungle_log',
  'minecraft:acacea_log',
  'minecraft:dark_oak_log',
  'minecraft:crimson_stem',
  'minecraft:warped_stem',
  'ars_nouveau:blue_archwood_log',
  'ars_nouveau:purple_archwood_log',
  'ars_nouveau:green_archwood_log',
  'ars_nouveau:red_archwood_log',
  'blue_skies:bluebright_log',
  'blue_skies:starlit_log',
  'blue_skies:frostbright_log',
  'blue_skies:lunar_log',
  'blue_skies:dusk_log',
  'blue_skies:maple_log',
  'blue_skies:crystallized_log',
  'blue_skies:cherry_log',
  'byg:aspen_log',
  'byg:baobab_log',
  'byg:blue_enchanted_log',
  'byg:bulbis_stem',
  'byg_cherry_log',
  'byg:cika_log',
  'byg:cypress_log',
  'byg:ebony_log',
  'byg:ether_log',
  'byg:fir_log',
  'byg:green_enchanted_log',
  'byg:holly_log',
  'byg:imparius_stem',
  'byg:fungal_imparius_stem',
  'byg:jacaranda_log',
  'byg:lament_log',
  'byg:mahogany_log',
  'byg:mangrove_log',
  'byg:maple_log',
  'byg:nightshade_log',
  'byg:palm_log',
  'byg:palo_verde_log',
  'byg:pine_log',
  'byg:rainbow_eucalyptus_log',
  'byg:redwood_log',
  'byg:skyris_log',
  'byg:willow_log',
  'byg:witch_hazel_log',
  'byg:zelkova_log',
  'byg:withering_oak_log',
  'ecologics:coconut_log',
  'ecologics:walnut_log',
  'ecologics:azalea_log',
  'ecologics:flowering_azalea_log',
  'forbidden_arcanus:cherrywood_log',
  'forbidden_arcanus:mysterywood_log',
  'malum:runewood_log',
  'malum:soulwood_log',
  'quark:blossom_log',
  'quark:azalea_log',
  'tconstruct:greenheart_log',
  'tconstruct:skyroot_log',
  'tconstruct:bloodshroom_log',
  'undergarden:smogstem_log',
  'undergarden:wigglewood_log',
  'undergarden:grongle_log',
];

