// priority: 10

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
 * @file Entity loot table injection / replacement for Valhelsia: Volatile.
 */

/**
 * Entity Loot Table Event Handler
 */
onEvent('entity.loot_tables', event => {
  // Add a chance for some mobs to drop additonal loot, as a bonus incentive to farm them.

  // Wraith
  event.modifyEntity('quark:wraith', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('mekanism:ingot_lead');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });

  // Stray
  event.modifyEntity('minecraft:stray', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('immersiveengineering:ingot_silver');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });

  // Husk
  event.modifyEntity('minecraft:husk', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('mekanism:ingot_tin');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });
});