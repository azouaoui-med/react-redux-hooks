import React from 'react';
import { Typography, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from './actions';

const { Title } = Typography;
const Counter = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 5
  };
  const buttonStyle = {
    margin: 5
  };

  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(incrementCounter());
  };

  const handleDecrementClick = () => {
    dispatch(decrementCounter());
  };

  const handleResetClick = () => {
    dispatch(resetCounter());
  };

  const counter = useSelector(state => state.counter);
  console.log(counter);
  return (
    <div
      style={{
        ...styles,
        flexDirection: 'column'
      }}
    >
      <div style={styles}>
        <Title level={4}>
          A simple counter example using react redux hooks
        </Title>
      </div>
      <div style={styles}>
        <Title level={1}>{counter.number}</Title>
      </div>
      <div style={styles}>
        <Button
          type='primary'
          style={buttonStyle}
          onClick={handleIncrementClick}
        >
          Increment
        </Button>
        <Button
          type='primary'
          style={buttonStyle}
          onClick={handleDecrementClick}
        >
          Decrement
        </Button>
        <Button type='default' style={buttonStyle} onClick={handleResetClick}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
