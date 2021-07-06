class Iron{
    constructor(x,y,width,height){
        var option={
            'restitution':0.8,
            'density':12,
            'friction':0.9
        }
        this.body=Bodies.rectangle(x, y, width, height , options);
    }
}