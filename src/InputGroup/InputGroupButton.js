/**
 * InputGroup Component
 *
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import Button from '../Button';


class InputGroupButton extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    tag: 'div',
  };

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    children: PropTypes.node,
    groupClassName: PropTypes.string,
    groupAttributes: PropTypes.object,
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      children,
      groupClassName,
      groupAttributes,
      ...attributes
    } = this.props;

    if (typeof children === 'string') {
      const groupClasses = mapToCssModules(cn(
        groupClassName,
        'input-group-btn'
      ), cssModule);

      return (
        <Tag {...groupAttributes} className={groupClasses}>
          <Button {...attributes} className={className}>{children}</Button>
        </Tag>
      );
    }

    const classes = mapToCssModules(cn(
      className,
      'input-group-btn'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes}>{children}</Tag>
    );
  }
}

export default InputGroupButton;