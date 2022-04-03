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


function them(button) {
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0];
    btnXoa.innerText = "Xóa";
    btnXoa.setAttribute('onclick', 'xoa(this)');

    document.getElementById("cart").appendChild(row);

    tinhTong();
}

function xoa(button) {
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row);
    alert("Bạn có muốn xóa sản phẩm!");
    tinhTong();
}

function tinhTong() {
    var cart = document.getElementById("cart");
    var rows = cart.getElementsByTagName("tr");
    var tong = 0;
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var price = cells[2].innerText.substring(1);
        tong += 1 * price;
    }
    document.getElementById("tong").innerText = tong;
    if (tong == 0) {
        document.getElementById("empty").style.display = "";
        document.getElementById("not-empty").style.display = "none";
    } else {

        document.getElementById("anh2").style.width = "200px";

        document.getElementById("anh3").style.width = "200px";

        document.getElementById("anh4").style.width = "200px";

        document.getElementById("anh5").style.width = "200px";

        document.getElementById("anh6").style.width = "200px";

        document.getElementById("anh7").style.width = "200px";

        document.getElementById("anh8").style.width = "200px";

        document.getElementById("anh9").style.width = "200px";

        document.getElementById("anh10").style.width = "200px";

        document.getElementById("empty").style.display = "none";

        document.getElementById("not-empty").style.display = "";


    }

    document.getElementById("empty").style.display = "none";
    document.getElementById("not-empty").style.display = "";
    document.getElementById("tong ").style.backroundColor = "yellow";
}

function thanhtoan() {
    var parent = document.getElementById("demo");
    var child = document.getElementById("not-empty");
    alert("Thanh toán thành công!");

    parent.removeChild(child);
}