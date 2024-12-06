const IMAGE_CHANGE_INTERVAL = 5000;

const imageSources = ["/assets/the_diplomat.png", "/assets/space_x.jpeg", "/assets/white_collar_2.jpg", "/assets/suits.jpg", "/assets/avatar.png"]

let currentIndex = 0;

// switch between the images
setInterval(() => {
    imageElement = document.getElementById("sample-image");
    if(currentIndex == (imageSources.length - 1)) {
        currentIndex = 0;
    }else {
        currentIndex++;
    }

    imageElement.src = imageSources[currentIndex];
}, IMAGE_CHANGE_INTERVAL)

imageElement = document.getElementById("sample-image");

imageElement.onload = function () {
    let initialBrightness = 70;

    rgb = getAverageRGB(imageElement);
    document.body.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g},${rgb.b})`;
}

function getAverageRGB(imageEl) {
    let blockSize = 100000,
        defaultRGB = {r:0,g:0,b:0},
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext("2d"),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if(!context) {
        return defaultRGB;
    }

    height = canvas.height = imageEl.naturalHeight || imageEl.offsetHeight || imageEl.height;
    width = canvas.width = imageEl.naturalWidth || imageEl.offsetWidth || imageEl.width;

    context.drawImage(imageEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        return defaultRGB;
    }

    length = data.data.length;

    while((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

    rgb.r = Math.floor(rgb.r / count);
    rgb.g = Math.floor(rgb.g / count);
    rgb.b = Math.floor(rgb.b / count);

    return rgb;
}