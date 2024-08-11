var count = 0;

document.getElementById("mybytt").onclick = function () {
    count++;

    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://avatars.mds.yandex.net/i?id=c10a7344536fd6f01cd228454192e8c8813509ac-5126495-images-thumbs&n=13";

        document.getElementById("demo").appendChild(img)
    }


}