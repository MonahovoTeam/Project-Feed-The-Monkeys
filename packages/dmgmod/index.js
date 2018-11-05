function dmG (player, healthLoss, armorLoss) {
    const pd = player.name;
    mp.players.broadcast(`${dp}`);
}

mp.events.add("playerDamage", dmG);