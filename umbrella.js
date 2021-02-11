class umbrella{
constructor(x,y){
var options = {
isStatic:true,
restitution:0.4
}
this.x = x;
this.y = y;
this.r = 10;
this.body = Bodies.circle(this.x, this.y, 10, options);
World.add(world, this.body)
}
display(){
var pos = this.body.position;
push();
translate(pos.x, pos.y);
ellipseMode(CENTER);
ellipse(0,0,10);
pop();
}


}