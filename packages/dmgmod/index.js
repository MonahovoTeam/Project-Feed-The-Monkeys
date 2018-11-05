function dmG (player, healthLoss, armorLoss) {
    const pd = player.name;
    mp.players.broadcast(`${pd}`);
}

mp.events.add("playerDamage", dmG);