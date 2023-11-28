import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0, 
    secondCounter: 10, 
}
//  both state and action can be objects
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, firstCounter : state.firstCounter + action.value, secondCounter : state.secondCounter + action.value}
        case 'decrement':
            return {...state, firstCounter : state.firstCounter - 1}
        case 'reset':
            return initialState
        default:
            return state
    }

}

function ReducerCounter2() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>{count.firstCounter}</h1>
        <h1>{count.secondCounter} - counter 2</h1>

        <button onClick={() => dispatch({type : 'increment', value: 5})}>Increment by 5</button>
        <button onClick={() => dispatch({type : 'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerCounter2