class Rope{

	constructor(body2, body1,offsetx,offsety){
		this.offsetx = offsetx
		this.offsety = offsety


var op = {
	bodyA: body1,
	bodyB: body2,
	pointB: {x:this.offsetx , y:this.offsety}
}
this.rope = Matter.Constraint.create(op);
World.add(world,this.rope)

}
display(){
	var point1 = this.rope.bodyA.position;
	
    var point2 = this.rope.bodyB.position;
	

	strokeweight(5);

	var Anchor2X = point1.x + this.offsetx;
	var Anchor2Y = point1.y + this.offsety;

	line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
	
}
}