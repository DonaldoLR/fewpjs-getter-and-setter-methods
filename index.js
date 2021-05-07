class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }
    get circumference(){
        return 2 * Math.PI * this.radius;
    }
    get area(){
        return Math.PI * Math.pow(this.radius, 2)
    }

    set diameter(value){
        return this.radius = value / 2;
    }   
    set circumference(value){
        return this.radius = value / Math.PI / 2;
    }
    set area(value){
        return this.radius = Math.sqrt(value) / Math.PI
    }
}