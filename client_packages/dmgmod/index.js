mp.events.add('playerJoin', player => {
    mp.gui.chat.push(`[SERVER]: ${player.name} has joined the server!`);
    mp.game.player.setPlayerWeaponDamageModifier(250);
});