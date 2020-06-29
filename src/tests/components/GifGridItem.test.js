import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';

describe('Test to grid gifs', () => {

  const title = 'Un titulo';
  const url = 'https://localhost.com/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should be renderer', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a parragraph with a text', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('should have a img with source and alt text', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('should have animeted css', () => {
    const div = wrapper.find('div');
    expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
  })

});
