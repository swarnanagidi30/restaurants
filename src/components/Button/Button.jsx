import React from 'react';

import { createUseStyles, useTheme } from 'react-jss'
const useStyles = createUseStyles(theme => ({
    button: {
        background: theme.colorPrimary
    },
    label: {
        fontWeight: 'bold'
    }
}))

const Button = ({ children, ...props }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <button className={classes.button} {...props}>
            <span className={classes.label}>{children}</span>
        </button>
    )
}

export default Button;
