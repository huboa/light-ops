import React,{lazy} from "react"
// navigate 重定向组件
import {Navigate} from "react-router-dom";
// 各个路由页面
import Home from "../views/Home";
// import About from "../views/About";
// import User from "@/views/User";
import Login from "@/views/Login/index"
const About = lazy(()=>import("../views/About"))
const User = lazy(()=>import("@/views/User"))
const Page1 = lazy(()=>import("@/views/Page1"))
const Page2 = lazy(()=>import("@/views/Page2"))
const Page301 = lazy(()=>import("@/views/Page301"))
const Page302 = lazy(()=>import("@/views/Page302"))
const Page401 = lazy(()=>import("@/views/Page401"))
const Page402 = lazy(()=>import("@/views/Page402"))

// 懒加载模式需要添加loading 组件,外面需要加一层loading的提示组件

const withLoadingComponet =(comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)
const routes =[
    // 嵌套路由
    // {
    //     path:"/",
    //     element:<Navigate to="/home"/>
    //
    // },
    {
        path: "/",
        element: <Home />,
        children:[
            {
                path:"/page1",
                element: withLoadingComponet(<Page1 />)
            },
            {
                path:"/page2",
                element: withLoadingComponet(<Page2 />)
            },
            {
                path:"/page3/page301",
                element: withLoadingComponet(<Page301 />)

            },
            {
            path:"/page3/page302",
                element: withLoadingComponet(<Page302 />)

            },
            {
                path:"/page4/page401",
                element: withLoadingComponet(<Page401 />)
            },
            {
                path:"/page4/page402",
                element: withLoadingComponet(<Page402 />)
            }
        ]
    },
    // 登陆页
    {
        path:"/login",
        element: <Login />
    },
    // 默认路由
    {
        path: "*",
        element: <Navigate to ='/page1'></Navigate>
    }
    // {
    //     path:"/home",
    //     element:<Home/>
    //
    // },
    //     {
    //     path:"/about",
    //     element: withLoadingComponet(<About/>)
    // },
    // {
    //     path:"/user",
    //     // element:<User/>
    //     element: withLoadingComponet(<User/>)
    // }
]
export default routes