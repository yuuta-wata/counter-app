import React, { useReducer, useCallback } from 'react';
import './App.css';

import {counterReducer, initialState, INCREMENT, DECREMENT} from './reducer'

type IncrementProps = {
  onIncrement: () => void
}

// 加算ボタン
const Increment: React.FC<IncrementProps> = React.memo(({onIncrement}) => {
  console.log('Increment');
  
  return (
    <button onClick={onIncrement}>Increment</button>
  )
})

type DecrementProps = {
  onDecrement: () => void
}

// 減算ボタン
const Decrement: React.FC<DecrementProps> = React.memo(({onDecrement}) => {
  console.log('Decrement');
  
  return (
    <button onClick={onDecrement}>Decrement</button>
  )
})

// カウンター
const Counter: React.FC = () => {
  console.log('Counter');
  const [state, dispatch] = useReducer(counterReducer, initialState)
  
  const onIncrement = useCallback(() => {
    dispatch({ type: INCREMENT, payload: { addCount: 1 } })
  },[])
  
  const onDecrement = useCallback(() => {
    dispatch({ type: DECREMENT, payload: { subtractionCount: 1 } })
  },[])

  return (
    <div className='counter-container'>
      <h2>{state.count}</h2>
      <div className='counter-actions'>
        <Increment onIncrement={onIncrement} />
        <Decrement onDecrement={onDecrement} />
      </div>
    </div>
  )
}

// 一番親のコンポーネント
const App: React.FC = () => {
  console.log('App');

  return (
    <div className="app-container">
      <h1>My Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
