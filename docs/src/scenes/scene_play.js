import Palas from "../gameObjects/palas.js";

class Scene_play extends Phaser.Scene {
    constructor() {
        super({ key: "Scene_play" });
    }
    create() {
        const center_width = this.sys.game.config.width / 2;
        const center_height = this.sys.game.config.height / 2;
        this.separador = this.add.image(center_width, center_height, "separador");
        this.izquierda = new Palas(this, 30, center_height, "izquierda");
        this.derecha = new Palas(this, this.sys.game.config.width - 30, center_height, "derecha");
        this.physics.world.setBoundsCollision(false, false, true, true);
        this.bola = this.physics.add.image(center_width, center_height, "ball");
        this.bola.setVelocityX(-180);
        this.bola.setCollideWorldBounds(true);
        this.bola.setBounce(1);
        this.physics.add.collider(this.bola, this.izquierda, this.chocaPala, null, this);
        this.physics.add.collider(this.bola, this.derecha, this.chocaPala, null, this);
        this.cursor = this.input.keyboard.createCursorKeys();
        this.cursor_w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }
    update() {
        if(this.bola.x < 0 || this.bola.x > this.sys.game.config.width) {
            this.bola.setPosition(this.sys.game.config.width / 2, this.sys.game.config.height / 2);
        }
        if(this.cursor.down.isDown) {
            this.derecha.body.setVelocityY(300);
        } else if(this.cursor.up.isDown) {
            this.derecha.body.setVelocityY(-300);
        } else {
            this.derecha.body.setVelocityY(0);
        }
        if (this.cursor_s.isDown) {
            this.izquierda.body.setVelocityY(300);
        } else if (this.cursor_w.isDown) {
            this.izquierda.body.setVelocityY(-300);
        } else {
            this.izquierda.body.setVelocityY(0);
        }
    }
    chocaPala() {
        this.bola.setVelocityY(Phaser.Math.Between(-120, 120));
    }
}

export default Scene_play;