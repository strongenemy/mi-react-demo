import {  Outlet } from "react-router-dom"
import Menu from "../menu"

const Layout = () => {
  return (
    <div>
      <Menu />
      {/* 配置二级路由的出口 */}
      <Outlet />
    </div>
  )
}

export default Layout