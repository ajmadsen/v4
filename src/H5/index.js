import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { typography } from 'bootstrap-styled-mixins/lib/typography';
import { makeTheme } from './theme';


class H5Unstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    theme: makeTheme(),
  };

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    cssModule: PropTypes.object,
    lead: PropTypes.bool,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      color,
      children,
      cssModule,
      lead,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      lead ? 'lead' : false,
      color ? `text-${color}` : false,
    ), cssModule);

    return (
      <h5 className={classes} {...attributes}>
        {children}
      </h5>
    );
  }
}

const H5 = styled(H5Unstyled)`
  ${(props) => `
    font-size: ${props.theme['$font-size-h5']};
    ${typography(
      props.theme['$headings-margin-bottom'],
      props.theme['$headings-font-family'],
      props.theme['$headings-font-weight'],
      props.theme['$headings-line-height'],
      props.theme['$headings-color'],
      props.theme['$display1-size'],
      props.theme['$display2-size'],
      props.theme['$display3-size'],
      props.theme['$display4-size'],
      props.theme['$display1-weight'],
      props.theme['$display2-weight'],
      props.theme['$display3-weight'],
      props.theme['$display4-weight'],
    )}
 
    &.lead {
     font-size: ${props.theme['$lead-font-size']};
     font-weight: ${props.theme['$lead-font-weight']};
    }

    /* Reboot Scss */
    margin-top: 0;
  `}
`;

export default H5;