/**
 * Testing our Ol component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';
import Ol from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Ol
    className={props.className}
  >
    {props.children}
  </Ol>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Ol
      className={props.className}
    >
      {props.children}
    </Ol>
  </ThemeProvider>
);


describe('<Ol />', () => {
  it('should render an <Ol> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Ol').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ol> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('ol').length).toBe(1);
    expect(renderedComponent.find('Ol').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
