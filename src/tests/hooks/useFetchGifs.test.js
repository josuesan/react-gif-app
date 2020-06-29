import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Test in custom hook', () => {

  test('should return the initial value', async () => {
    const category = 'One punch man';
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return a gifs array and false', async () => {
    const category = 'One punch man';
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });

});