var array1 = [0, 34, 55, 72, 13, 44];
var array2 = [0, 1, 0, 1, 2, 3, 5, 2, 5, 3, 5, 4];
const start = () => {
    getSecondLargstNumber(array1);
    // removeDuplicate(array2);
    // symmetricNumberCheck();
};

const getSecondLargstNumber = (arr = []) => {
    let max1 = arr[0];
    let max2 = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1; //max2 = gia tri truoc do cua max1
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max2 = arr[i];
        }
    }
    console.log("max 2: ", max2);
    console.log("max 1: ", max1);
    return max2;
};

// lay tung phan tu trong mang so sanh voi cac phan tu o sau no

const removeDuplicate = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        // console.log("thu i: = ", i);
        for (let j = 0; j < arr.length; ++j) {
            // console.log("i :", i);
            // console.log(j);
            if (i !== j) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, 1);
                    j--; // kiem tra lai vi tri do 1 lan nua
                }
            }
        }
    }
    console.log("New Array:", arr);
    return arr;
};

// dao nguoc chuoi va so sanh voi chuoi ban dau
const symmetricNumberCheck = () => {
    let number = prompt("Please enter a number !");
    let newNumber = "";
    for (let i = number.length - 1; i >= 0; i--) {
        
        newNumber += number[i];
    }
    if (number === "") {
        console.log("Not data!");
    } else if (number > 0 && number === newNumber) {
        console.log(number, "-> It is a symmetric number !");
    } else {
        console.log(number, "-> Not a symmetric number !");
    }
    return newNumber;
};

start();

document.write("hello");
console.log(Math.trunc(0.1 + 0.2 === 0.3));
