//YÊU CẦU: Không sử dụng các hàm có sẵn ở tất cả các bài!
/*
Bài 01
Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí 
*/
var arr = [3, 1, 4, 12, 7, 5, 9, 21];
var maxIndex = 0;
var minIndex = 0;
for (var i = 1; i < arr.length; i++) {
  if (arr[i] > arr[maxIndex]) {
    maxIndex = i;
  }
  if (arr[i] < arr[minIndex]) {
    minIndex = i;
  }
}
console.log("So lon nhat:", arr[maxIndex], "nam o vi tri", maxIndex);
console.log("So nho nhat:", arr[minIndex], "nam o vi tri", minIndex);
/*Bài 02
Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố” 
*/
var bai2 = [3, 1, 4, 12, 7, 5, 9, 21];
var totalPrime = 0,
  avgPrime;
var count = 0;
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (var i = 3; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
for (var index in bai2) {
  if (isPrime(bai2[index])) {
    totalPrime += bai2[index];
    count++;
  }
}
if (count === 0) {
  console.log("Khong co so nguyen to");
} else {
  avgPrime = totalPrime / count;
  console.log("Trung binh cac so nguyen to = ", avgPrime);
}

/*
Bài 03
Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
*/
var bai3 = [3, 1, 4, 12, 4, 5, 1, 21];
var newArr = [];
for (var i = 0; i < bai3.length; i++) {
  var isDuplicate = false;
  for (var j = 0; j < newArr.length; j++) {
    if (bai3[i] === newArr[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    newArr[newArr.length] = bai3[i];
  }
}
console.log(newArr);

/*Bài 04
Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau

Bước 1: Sắp xếp mảng theo thứ tự tăng dần

Bước 2: Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
Ví dụ:

var numbers = [5, 1, 9, 8, 10];
var element = 4;


// Bước 1
numbers = [1, 5, 8, 9, 10]


Kết quả hiển thị:

// Bước 2
numbers = [1, 4, 5, 8, 9, 10]
*/
var bai4 = [3, 1, 4, 12, 7, 5, 9, 21];

for (var i = 0; i < bai4.length - 1; i++) {
  for (var j = i + 1; j < bai4.length; j++) {
    if (bai4[i] > bai4[j]) {
      var tmp = bai4[i];
      bai4[i] = bai4[j];
      bai4[j] = tmp;
    }
  }
}
console.log("Mang sau khi sap xep:", bai4);

var element = 10;
var insertIndex = bai4.length;
for (var i = 0; i < bai4.length; i++) {
  if (element <= bai4[i]) {
    insertIndex = i;
    break;
  }
}

for (var i = bai4.length; i > insertIndex; i--) {
  bai4[i] = bai4[i - 1];
}
bai4[insertIndex] = element;
console.log("Sau khi chen:", bai4);
