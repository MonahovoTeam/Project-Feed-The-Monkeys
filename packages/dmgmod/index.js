function dmG (player, healthLoss, armorLoss) {
    mp.players.broadcast(player.name);
    mp.players.broadcast(healthLoss);
    mp.players.broadcast(armorLoss);
}

mp.events.add("playerDamage", dmG);