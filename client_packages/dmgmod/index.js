mp.events.add('playerWeaponShot', (targetPosition, targetEntity) => {
    mp.gui.chat.push('You fired a weapon!');
});