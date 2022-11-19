import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式放在最前
import "reset-css"
// UI 框架

// 全局
import "@/assets/style/global.scss"
// 组件样式
import App from './App'
import { BrowserRouter } from "react-router-dom"
// import Router from "@/router";
// import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
              <App />
      </BrowserRouter>

  </React.StrictMode>
)
