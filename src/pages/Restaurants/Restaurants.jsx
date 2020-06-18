import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'
import Button from '../../components/Button/Button';
import Restaurant from './components/Restaurent';
import { restaurantActions } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import { rootClass } from '../../globalStyles';


const useStyles = createUseStyles(theme => ({
    root: {
        ...rootClass
    },
    h1: {
        margin: `0 0 ${theme.margin}px`
    },
    ul: {
        flexWrap: 'wrap',
        display: 'flex',
        marginLeft: -15,
        marginRight: -15,
        padding: 0
    },
    restaurent: {
        maxWidth: '100%',
        marginBottom: 24,
        paddingRight: 15,
        paddingLeft: 15,
        display: 'flex',
        flex: '0 0 100%',
        '@media (min-width: 768px)': {
            maxWidth: '33.33%',
            flex: '0 0 33.33%'
        }
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

const restaurentsItemsSelector = state => state.restaurants.restaurants;
const nameSelector = state => state.restaurants.name;

const selectRestaurantByName = createSelector(
    restaurentsItemsSelector,
    nameSelector,
    (restaurants, name) =>
        restaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(name)
        )
);

export default function Restaurants() {
    const theme = useTheme();
    const classes = useStyles(theme);

    const dispatch = useDispatch();
    const restaurants = useSelector(selectRestaurantByName);

    const { city } = useParams();
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(restaurantActions.setSelectedName(name.toLowerCase()));
    };

    useEffect(() => {
        dispatch(restaurantActions.loadRestaurants(city));
    }, [city, dispatch]);

    return (
        <div className={classes.root}>
            <h1 className={classes.h1}>
                Restaurants in <span>{city}</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <h2>Filters</h2>
                <label
                    className={classes.label}
                    htmlFor="name"
                    aria-required="true"
                >
                    Name*
            </label>
                <input
                    className={classes.input}
                    id="name"
                    name="name"
                    placeholder="Enter a restaurant name"
                    type="text"
                    value={name}
                    onChange={handleChange}
                />
                <Button className={classes.submit} name="submit" type="Submit" >Submit</Button>
            </form>
            <ul className={classes.ul}>
                {restaurants.map((restaurant) => (
                    <li className={classes.restaurent} key={restaurant.name} >
                        <Restaurant restaurant={restaurant} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
