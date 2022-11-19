import React,{lazy} from "react"
import Home from "../views/Home";
// import About from "../views/About";
// import User from "@/views/User";
const About = lazy(()=>import("../views/About"))
const User = lazy(()=>import("@/views/User"))
import {Navigate} from "react-router-dom";

// 懒加载模式需要添加loading 组件,外面需要加一层loading的提示组件

const withLoadingComponet =(comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)
const routes =[
    {
        path:"/",
        element:<Navigate to="/Home"/>

    },
        {
        path:"/home",
        element:<Home/>

    },
        {
        path:"/about",
        element: withLoadingComponet(<About/>)
    },
    {
        path:"/user",
        // element:<User/>
        element: withLoadingComponet(<User/>)
    }
]
export default routes