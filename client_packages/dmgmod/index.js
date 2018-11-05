function dMod(player) {
    console.log('it`s alive');
    player.setWeaponDamageModifier(1000);

}

mp.events.add("playerSpawn", dMod);