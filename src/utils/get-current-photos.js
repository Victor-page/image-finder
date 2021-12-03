export const getCurrentPhotos = (currentPhotos, newPhotos, page) =>
  currentPhotos && page > 1 ? currentPhotos.concat(newPhotos) : newPhotos;
