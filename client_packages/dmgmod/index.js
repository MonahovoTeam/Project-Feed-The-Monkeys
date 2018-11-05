function playerSpawn(player) {
    player.setWeaponDamageModifier(10000);
}

mp.events.add("playerSpawn", playerSpawn);