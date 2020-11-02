class Game {
    constructor() {

    }

    getState() {
        database.ref('gameState').on('value', function (data) {
            gameState = data.val();
        });
    }

    updateState(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    start() {
        if (gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 600, 100, 100);
        car2 = createSprite(400, 600, 100, 100);
        car3 = createSprite(800, 600, 100, 100);
        car4 = createSprite(1200, 600, 100, 100);
        cars = [car1, car2, car3, car4];
    }

    play() {
        background(255, 255, 255);
        text("Game Start", 120, 100);
        form.greeting.hide();
        Player.getPlayerInfo();
        if (allPlayers !== undefined) {
            var index, x, y;
            index = 0;
            x = 200;
            y = 600;
            var playerPosition = 150;
            for (var plr in allPlayers) {
                index = index + 1;
                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if (plr == "player" + player.index) {
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = windowWidth / 2;
                    camera.position.y = cars[index - 1].y;
                    fill("red");
                } else {
                    fill("black");
                }
                playerPosition += 20;
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120, playerPosition);
            }
        }
        if (keyDown(UP_ARROW)) {
            player.distance += 10;
            player.update();
        }
        drawSprites();
    }
}