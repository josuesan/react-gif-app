import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test to Gif App', () => {
  test('should render', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a list opf categories', () => {
    const categories = ['One punch man', 'Naruto'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });


});