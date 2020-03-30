class Polygon{
    constructor(Array_heights){
        var perimeter = 0;
        for(var values in Array_heights){
            perimeter += Array_heights[values];
        }
        this.foPermeter = perimeter;
    }
    perimeter(){
        return this.foPermeter
    }
}