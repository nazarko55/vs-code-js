function addImage(imgSrc, callback) {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  function onImageLoaded() {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };

  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load failed'));
};

function onImageLoaded(error, data) {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};

// addImage('https://th.bing.com/th/id/OIP.vwN3Y9sr3vUO1kA5e7joBQHaHV?pid=Api&rs=1', onImageLoaded);

export { addImage };