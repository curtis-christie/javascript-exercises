const reverseString = function(word) {
    const letterArray = [];
    for (let i=0;i<word.length;i++){
        letterArray.push(word.charAt(word.length-(i+1)));
    }

    return(letterArray.join(""));

};

// Do not edit below this line
module.exports = reverseString;
