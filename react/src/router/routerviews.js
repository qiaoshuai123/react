import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
function Routerviews(props) {
    const { routers } = props
    console.log(routers)
    const comList = routers.filter(item => !item.redirect)
    const redList = routers.filter(item => item.redirect)
    return <Switch>
        {
            comList && comList.map((item, ind) => <Route path={item.path} key={ind}
             render={(props) =><item.component {...props} routers={item.children}></item.component>  
            } />)
        }
        {
            redList && redList.map((item, ind) => <Redirect from={item.name} key={ind} to={item.redirect} />)
        }
    </Switch>
}

export default Routerviews