var image = [];
for (var i = 0; i < 4; i++) {
    image[i] = new Image();
    image[i].src = "image/" + i + ".JPG";
}
var index = 0;

function next() {
    index++;
    if (index >= image.length) {
        index = 0;
    }
    var anh = document.getElementById("anh");
    anh.src = image[index].src;
}

function prev() {

    index--;
    if (index < 0) {
        index = image, length - 1;
        index = 0;
    }

    var anh = document.getElementById("anh");
    anh.src = image[index].src;
}

function tang() {
    var t = document.getElementById("sl");
    var tang = t.value;
    if (!isNaN(tang)) {
        t.value++;
    }
    var sluong = document.getElementById("sl");
    var s = sluong.value;
    var gia = document.getElementById("g");

    var gt = gia.getAttribute("data-price");
    var tien = s * gt;
    document.getElementById("tong").innerHTML = tien;
}

function giam() {
    var g = document.getElementById("sl");
    var parent = document.getElementById("demo");
    var child = document.getElementById("not-empty");


    var t = "Giỏ hàng trống";
    var giam = g.value;
    if (!isNaN(giam)) {
        g.value--;
        if (g.value <= 0) {
            alert("Bạn có muốn xóa sản phẩm?");
            parent.removeChild(child);

            document.getElementById("trong").innerText = t;
        }
    }
    var sluong = document.getElementById("sl");
    var s = sluong.value;
    var gia = document.getElementById("g");

    var gt = gia.getAttribute("data-price");
    var tien = s * gt;
    document.getElementById("tong").innerHTML = tien;
}