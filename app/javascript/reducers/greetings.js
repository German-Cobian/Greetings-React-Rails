import axios from 'axios';

const GET_GREETINGS = 'GET_GREETINGS'

const initialState = [];

export const fetchData = (dispatch) => {
  axios.get('http://localhost:3000/api/v1/greetings')
  .then((response) => {
    console.log(response.data)
    dispatch(getGreetings(response.data));
  })
};

const getGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});


export const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS: 
      return [...state, action.payload]
    default:
      return state
  }
}
