"use strict";

var app = new PIXI.Application({
    view: document.getElementById('pixiCanvas')
});

// let manifest = [
//     {
//         "key" : "logo",
//         "url" : "dist/img/logo.png"
//     },
//     {
//         "key" : "explosion",
//         "url" : "dist/img/explosion.json"
//     },
//     {
//         "key" : "penguin",
//         "url" : "dist/img/penguin_pixeled.png"
//     },
//     {
//       "key" : "BeachBall",
//       "url" :  "dist/img/beachball.png" 
//     }
// ];

// let explosionTextures = [];
// let activePenguins = [];

// function loadAssets() {
//     app.loader.add(manifest); //or call manifest from array

//     app.loader.load(onAssetsLoaded);
// }

// function onAssetsLoaded(loader, resources) {
//     console.log(resources);

//     // let logo = new PIXI.Sprite(resources.logo.texture);
//     // logo.anchor.set(0.5, 0.5);
//     // logo.x = 400;
//     // logo.y = 200;


//     // logo.interactive = true;
//     // logo.on("pointerdown", onBallClicked);

//     // app.stage.addChild(logo);

//     // let logo2 = new PIXI.Sprite(resources.explosion.textures.sprite7);
//     // logo2.scale.set(0.5, 0.5);
//     // logo2.anchor.set(-2, 0.5);
//     // logo.addChild(logo2);

//     for(let tex in resources.explosion.textures) {
//         explosionTextures.push(resources.explosion.textures[tex]);
//     }

//     generatePenguins();


//     app.ticker.add(update);
// }

// function generatePenguins() {
//     for(let i = 0; i < 10; i++) {
//         let newPenguin = new PIXI.Sprite(app.loader.resources.penguin.texture);
//         newPenguin.x = Math.random() * 700;
//         newPenguin.y = Math.random() * 500;
//         newPenguin.interactive = true;
//         newPenguin.on("pointerdown", explodePenguin);
//         app.stage.addChild(newPenguin);
//         activePenguins.push(newPenguin);
//     }
// };

// function explodePenguin(e) {
//     // console.log(this);
//     createExplosion(e.data.global.x, e.data.global.y);

//     this.visible = false;
//     this.exploded = true;

// }

// function checkForWin() {
//     for (let i =0; i < activePenguins.length; i++) {
//         if (!activePenguins[i].exploded){
//             return;
//         }
//     }

//     alert("You Won");
// }

// function onBallClicked(e) {
//     console.log(e)

//     createExplosion(e.data.global.x, e.data.global.y);
// }
// function createExplosion(x, y) {
//     let boom = new PIXI.extras.AnimatedSprite(explosionTextures);
//     boom.x = x;
//     boom.y = y;
//     boom.play();
//     boom.anchor.set(0.5,0.5);
//     boom.animationSpeed = .3;
//     boom.loop = false;
//     boom.onComplete = checkForWin;
//     app.stage.addChild(boom);
// }

// function update(e) {
//     // app.stage.children[0].x += 1;
//     // app.stage.children[0].rotation += 0.1;

//     // app.stage.children[0].children[0].rotation -= 0.2;
// }

// window.onload = function() {

//     loadAssets();

//     // let logo = new PIXI.Sprite.fromImage("dist/img/logo.png");
//     // app.stage.addChild(logo);

//     // console.log(logo);
// }


var balls = [];

var manifest = [{
    "key": "soccerball",
    "url": "dist/img/soccerball.png"
}];

function loadAssets() {
    app.loader.add(manifest);

    app.loader.load(onBallClicked);
};

function onBallClicked(e) {
    console.log(e, "being clicked");
    var soccerball = new PIXI.Sprite(app.loader.resources.soccerball.texture);
    app.stage.addChild(soccerball);
    soccerball.anchor.set(0.5, 0.5);
    soccerball.x = 400;
    soccerball.y = 200;
    soccerball.vy = 1000;
    soccerball.vx = 1000;

    soccerball.interactive = true;
    soccerball.on("pointerdown", onBallClicked);

    app.ticker.add(function () {
        soccerball.y += soccerball.vy;
        soccerball.x += soccerball.vx;
        soccerball.vy += 0.1;

        if (soccerball.y > 500) {
            soccerball.vy *= -0.8;
            soccerball.y += soccerball.vy;
        }

        if (soccerball.y < 50) {
            soccerball.vy *= -0.8;
            soccerball.y += soccerball.vy;
        }

        if (soccerball.x > 800) {
            soccerball.vx *= -0.8;
            soccerball.x += soccerball.vx;
        }

        if (soccerball.x < 50) {
            soccerball.vx *= -0.8;
            soccerball.x += soccerball.vx;
        }
    });
}

function update(e) {}

window.onload = function () {

    loadAssets();
};
//# sourceMappingURL=main.js.map
