import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingData } from '../../redux/greetingActions';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingData());
  }, []);
  const selector = useSelector((state) => state.reducer.greeting);
  console.log(selector);
  return (
    <div>
      <p>{selector.name}</p>
    </div>
  );
};

export default Main;
