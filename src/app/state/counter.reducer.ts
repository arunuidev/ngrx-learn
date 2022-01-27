import { createReducer, on } from "@ngrx/store";
 import { customIncrement, decrement, increment, reset } from "./counter.actions";
import { inititalState } from "./counter.state";

const _counterReducer = createReducer(
    inititalState,
    on(increment, state => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }), on(decrement, state => {
        return {
            ...state,
            counter: state.counter > 0 ? state.counter - 1 : 0
        }
    }), on(reset, state => {
        return {
            ...state,
            counter: 0
        }
    }), on(customIncrement,(state,action)=>{ 
        return{
            ...state,
            counter:state.counter+action.value
        }
    })
)
export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}