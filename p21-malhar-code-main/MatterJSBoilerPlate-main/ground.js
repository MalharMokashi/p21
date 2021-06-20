class Ground
{
   constructor(x,y,w,h)
   {
      let ground_options={
           isStatic:true
       };

       this.body = Bodies.rectangle(x,y,w,h,ground_options);
       this.width = 800;
       this.height = 20;

       World.add(world,this.body);
   }
    
   show()
   {
       var pos = this.body.position;
       push();
       rectMode(CENTER);
       stroke(255);
       fill(127);
       rect(pos.x,pos.y,this.width,this.height);
       pop();
   }
}

