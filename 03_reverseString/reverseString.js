const reverseString = function(input) {

    //console.log("Original input:", input);

    let array = input.split("");

    //console.log("Input after split:", array);

    array.reverse();

    //console.log("Input after reverse:", array);

    let result = array.join("");

    //console.log("Input after join:", result);

    return result;

};

//console.log("Final result:", reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
