function kiem_tra() {
    var m = document.getElementById('mail').value;

    var mk = document.getElementById('pass').value;

    if (m.length == 0) {
        alert("Vui lòng nhập tên của bạn!");
        return false;
    }
    if (mk.length == 0) {
        alert("Vui lòng nhập mật khẩu của bạn!");
        return false;
    }

    if (m === "thebank" && mk === "bank090103") {
        alert("Đăng nhập thành công!");
        window.location("index.html");
        return true;
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        return false;
    }

}



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