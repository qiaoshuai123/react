import Home from '../views/home/home'
import My from'../views/my/my'
import Page from'../views/page/page'
import Details from'../views/details/details'
import Hot from '../views/home/hot'
import Will from '../views/home/will'
const routers=[
    {
        name:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component:Home,
        children:[
            {
                path:'/home/hot',
                name:'hot',
                component:Hot
            },
            {
                path:'/home/will',
                name:'will',
                component:Will
            }
        ]
    },
    {
        path:'/my',
        name:'my',
        component:My
    },
    {
        path:'/page',
        name:'page',
        component:Page
    },
    {
        path:'/details/:id',
        name:'details',
        component:Details
    }
]
export default routers