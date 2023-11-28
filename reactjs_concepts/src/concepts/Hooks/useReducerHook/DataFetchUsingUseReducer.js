import React, { useEffect, useReducer } from 'react'
import axios from 'axios'  

const initialState = {
    loading: true,
    error: '',
    post: {},
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                post : action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading : false,
                post : '',
                error: 'Something went wrong',
            }
        default:
            return state
    }
}

function DataFetchUsingUseReducer() {
    const [currentState, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(resp => {
            dispatch({type: 'FETCH_SUCCESS', payload: resp.data})
        })
        .catch(dispatch({type : 'FETCH_ERROR'}))
    }, [])

  return (
    <div>
        { currentState.loading ? 'Loading' : currentState.post.title}
        {currentState.error ? currentState.error : null}
    </div>
  )
}

export default DataFetchUsingUseReducer