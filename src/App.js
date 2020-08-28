import React from 'react';
import { Routes } from './components/routes/Routes';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
    <div className="">
 <Routes />
    </div>
    </Provider>
  );
}

export default App;
