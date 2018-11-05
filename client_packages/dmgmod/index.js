function playerSpawnHandler(player) {
    mp.players.broadcast(player.name);
    player.setWeaponDamageModifier(10000);
}

mp.events.add("playerSpawn", playerSpawnHandler);