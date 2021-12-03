import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariante from 'redux-immutable-state-invariant'

export default function configStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

    return createStore(
        rootReducer, 
        initialState, 
        composeEnhancers( applyMiddleware( reduxImmutableStateInvariante() ) )
    );
}