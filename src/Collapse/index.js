import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'lodash.omit';
import { parseTransition } from 'bootstrap-styled-utils';
import mapToCssModules from 'map-to-css-modules';
import { makeTheme } from './theme';

const SHOW = 'SHOW';
const SHOWN = 'SHOWN';
const HIDE = 'HIDE';
const HIDDEN = 'HIDDEN';

class Collapse extends Component {

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.node,
    cssModule: PropTypes.object,
    delay: PropTypes.oneOfType([
      PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
      PropTypes.number,
    ]),
    isOpen: PropTypes.bool,
    navbar: PropTypes.bool,
    /* eslint-enable react/no-unused-prop-types */
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    theme: PropTypes.object,
  };

  static defaultProps = {
    isOpen: false,
    theme: makeTheme(),
    tag: 'div',
    delay: {
      show: null,
      hide: null,
    },
    onOpened: () => {},
    onClosed: () => {},
  };

  state = {
    collapse: HIDDEN,
    height: null,
  };

  componentWillMount() {
    this.updateVisibility({ collapse: this.props.isOpen ? SHOWN : HIDDEN });
    this.updateTransition({ delay: this.props.delay, theme: this.props.theme });
  }

  componentWillReceiveProps(nextProps) {
    const willOpen = nextProps.isOpen;
    const collapse = this.state.collapse;

    if (willOpen && collapse === HIDDEN) {
      // will open
      this.setState({ collapse: SHOW }, () => {
        // the height transition will work after class "collapsing" applied
        this.setState({ height: this.getHeight() });
        this.transitionTag = setTimeout(() => {
          this.setState({
            collapse: SHOWN,
            height: null,
          });
        }, this.getDelay('show'));
      });
    } else if (!willOpen && collapse === SHOWN) {
      // will hide
      this.setState({ height: this.getHeight() }, () => {
        this.setState({
          collapse: HIDE,
          height: this.getHeight(),
        }, () => {
          this.setState({ height: 0 });
        });
      });

      this.transitionTag = setTimeout(() => {
        this.setState({
          collapse: HIDDEN,
          height: null,
        });
      }, this.getDelay('hide'));
    }
    // else: do nothing.

    if (nextProps.theme['$transition-collapse'] !== this.props.theme['$transition-collapse'] ||
      nextProps.delay.show !== this.props.delay.show ||
      nextProps.delay.hide !== this.props.delay.hide
    ) {
      this.updateTransition({ delay: nextProps.delay, theme: nextProps.theme });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.collapse === SHOWN &&
      prevState &&
      prevState.collapse !== SHOWN) {
      this.props.onOpened();
    }

    if (this.state.collapse === HIDDEN &&
      prevState &&
      prevState.collapse !== HIDDEN) {
      this.props.onClosed();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.transitionTag);
  }

  getDelay(key) {
    const { delay } = this.state;
    if (typeof delay === 'object') {
      return delay[key];
    }
    return delay;
  }

  getHeight() {
    return this.element.scrollHeight;
  }

  updateTransition({ delay, theme }) {
    const transition = parseTransition(theme['$transition-collapse'])[0];
    let newDelay = {
      show: delay.show !== undefined ? delay.show : transition.duration,
      hide: delay.hide !== undefined ? delay.hide : transition.duration,
    };
    if (typeof delay !== 'object' && delay !== undefined) {
      newDelay = {
        show: delay,
        hide: delay,
      };
    }
    this.setState({ delay: newDelay });
  }

  updateVisibility({ collapse }) {
    this.setState({
      collapse,
    });
  }

  element = null;

  render() {
    const {
      navbar,
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['isOpen', 'theme', 'delay', 'onOpened', 'onClosed']);

    const { collapse, height } = this.state;

    let collapseClass;
    if (collapse === SHOW || collapse === HIDE) {
      collapseClass = 'collapsing';
    } else if (collapse === SHOWN) {
      collapseClass = 'collapse show';
    } else if (collapse === HIDDEN) {
      collapseClass = 'collapse';
    }

    const classes = mapToCssModules(classNames(
      className,
      collapseClass,
      navbar && 'navbar-collapse'
    ), cssModule);
    const style = height === null ? null : { height };
    return (
      <Tag
        {...attributes}
        style={{ ...attributes.style, ...style }}
        className={classes}
        ref={(c) => { this.element = c; }}
      />
    );
  }
}
export default Collapse;