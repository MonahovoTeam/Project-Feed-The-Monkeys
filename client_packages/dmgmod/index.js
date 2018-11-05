function playerSpawn(player) {
    console.log('it`s alive');
    player.setPlayerWeaponDamageModifier(500);

}

mp.events.add("playerSpawn", playerSpawn);