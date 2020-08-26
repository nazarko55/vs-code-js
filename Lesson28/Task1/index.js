export const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;

    const onImgLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    }

    imgElem.addEventListener('load', onImgLoaded);
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });
  return p;
};

const imgSrc = 'htps://wallpapershome.com/images/wallpapers/rihan-1080x1920-top-music-artist-and-bands-singer-actress-510.jpg';

const resultPromise = addImage(imgSrc);

resultPromise.then(data => console.log(data));
resultPromise.catch(error => console.log(error));
