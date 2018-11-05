mp.events.add('playerJoin', player => {
    mp.gui.chat.push(`[SERVER]: ${player.name} has joined the server!`);
    player.setWeaponDamageModifier(250);
});