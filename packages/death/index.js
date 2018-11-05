function playerDeathHandler(player, reason, killer) {
    const deathName = player.name;
    const killerName = killer.name;

    mp.players.broadcast(`${killerName} killed ${deathName}. Reason: ${reason}`);
}

mp.events.add("playerDeath", playerDeathHandler);