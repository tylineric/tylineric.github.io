
function changeLogos() {
    let images = document.querySelectorAll("img");

    let Logo1Path = "images/素材01.jpg"
    let Logo2Path = "images/素材02.jpg"

    for (var index = 0; index < images.length; index++) {
        let image = images[index];
        let scr = image.getAttribute("sre");
        if (src === logo1Path) {
            image.setAttribute("src", logo2Path);
        } else {
            images.setAttribute("src", logo1Path);
        }

    }

}
