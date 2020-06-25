1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

To complete the assignment, I spent 2-3 hours. At the moment, you know, search functionality is only done on the frontend. There isn't provided API on Opentable but you know it should be done on the backend. When you input text, the search query should be sent to the backend and the app shows the filtered responded results.

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

It's a react hook. You know, it is a function that lets you hook into React state and life cycle features from the function component.

const [search, setSearch] = useState('')
const dispatch = useDispatch()
const restaurants = useSelector(selectRestaurant)
useLayoutEffect(() => {
    if (!error) {
      return
    }

    notification.open({
      message: 'Error Found',
      description: error,
    })
  }, [error])

3. How would you track down a performance issue in production? Have you ever had to do this?

The key is just logging. The ideal is to have logging with optional logging levels that will spew out more detail which can be selectively turned on.
For example, you can log how long it takes to complete a request and how long it takes to render a page. It is enough to focus your efforts on the requests or request types that are slowest or present the greatest load, and therefore are good targets for optimization.

4. How would you improve the API that you just used?

Frontend: 
 - Should use denounce to prevent unnecessary API calls
 - Call APIs asynchronously 
API: 
 - Implement cache functionality based on city name
 - Once API is called, results should be cached at in-memory database like Redis

5. Please describe yourself using JSON.

{
  "first_name": "Saito",
  "last_name": "Suzuki",
  "age": 30,
  "nationality": "Japan",
  "address": "Toronto",
  "skills": [
    "React",
    "Vue.js",
    "Angular",
    "Node.js",
    "Django",
    "Laravel",
    "Java"
  ],
  "hobbies": [
    "Travelling",
    "Reading",
    "Soccer"
  ],
  "favourite_soccer_team": "Real Madrid",
  "goal": "business",
  "dreams": [
    "To become a sensitive and perfect developer"
  ]
}