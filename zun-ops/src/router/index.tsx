import React,{lazy} from "react"
// navigate 重定向组件
import {Navigate} from "react-router-dom";
// 各个路由页面
import Home from "../views/Home";
// import About from "../views/About";
// import User from "@/views/User";
const About = lazy(()=>import("../views/About"))
const User = lazy(()=>import("@/views/User"))
const Page1 = lazy(()=>import("@/views/Page1"))
const Page2 = lazy(()=>import("@/views/Page2"))



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
            }
        ]
    },
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