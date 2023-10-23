import Bootloader from "./bootloader.js";
import Scene_play from "./scenes/scene_play.js";

const config = {
    width: 640,
    height: 400,
    parent: "contenedor",
    physics: {
        default: "arcade"
    },
    scene: [
        Bootloader,
        Scene_play
    ]
};

const game = new Phaser.Game(config);

// export default game;