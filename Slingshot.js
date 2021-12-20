class SlingShot {
    constructor(bodyA, pointB) {

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options)
        World.add(world, this.sling)



    }

    fly() {
     
        this.sling.bodyA = null;
    
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    display() {
        if (this.sling.bodyA){
        push()

        strokeWeight(5);

        stroke("blue")

        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y)

        pop()
        }
    }



}