function dmG (player, healthLoss, armorLoss) {
    const pd = player.name;
    const hl = healthLoss;
    const al = armorLoss;
    mp.players.broadcast(`${pd}`);
    mp.players.broadcast(`${hl}`);
    mp.players.broadcast(`${al}`);
    mp.players.broadcast(ok);
}

mp.events.add("playerDamage", dmG);