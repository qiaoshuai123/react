import {createStore} from 'redux'

let obj={
    list:[]
}

const reducer =(state=obj,action)=>{
    switch (action.type) {
        case 'add':

            return {...state,lsit:[...state.list]}
    
        default:
           return {...state}
    }
}


const store =createStore(reducer)

export default store