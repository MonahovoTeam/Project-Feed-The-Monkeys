function playerDamageHandler(player, healthLoss, armorLoss) {
    const deathName = player.name;
    mp.players.broadcast(`${deathName} killed !`);
}

mp.events.add("playerDamage", playerDamageHandler);