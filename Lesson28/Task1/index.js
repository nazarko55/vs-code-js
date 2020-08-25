const addImage = imgSrc => {
  return new Promise((getImageSize, getErrorText) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    function onImageLoaded() {
      const { width, height } = imgElem;
      getImageSize({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => getErrorText(new Error('Image load failed')));
  });
};

const imgSrc = 'htps://wallpapershome.com/images/wallpapers/rihan-1080x1920-top-music-artist-and-bands-singer-actress-510.jpg';

const resultPromise = addImage(imgSrc);

resultPromise.then(data => console.log(data));
resultPromise.catch(error => console.log(error));
