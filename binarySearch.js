// Write an algorithm that performs binary search on a given array.
// the function will also track, and print out the number of steps required to reach the target
// the index of the item 

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 27, 29]

const binarySearch = function(arr, target) {
    let lowIndex = 0;
    let highIndex = arr.length - 1;
    
    while(lowIndex <= highIndex){
        let midIndex = Math.floor((lowIndex + highIndex) / 2);
        if (arr[midIndex] == target){
            return midIndex;
        } else if(arr[midIndex] > target){
            highIndex = midIndex - 1;
        } else {
            lowIndex = midIndex + 1;
        }
    } 
};




console.log(binarySearch(testArray, 19));
console.log(binarySearch(testArray, 12));
console.log(binarySearch(testArray, 26));