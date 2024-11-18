/*1.Merge two array
level: \*
desc: รวม array 2 ตัวเข้าด้วยกัน
input: [1,2,3] , [4,5,6]
output: [1,2,3,4,5,6]*/

let array1 = [1,2,3];
let array2 = [4,5,6];

function A1(array1,array2){
    const sumarray = array1.concat(array2);
    return sumarray;
}
console.log(A1(array1,array2));



/*2.Filter less than 30
level: \*
desc: เอาตัวที่น้อยกว่า 30 ออก
input: [10,20,30,40,50]
output: [30,40,50]*/

const num = [10,20,30,40,50];


function Number(num){
    const lessthan = num.filter((value) => value >= 30);
    return lessthan;
}
console.log(Number(num));

/*3.Remove element from array
level: \* \*
desc: เอา element ใน array ออกจาก array by index (ไม่จำเป็นต้องเรียงเหมือนเดิม)
array = [5,6,7,2,4]
input: 2
output: [5,6,2,4] (ไม่ตายตัว)*/

const number3 = [5,6,7,2,4];


function removenum(number3){
     number3.splice(2,1)
    return number3;
}
console.log(removenum(number3));

/*4. Roman to number
   level: \* \* \*
   input: "XIV"
   output: 14 */

function NumberRoman(romannum){
    xchange = {
        "X" : 10,
        "I" : 1,
        "V" : 5
    }
    checknum = xchange[romannum[romannum.length-1]];
    for (let j = romannum.length-1 ; j > 0; j--) {
        if (xchange[romannum[j]]> xchange[romannum[j-1]]){
            checknum = checknum - xchange[romannum[j-1]];
        }
        else{
            checknum = checknum + xchange[romannum[j-1]];
        }
           
    }
         return checknum;
        
}
console.log(NumberRoman("XIV"));

/*Remove duplicate from array and sort array
   desc: เอา
   level: โหดนิดหน่อย
   input: [1,2,1,4,5,2,3,4,1,4]
   output: [1,2,3,4,5]*/


         






