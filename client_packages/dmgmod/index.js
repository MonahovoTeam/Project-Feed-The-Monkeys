mp.events.add('playerResurrect', () => {
    mp.gui.chat.push('Like a fenix raised from the ashes, you came back to us!');
    player.setWeaponDamageModifier(1000)
});
