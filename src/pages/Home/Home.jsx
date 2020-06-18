import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { createUseStyles, useTheme } from 'react-jss'
import cx from "classnames"
import Button from '../../components/Button/Button';
import { rootClass } from '../../globalStyles';

const useStyles = createUseStyles(theme => ({
    root: {
        color: theme.color.black,
        // textAlign: 'center',
        height: "100%",
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '15px',
        paddingRight: '15px',
        maxWidth: '1024px',
        ...rootClass

    },
    h1: {
        margin: `0 0 ${theme.margin}px`
    },
    label: {
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '24px'
    },
    input: {
        fontSize: '14px',
        height: '48px',
        paddingLeft: '16px',
        width: '50%',
        marginBottom: '24px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(170, 170, 170)',
        borderImage: 'initial',
        outline: 'none'
    },
    submit: {
        color: 'rgb(255, 255, 255)',
        cursor: 'pointer',
        fontSize: '14px',
        display: 'block',
        background: 'rgb(0, 0, 0)',
        borderWidth: 'initial',
        borderStyle: 'none',
        borderColor: 'initial',
        borderImage: 'initial',
        borderRadius: '8px',
        outline: 'none',
        padding: '8px 16px'

    }

}))


export default function Home() {
    const theme = useTheme();
    const classes = useStyles(theme);
    const history = useHistory();
    const [city, setCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (city) {
            history.push({ pathname: `${city.toLowerCase()}` });
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className={cx(classes.root)} >
            <h1 className={classes.h1}>Search Restaurants by City</h1>
            <form onSubmit={handleSubmit}>
                <label className={classes.label}
                    htmlFor="city"
                    aria-required="true"
                >
                    City*
            </label>
                <input className={classes.input}
                    id="city"
                    name="city"
                    placeholder="Enter a city"
                    type="text"
                    value={city}
                    onChange={handleChange}
                />
                <Button className={classes.submit} name="submit" type="submit"  >Submit</Button>
            </form>
        </div>
    )
}
