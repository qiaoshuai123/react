import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import routers from './routers'
import Routerviews from './routerviews'
function Router(){
    return <BrowserRouter>
            <Routerviews routers={routers}/>
    </BrowserRouter>
}

export default Router
