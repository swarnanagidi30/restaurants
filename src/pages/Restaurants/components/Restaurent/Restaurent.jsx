import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    root: {
        width: '100%',
        padding: 24,
        borderRadius: 8,
        background: 'rgb(245, 245, 245)'
    }
}));

const renderPrice = (price) => {
    let dollarSigns = '';

    for (let i = 0; i < price; i++) {
        dollarSigns += '$';
    }

    return dollarSigns;
};

export default function Restaurent({ restaurant }) {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <div className={classes.root}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <p>{renderPrice(restaurant.price)}</p>
        </div>
    )
}
