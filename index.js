// Counter Project in the console using Vanilla Redux 

const { createStore } = require("redux");

// counter constant type : 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// inistialStore => 
const inititalCounterStore = { count : 0};

// action => 
const incrementAction = () => {
    return {
        type : INCREMENT
    }
}
const decrementAction = () => {
    return {
        type : DECREMENT
    }
}
const resetAction = () => {
    return {
        type : RESET
    }
}

// Reducer Create => 
const counterReducer = (state = inititalCounterStore, action) => {
    switch(action.type){
        case INCREMENT : 
            return {
                ...state,
                count : state.count + 1
            }
        case DECREMENT : 
            return {
                ...state,
                count : state.count - 1
            }
        case RESET : 
            return {
                ...state,
                count : 0
            }
        default : 
            return state
    }
}

const counterStore = createStore(counterReducer);

counterStore.subscribe(() => {
    console.log(counterStore.getState());
})

counterStore.dispatch(incrementAction());  // count => 1
counterStore.dispatch(decrementAction());  // count => 1 - 1 => 0
counterStore.dispatch(incrementAction());  // count => 0 + 1 => 1
counterStore.dispatch(incrementAction());  // count => 1 + 1 => 2
counterStore.dispatch(resetAction()); // count => 2 = 0