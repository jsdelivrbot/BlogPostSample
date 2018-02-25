import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './components/app';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';


export default (
    <Route path="/" component={App} >
        <IndexRoute component={PostIndex} />
        <Route path="post/new" component={PostNew} />
    </Route>
)