import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return <h1>{greeting}</h1>;
}

export default Greetings
