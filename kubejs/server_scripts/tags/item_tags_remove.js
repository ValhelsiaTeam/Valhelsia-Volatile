// priority: 120
// Valhelsia: Volatile
// Removal of Item Tags

onEvent('tags.items', event => {

  // Mistakenly applied to the ingot instead of the nugget by the mod.
  event.remove('forge:nuggets/froststeel', 'undergarden:froststeel_ingot'); 
  event.remove('forge:nuggets/forgotten_metal', 'undergarden:forgotten_ingot'); 

});