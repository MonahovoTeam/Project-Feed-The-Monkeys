function playerDeathHandler(player, reason, killer) {
    const deathName = player.name;
    const killerName = killer.name;

    mp.players.broadcast(`${killerName} killed ${deathName}. Reason: ${reason}`);
}

function dmgBoost(player) {
    const spawnName = player.name;

    mp.players.broadcast(`${spawnName} spawned. hui`);
    mp.game.ped.setAiWeaponDamageModifier(1000.5);
    mp.game.player.setWeaponDamageModifier(1000.5);
}
mp.events.add("playerDeath", playerDeathHandler);
mp.events.add("playerSpawn", dmgBoost);