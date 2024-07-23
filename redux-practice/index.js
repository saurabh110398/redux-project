import {createStore, applyMiddleware} from 'redux'
import loader from 'redux-logger'
console.log('hey redux');

let add ='increment';

let store = createStore(reducerFunction, applyMiddleware(loader.default))

function reducerFunction(state={value: 0}, action){
    return action.type == add ?  
    {value: state.value + 20}: 
    state
}

function increment(){
    return {type: add}
}

store.dispatch(increment());
console.log(store.getState());