// mp.events.add('playerWeaponShot', (targetPosition, targetEntity) => {
//     mp.gui.chat.push('You fired a weapon!');
// });

function playerSpawn(player) {
    mp.gui.chat.push('You fired a weapon!');
}

mp.events.add("playerSpawn", playerSpawn);