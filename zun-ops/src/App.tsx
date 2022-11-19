import React, { useState } from 'react'
// import Comp1 from "@/components/Comp1";
// import Comp2 from "@/components/Comp2";

// import {Button} from "antd";
// import {UpCircleOutlined} from "@ant-design/icons";
// import 'antd/dist/antd.css';  //or 'antd/dist/antd.less' 全部都引入
import { useRoutes,Link} from "react-router-dom"
import routes from "@/router";
function App() {
  const [count, setCount] = useState(0)
    const outlet = useRoutes(routes)
  return (
    <div className="App">
          {/*根项目*/}
       {/*<Button type="primary">我们的按钮</Button>*/}
       {/* <UpCircleOutlined style={{fontSize:'40px',color:'red'}}></UpCircleOutlined>*/}
       {/* { 占位符合组件，类似窗口，用来展示组件，有点像 vue router-view }*/}
       {/* <Link to="/home">Home</Link>*/}

       {/* <Link to="/about">about</Link>*/}
       {/*  <Link to="/user">user</Link>*/}
        {outlet}
    </div>
  )
}

export default App
