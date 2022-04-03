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