const removeFromArray = function(initArray, ...removeItems) {
    const newArray = [];

    initArray.forEach(element => {
            if (!removeItems.includes(element)) {
                newArray.push(element);
            }
        }
    );

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
