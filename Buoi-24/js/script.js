/*Bài 1:
Tạo một mảng bất kỳ có chứa các đối tượng là thông tin người dùng như mảng customers phía dưới.

Tạo một hàm createCustomers() nhận vào một mảng bất kỳ có cấu trúc như mảng customers và trả về một mảng mới chứa tất cả thông tin của các đối tượng đó được sắp xếp tăng dần theo tuổi của đối tượng.

Lưu ý: Không dùng phương thức sort có sẵn của Array.

Gợi ý: Sử dụng thuật toán bubble sort (Xem thêm video demo thuật toán bubble sort: https://drive.google.com/file/d/1xfLxdUF03VVaEKGBFq_5-sB8OgtL54e4/view?usp=sharing hoặc https://visualgo.net/en/sorting)

Input:

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers); // Tạo hàm createCustomers này. return về mảng mới.


Output:

result = [
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];
*/
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
  var newCustomers = customers.map(function (customer) {
    return { ...customer };
  });
  for (let i = 0; i < newCustomers.length - 1; i++) {
    for (let j = 0; j < newCustomers.length - 1 - i; j++) {
      if (newCustomers[j].age > newCustomers[j + 1].age) {
        let temp = newCustomers[j];
        newCustomers[j] = newCustomers[j + 1];
        newCustomers[j + 1] = temp;
      }
    }
  }
  return newCustomers;
}
const result = createCustomers(customers);
console.log(result);

/*
2.2. Tạo một hàm login nhận vào 2 tham số email và password.

Yêu cầu:

Nếu thông tin hợp lệ với một trong các đối tượng đã đăng ký, trả về thông tin của đối tượng đó.

Nếu không, báo cho người dùng rằng “Thông tin đăng nhập không hợp lệ”.
Input:

const data = [];
const dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");


Output:

data = [
  {
    name: "Nguyen Van A",
    password: "123456",
    email: "nguyenvana@email.com",
    role: "user",
  },
  {
    name: "Nguyen Van B",
    password: "1234567",
    email: "nguyenvanb@email.com",
    role: "user",
  },
];
dataLogin = {
  name: "Nguyen Van B",
  password: "1234567",
  email: "nguyenvanb@email.com",
  role: "user",
};
*/
const users = [];

function register(name, password, email) {
  if (!name || !password || !email) {
    return "Vui lòng nhập đầy đủ thông tin";
  }

  users.push({
    name,
    password,
    email,
    role: "user",
  });
  return users;
}
function login(email, password) {
  if (!email || !password) {
    return "Vui lòng nhập email và password";
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      return users[i];
    }
  }
  return "Thông tin đăng nhập không hợp lệ";
}

const dataRegister1 = register(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com",
);

const dataRegister2 = register(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com",
);
const dataLogin = login("nguyenvanb@email.com", "1234567");
console.log(users);
console.log(dataLogin);
