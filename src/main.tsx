import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import "dayjs/locale/zh-cn"
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  
     {/* <App /> */}
     {/* 路由绑定 */}
     <RouterProvider router={router}></RouterProvider>
  
  </React.StrictMode>,
)

