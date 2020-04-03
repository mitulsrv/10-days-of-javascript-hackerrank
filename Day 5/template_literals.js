function sides(literals, ...expressions) {
    var Area = expressions[0];
    var perimeter = expressions[1];

    var Value1 = (perimeter + Math.sqrt(perimeter * perimeter - (16 * Area))) / 4;
    var Value2 = (perimeter - Math.sqrt(perimeter * perimeter - (16 * Area))) / 4;
    var completedArray = [Value1, Value2];
    completedArray = completedArray.sort(function(a, b) {return a - b;});
    return completedArray;
}