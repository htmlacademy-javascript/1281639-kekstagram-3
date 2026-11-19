const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = (thumbnail) => {
  const picture = thumbnailTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = thumbnail.url;
  picture.querySelector('.picture__img').alt = thumbnail.description;
  picture.querySelector('.picture__comments').textContent = thumbnail.comments.length;
  picture.querySelector('.picture__likes').textContent = thumbnail.likes;

  return picture;
};

const renderThumbnails = (thumbnails) => {
  const fragment = document.createDocumentFragment();
  thumbnails.forEach((thumbnail) => {
    const thumbnailElement = createThumbnail(thumbnail);
    fragment.append(thumbnailElement);
  });

  container.append(fragment);
};

export { renderThumbnails };
