//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//import './index.css'
import "./index.scss"
import { ConfigProvider } from "antd"
import "dayjs/locale/zh-cn"
import zhCN from "antd/locale/zh_CN"


ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <ConfigProvider locale={zhCN}>
     <App />
  </ConfigProvider>
  //</React.StrictMode>,
)

