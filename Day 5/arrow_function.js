function modifyArray(nums) {
    const data = nums.map(function(foNumber){
        if(foNumber % 2 == 0){
            return 2*foNumber;
        }else{
            return 3 * foNumber;
        }
    });
    return data;
}
