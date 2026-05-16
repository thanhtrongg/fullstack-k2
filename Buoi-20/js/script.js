/*Bài 1
Lấy kết quả giao giữa 2 mảng
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
Kết quả
[1,2]
*/
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var newArr = [];
for (var i = 0; i < arrA.length; i++) {
  for (var j = 0; j < arrB.length; j++) {
    if (arrA[i] === arrB[j]) {
      newArr[newArr.length] = arrA[i];
    }
  }
}
console.log(newArr);

/*#
Bài 2
Làm phẳng array sau (Chuyển về mảng 1 chiều) Không được sử dụng flat()

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];


Kết quả

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]*/
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
console.log(arr.flat(Infinity));
