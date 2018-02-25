import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter,Switch } from 'react-router-dom';
import reducers from './reducers';
//import routes from './routes';
import Promise from 'redux-promise';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';
import ChatBot from './components/chat_app';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <div>
    <Switch>
    <Route path="/chat" component={ChatBot} />    
    <Route path="/post/new" component={PostNew} />
    <Route path="/post/:id" component={PostShow} />
    <Route path="/" component={PostIndex} />
    </Switch>
    </div>
  </BrowserRouter>
    
  </Provider>
  , document.querySelector('.container'));
