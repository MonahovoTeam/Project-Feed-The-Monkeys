// function playerSpawn(player) {
//    console.log(`${player.name} has spawned`);
//    player.setWeaponDamageModifier(1000000);
// }

// mp.events.add("playerSpawn", playerSpawn);


// mp.events.add('playerSpawn', () => {
//         player.setMeleeWeaponDamageModifier(1000000);
// });

mp.events.add("playerWeaponChange", (player, oldWeapon, newWeapon) => {
    console.log('helo');
    player.setWeaponDamageModifier(255);
});