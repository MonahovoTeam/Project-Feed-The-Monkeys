mp.events.add('playerSpawn', player => {
    mp.gui.chat.push(`[SERVER]: ${player.name} has joined the server!`);
    mp.game.player.setPlayerWeaponDamageModifier(250);
});