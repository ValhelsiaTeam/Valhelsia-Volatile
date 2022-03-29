// priority: 0

onEvent('rei.hide.items', event => {
  event.hide([
    'minecraft:barrier',
    'minecraft:jigsaw',
    'minecraft:light',
    'minecraft:structure_block',
    'minecraft:structure_void',
    'chiselsandbits:block_bit'
  ]);
});