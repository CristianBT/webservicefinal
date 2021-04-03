import React from 'react';
import Routes from './routes/index';
import { Provider } from 'react-redux';
import Store from './store';
import './styles/app.css';

const App = () => <Provider store={ Store }>
    <Routes/>
</Provider>

export default App;