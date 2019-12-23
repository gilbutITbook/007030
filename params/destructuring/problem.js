// START:func
function displayPhoto(photo) {
  const title = photo.title;
  const photographer = photo.photographer || 'Anonymous';
  const location = photo.location;
  const url = photo.src;

  const copy = { ...photo };
  delete copy.title;
  delete copy.photographer;
  delete copy.location;
  delete copy.src;

  const additional = Object.keys(copy).map(key => `${key}: ${copy[key]}`);

  return (`
    <img alt="${title} 사진 ${photographer} 촬영" src="${url}" />
    <div>${title}</div>
    <div>${photographer}</div>
    <div>위도: ${location[0]} </div>
    <div>경도: ${location[1]} </div>
    <div>${additional.join(' <br/> ')}</div>
  `);
}
// END:func

export { displayPhoto };
