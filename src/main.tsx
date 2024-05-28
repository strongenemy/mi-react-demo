import ReactDOM from 'react-dom/client'
//import './index.css'
import "./index.scss"
import { ConfigProvider } from "antd"
import "dayjs/locale/zh-cn"
import zhCN from "antd/locale/zh_CN"
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <ConfigProvider locale={zhCN}>
     {/* <App /> */}
     {/* 路由绑定 */}
     <RouterProvider router={router}></RouterProvider>
  </ConfigProvider>
  //</React.StrictMode>,
)

