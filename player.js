class Player {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;

      this.body = Bodies.rectangle(x, y, w, h);
      this.x = x
      this.y = y
      this.w = w;
      this.h = h;
      World.add(world, this.body);

      this.image(this.image, this.position.x, this.position.y,this.x,this.y);

      this.playerArcher = loadImage("./assets/playerArcher.png");
      this.playerBase = loadImage("./assets/player.png");
      
    }

    display(){
      push()
      imageMode(CENTER)
      pop();
    }
}