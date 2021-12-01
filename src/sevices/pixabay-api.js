export const fetchGallery = (query, page) =>
  fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=24568502-5ca9f026ce5836891cf338e0e&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`There are no ${query} images`));
  });
