import React from "react";
import PropsTypes from 'prop-types';
import css from './IconButton.module.css';

const IconButton = ({ type,children, onClick, ...allyProps}) => (
    <button type={type} className={css.iconButton} onClick={onClick} {...allyProps}>
        {children}
    </button>
);

IconButton.defaultProps = {
    onClick: () => null,
    children: null,
};

IconButton.PropsTypes = {
    onClick: PropsTypes.func,
    children: PropsTypes.node,
 };

export default IconButton;