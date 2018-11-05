function dmG (player, healthLoss, armorLoss) {
    const pd = player.name;
    const hl = healthLoss;
    const al = armorLoss;
    mp.players.broadcast(`${pd} lal`);
    mp.players.broadcast(`${hl} lol`);
    mp.players.broadcast(`${al} lul`);
}

mp.events.add("playerDamage", dmG);

function playerDeathHandler(player, reason, killer) {
    const deathName = player.name;
    const killerName = killer.name;
    if(reason == 341774354) {
        mp.players.broadcast(`${deathName} died in a chopper!`);
        return;
    }
    mp.players.broadcast(`${killerName} killed ${deathName}. Reason: ${reason}`);
}

mp.events.add("playerDeath", playerDeathHandler);