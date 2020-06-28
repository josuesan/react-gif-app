const key = 'ZXS5J0cIXnXakVSI255TXtq3C3RJOZ38';
const baseUrl = 'http://api.giphy.com/v1/gifs';

export const getGifs = async (category) => {
  const res = await fetch(`${baseUrl}/search?q=${encodeURI(category)}&limit=10&api_key=${key}`);
  const { data } = await res.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
}