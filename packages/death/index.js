function playerDeathHandler(player, reason, killer) {
    const deathName = player.name;
    const killerName = killer.name;

    mp.players.broadcast(`${killerName} killed ${deathName}. Reason: ${reason}`);
}

function dmgBoost(player) {
    const spawnName = player.name;

    mp.players.broadcast(`${spawnName} spawned. hui`);
    player.setWeaponDamageModifier(10000);
}
mp.events.add("playerDeath", playerDeathHandler);