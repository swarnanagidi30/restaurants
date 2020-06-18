# Technical Questions

1. **How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**

   6-7 hours. If I had more time I would I would work on the following (no particular order):

   - City List: This can be done as an Autocomplete Dropdown 
   - Error handling needs to imporoved to have proper error on api failures.
   - Geolocation: Some type of service (browser or Google API) to return a default city
   - Lazy Loading: As api supports pagination we have to make the application to load on scroll.
   - css-in-js: Refactor to use theme variables.
   - Tests: I would continue to add more unit tests using snapshot testing and will add few more jest test cases.

2. **What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

   In terms of React, that would be hooks as seen in the `Pages -> Restaurants` component:

   ```sh
    const theme = useTheme();
    const classes = useStyles(theme);

    const dispatch = useDispatch();
    const restaurants = useSelector(selectRestaurantByName);

    const { city } = useParams();
    const [name, setName] = useState('');
   ```

3. **How would you track down a performance issue in production? Have you ever had to do this?**

   There are a number of ways I could track down a performance issue. These depend on the type of issue, but here are ways I have tracked down issues in the past:

   - Lighthouse tests with Chrome, or PageSpeed Insights tests are typically the first place to start for a snapshot of important metrics such as time to paint and suggestions directly from Google
   - Performance profiling with Chrome
   - Analyzing data from tools such as NewRelic and Rollbar, as well as raw server logs
   - For specific browser/device issues, triaging the issue using BrowserStack or Android Studio/XCode to access device simulators
   - For very odd browser/device issues, I have had to physically connect to the troublesome device to monitor developer tools while physically using the device

4. **How would you improve the API that you just used?**

   The API may already do this, but instead of filtering restaurants on the client, the API route should accept filter parameters which shole search in multiple fiels. Displaying the cuisine type and rating were in the requirements, but were not included in the API response.

5. **Please describe yourself using JSON.**

   ```sh
   {
       "firstName": "Swarna",
       "lastName": "Nagidi",
       "age": 26,
       "house": "Lees Ave",
       "interests": ["Badminton", "space"]
   }
   ```