import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Test to Add Category', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
    jest.clearAllMocks();
  });

  test('should be rendered', async () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change the text field', () => {
    const input = wrapper.find('input');
    const value = 'Hi';
    input.simulate('change', {
      target: {
        value
      }
    });
    expect(wrapper.find('input').text().trim()).toBe('');
  })

  test('shouldnt post info on submit ', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault() { },
    });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call submit and clean the text field', () => {
    const value = 'Black Clover';
    const input = wrapper.find('input');
    wrapper.find('input').simulate('change', { target: { value } })
    wrapper.find('form').simulate('submit', {
      preventDefault() { },
    });
    expect(setCategories).toHaveBeenCalled();
    expect(input.prop('value')).toBe('');
  })

});