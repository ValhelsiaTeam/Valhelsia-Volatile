// priority: 100
// Valhelsia: Volatile
// Removal of unused, duplicate, or otherwise undesired recipes.

onEvent('recipes', function (event) {

  // Remove recipes by recipe ID.
  var idRemove = [
    // None yet.
  ].forEach(function (remove) {
    event.remove({id: remove})
  });

  // Remove recipes by output.
  var outputRemove = [
    // None yet.
  ].forEach(function (remove) {
    event.remove({output: remove})
  });

});
