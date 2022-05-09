// priority: 1

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
 * @file Custom JEI Information additions for Valhelsia: Volatile.
 * 
 * Used to provide additional information to item recipes + uses where appropriate to allow 
 * players to learn how to obtain / use items without external sources (such as wikis).
 * 
 * Entries should use translatable text components with language entries added to
 * assets/valhelsia/lang/en_us.json so that they can be translated via CrowdIn.
 *  
 */

/**
 * JEI Information Event Handler
 */
onEvent('jei.information', event => {
  // Valhelsia-specific information:
  event.add('akashictome:tome', Text.translate('valhelsia.jei_information.akashic_tome.tome'));

  // Additional help for modded items / blocks:
  event.add('farmersdelight:rice', Text.translate('valhelsia.jei_information.farmers_delight.rice'));
  event.add('forbidden_arcanus:fungyss', Text.translate('valhelsia.jei_information.forbidden_arcanus.fungyss'));

  // TODO: More here later, these are just to check that translations work in JEI information.

});