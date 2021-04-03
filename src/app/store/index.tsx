import { createStore, combineReducers, compose,applyMiddleware } from 'redux';
import authReducer from '../reducers/authReducer';
import errorReducer from '../reducers/errorReducer';
import uiReducer from '../reducers/uiReducer';
import thunk from 'redux-thunk';
import studentReducer from '../reducers/studentsReducer';
import pdfReducer from '../reducers/pdfReducer';
import driverReducer from '../reducers/driverReducer';
import afluenciaReducer from '../reducers/afluenciaReducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer,
    err: errorReducer,
    ui: uiReducer,
    student: studentReducer,
    pdf: pdfReducer,
    drivers: driverReducer,
    horarios: afluenciaReducer
});

const Store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);

export default Store;