class Poligon {

    constructor(x, y, r) {

        var options = {

            'density': 0.5,
            'friction': 0.4,
            'restitution': 0.4

        }
        this.r = r
        this.body = Bodies.circle(x, y, r, options)
        World.add(world, this.body)
        this.image = loadImage("polygon.png");
    }

    display() {

        push()

       // var angle = this.body.angle;
      //  rotate(angle)
        imageMode(CENTER);
        var pos = this.body.position;
        translate(pos.x, pos.y)


        image(this.image, 0, 0, this.r, this.r);

        pop()

    }

}