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
var result = [];
function flatten(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
}
flatten(arr);
console.log(result);

/*Bài 3
    Tách phần tử trong mảng theo đúng kiểu dữ liệu

    var arr3 = [["a", 1, true], ["b", 2, false]]


    Kết quả

    [["a", "b"], [1, 2], [true, false]]*/
var arr3 = [
  ["a", 1, true],
  ["b", 2, false],
];
var res = [];
for (var i = 0; i < arr3[0].length; i++) {
  var group = [];
  for (var j = 0; j < arr3.length; j++) {
    group.push(arr3[j][i]);
  }
  res.push(group);
}
console.log(res);

//Bài 4
var posts = [
  {
    title: "Tiêu đề bài viết 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    image: "https://picsum.photos/300/200",
    position: "left",
  },
  {
    title: "Tiêu đề bài viết 2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    image: "https://picsum.photos/300/200",
    position: "right",
  },
  {
    title: "Tiêu đề bài viết 3",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    image: "https://picsum.photos/300/200",
    position: "left",
  },
];

var postsEl = document.getElementById("posts");

var html = "";

for (var i = 0; i < posts.length; i++) {
  html += `
    <div class="post ${posts[i].position}">
      <img src="${posts[i].image}" alt="${posts[i].title}">

      <div class="post-content">
        <h2>${posts[i].title}</h2>
        <p>${posts[i].desc}</p>
      </div>
    </div>
  `;
}

postsEl.innerHTML = html;
