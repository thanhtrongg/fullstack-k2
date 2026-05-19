/*
Bài 1
Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

Yêu cầu chi tiết:

Hàm return về giá trị
Ép ràng buộc kiểu dữ liệu là số
Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi
*/
function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    number = Number(numbers[i]);

    if (Number.isNaN(number)) {
      return "Dữ liệu không hợp lệ";
    }
    total += number;
  }
  return total;
}

console.log(sum(10, "20", "30"));
/*
Bài 2
Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị

Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ
*/
Number.prototype.getCurrency = function (currency) {
  const number = Number(this);
  if (Number.isNaN(number)) {
    return "Dữ liệu không hợp lệ";
  }
  return number.toLocaleString("en-US") + " " + currency;
};

String.prototype.getCurrency = function (currency) {
  const number = Number(this);
  if (Number.isNaN(number)) {
    return "Dữ liệu không hợp lệ";
  }
  return number.toLocaleString("en-US") + " " + currency;
};
var price = 12000;
console.log(price.getCurrency("đ"));
var priceStr = "12000000";
console.log(priceStr.getCurrency("đ"));

/*
Bài 3
Chuyển đổi mảng 1 chiều thành dạng lồng (nested)
*/
const data = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];
function buildNested(arr, parentId = 0) {
  const result = [];

  for (let item of arr) {
    if (item.parent === parentId) {
      const children = buildNested(arr, item.id);

      const newItem = {
        id: item.id,
        name: item.name,
      };
      if (children.length > 0) {
        newItem.children = children;
      }
      result.push(newItem);
    }
  }
  return result;
}
const categories = buildNested(data);

console.log(categories);
