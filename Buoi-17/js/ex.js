function bai1() {
  let a = Number(document.getElementById("b1_a").value);
  let b = Number(document.getElementById("b1_b").value);
  a = a + b;
  b = a - b;
  a = a - b;
  document.getElementById("res1").innerText =
    `Sau hoán vị: a = ${a} và b = ${b} `;
}

function bai2() {
  let a = Number(document.getElementById("b2_a").value);
  let b = Number(document.getElementById("b2_b").value);
  let c = Number(document.getElementById("b2_c").value);
  let max;
  if (a >= b && a >= c) {
    max = a;
  } else if (b >= a && b >= c) {
    max = b;
  } else {
    max = c;
  }
  document.getElementById("res2").innerText = `Số lớn nhất = ${max}`;
}

function bai3() {
  let a = Number(document.getElementById("b3_a").value);
  let b = Number(document.getElementById("b3_b").value);
  if ((a > 0 && b > 0) || (a < 0 && b < 0) || (a === 0 && b === 0)) {
    document.getElementById("res3").innerText = `a và b cùng dấu`;
  } else {
    document.getElementById("res3").innerText = `a và b khác dấu`;
  }
}

function bai4() {
  let a = Number(document.getElementById("b4_a").value);
  let b = Number(document.getElementById("b4_b").value);
  let c = Number(document.getElementById("b4_c").value);
  let tmp;
  if (a > b) {
    tmp = a;
    a = b;
    b = tmp;
  }
  if (a > c) {
    tmp = a;
    a = c;
    c = tmp;
  }
  if (b > c) {
    tmp = b;
    b = c;
    c = tmp;
  }
  document.getElementById("res4").innerText = `${a}, ${b}, ${c}`;
}

function bai5() {
  let so_km = Number(document.getElementById("b5_km").value);
  let price = 0;
  let saleRate = 1;
  if (so_km <= 1) {
    price = 15000;
  } else if (so_km <= 5) {
    price = 15000 + (so_km - 1) * 13500;
  } else if (so_km > 5) {
    price = 15000 + 4 * 13500 + (so_km - 5) * 11000;
  }
  if (so_km > 120) {
    price *= 0.9;
  }
  document.getElementById("res5").innerText =
    `Giá tiền taxi = ${price.toLocaleString("vi-VN")}đ`;
}

function bai6() {
  let so_kw = Number(document.getElementById("b6_kw").value);
  let price = 0;

  if (so_kw <= 50) {
    price = so_kw * 1678;
  } else if (so_kw <= 100) {
    price = 50 * 1678 + (so_kw - 50) * 1734;
  } else if (so_kw <= 200) {
    price = 50 * 1678 + 50 * 1734 + (so_kw - 100) * 2014;
  } else if (so_kw <= 300) {
    price = 50 * 1678 + 50 * 1734 + 100 * 2014 + (so_kw - 200) * 2536;
  } else if (so_kw <= 400) {
    price =
      50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (so_kw - 300) * 2834;
  } else {
    price =
      50 * 1678 +
      50 * 1734 +
      100 * 2014 +
      100 * 2536 +
      100 * 2834 +
      (so_kw - 400) * 2927;
  }

  document.getElementById("res6").innerText =
    `Tiền điện = ${price.toLocaleString("vi-VN")}đ`;
}

function bai7() {
  let n = Number(document.getElementById("b7_n").value);
  let total = 0;
  for (let i = 1; i <= n; ++i) {
    total += i * (i + 1);
  }
  document.getElementById("res7").innerText = `S = ${total}`;
}

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
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function bai8() {
  let n = Number(document.getElementById("b8_n").value);
  if (isPrime(n)) {
    document.getElementById("res8").innerText = `${n} là số nguyên tố`;
  } else {
    document.getElementById("res8").innerText =
      `${n} không phải là số nguyên tố`;
  }
}

function bai9() {
  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += `<div class="bang-cuu-chuong">`;
    result += `<h3>Bảng ${i}</h3>`;

    for (let j = 1; j <= 10; j++) {
      result += `<p>${i} x ${j} = ${i * j}</p>`;
    }

    result += `</div>`;
  }

  document.getElementById("res9").innerHTML = result;
}
