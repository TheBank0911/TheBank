function kiem_tra() {
    var ten = document.getElementById("name");
    if (ten.value.length == 0) {
        alert("Vui lòng nhập tên của bạn!");
        return false;
    }
    var m = document.getElementById("mail");
    if (m.value.length == 0) {
        alert("Vui lòng nhập mail của bạn!");
        return false;
    }
    var mk = document.getElementById("pass");
    if (mk.value.length == 0) {
        alert("Vui lòng nhập mật khẩu của bạn!");
        return false;
    }
    alert("Đăng ký thành công!");
    return true;
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