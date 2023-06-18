import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: ''
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    setGreeting(state, action) {
      state.greeting = action.payload;
    }
  }
});

export const { setGreeting } = greetingSlice.actions;

export const fetchGreeting = () => async (dispatch) => {
  const response = await fetch('/api/v1/greetings');
  const data = await response.json();
  console.log(data)
  dispatch(setGreeting(data.greeting));
};

export default greetingSlice.reducer;
