import React from 'react';
import ReactDOM from 'react-dom';
import TodoList3 from './TodoList3';
import * as serviceWorker from './serviceWorker';
import  {Provider} from 'react-redux';
import store from './store'

const App=(
    <Provider store={store}>
        <TodoList3/>
    </Provider>
);

ReactDOM.render(App,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
