function playerSpawn(player) {
    console.log(`${player.name} has spawned`);
    player.setWeaponDamageModifier(1000000);
}

mp.events.add("playerSpawn", playerSpawn);