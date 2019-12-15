import './index.scss';

import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const Button = ({
  icon,
  children,
  onClick,
  color,
  linkStyle,
  disabled,
  className,
  tooltip,
  dataTip,
  dataTourElement,
  ...props
}) => (
  <button
    tabIndex="0"
    type="button"
    className={classnames('NewButton', {
      'NewButton--link': !!linkStyle,
      [`NewButton--${color}`]: !!color,
      [className]: !!className
    })}
    onClick={onClick}
    disabled={disabled}
    title={tooltip}
    data-tip={dataTip}
    data-tour-element={dataTourElement}
    {...props}
  >
    {icon && <img src={icon} alt={children} className="NewButton__icon" />}
    <span className="NewButton__label">{children}</span>
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  color: PropTypes.string,
  linkStyle: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({})
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  tooltip: PropTypes.string,
  dataTip: PropTypes.string,
  dataTourElement: PropTypes.string
};

Button.defaultProps = {
  color: 'gray',
  linkStyle: false,
  onClick: null,
  icon: null,
  disabled: false,
  className: null,
  tooltip: null,
  dataTip: null,
  dataTourElement: null
};

export default Button;
