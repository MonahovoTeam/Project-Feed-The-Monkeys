function playerDamageHandler(player, healthLoss, armorLoss) {
    mp.players.broadcast(`killed !`);
}

mp.events.add("playerDamage", playerDamageHandler);