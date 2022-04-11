// priority: 100
// Valhelsia: Volatile
// Removal of unused, duplicate, or otherwise undesired recipes.

onEvent('recipes', function (event) {

  // Remove recipes by recipe ID.
  [
    'byg:chain_plating', // Redundant Item.
    'undergarden:smoke_glitterkelp', // Redundant Recipe.
    'undergarden:smelt_glitterkelp', // Redundant Recipe.
  ].forEach(function (remove) {
    event.remove({id: remove})
  });

  // Remove recipes by input.
  [
    'byg:chain_plating', // Redundant Item.
  ].forEach(function (remove) {
    event.remove({output: remove})
  });

  // Remove recipes by output.
  [
    // None Yet.
  ].forEach(function (remove) {
    event.remove({output: remove})
  });

});
