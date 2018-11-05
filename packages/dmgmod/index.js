mp.events.add("playerDamage", (player, healthLoss, armorLoss) => {
    mp.players.broadcast(player.name + ' ' + healthLoss);
});