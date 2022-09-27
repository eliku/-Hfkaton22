import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reduser } from '../reducers'

export const store = createStore(
    reduser,
    compose(
        applyMiddleware(thunk)
    )
)