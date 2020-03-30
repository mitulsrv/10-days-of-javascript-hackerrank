function reverseString(s) {
    try{
        var SplitString = s.split("");
        var ReveresedArray = SplitString.reverse();
        var JoinArray = ReveresedArray.join("");
        console.log(JoinArray);
    }catch(ex)
    {
        console.log(ex.message);
        console.log(s);
    }
}