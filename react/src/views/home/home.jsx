import React, { Component } from 'react';
import Routerviews from '../../router/routerviews'
import {connect} from 'react-redux'
class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                this is Home
                <div>
                    123
                   <Routerviews routers={this.props.routers}/>
                </div>
            </div>
        );
    }
}

export default connect((state)=>{
 return{
        list:state.list
 }
},(dispatch)=>{
    return{
        add(){
            
        }
    }
})(Home) ;
