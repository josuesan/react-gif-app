import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Test to grid gifs', () => {

  test('should be 10 elements', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });

  test('should return 0 if no have category', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });

});
