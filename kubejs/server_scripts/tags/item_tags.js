// priority: 110
// Valhelsia: Volatile
// Item Tags
// These are mostly for recipe inputunification, but sometimes have other uses.

onEvent('tags.items', event => {

  event.get('forge:crops').add([
    'alexsmobs:banana',
    'byg:cattail_sprout',
  ]);

  event.add('forge:crops/cattail', 'byg:cattail_sprout');

});