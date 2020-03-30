function getSecondLargest(nums) {
    // Complete the function

    var sorted_Array = nums.sort(function(number1, number2) {return number1 - number2});
    var unique_sorted_Array = sorted_Array.filter(function(element, index, self){
        return index == self.indexOf(element);
    })

    return unique_sorted_Array[unique_sorted_Array.length - 2]
}