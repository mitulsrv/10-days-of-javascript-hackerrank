function getCount(objects) {
    var count = 0
    for(var counter in objects){
        if(objects[counter].x == objects[counter].y){
            count += 1;
        }
    }
    return count;
}