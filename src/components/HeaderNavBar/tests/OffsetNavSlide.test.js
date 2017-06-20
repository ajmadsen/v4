/**
 * Testing our Nav component
 */
import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';
import React from 'react';
import theme from '../../../theme';

import OffsetNavSlide from '../OffsetNavSlide';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <OffsetNavSlide {...props}>
      {props.children}
    </OffsetNavSlide>
  </ThemeProvider>
);


describe('<OffsetNavSlide />', () => {
  it('should render an <OffsetNavSlide> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('OffsetNav').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
