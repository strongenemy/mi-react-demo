import React from "react"
import { useNavigate } from "react-router-dom"
import './index.scss'
import { ButtonGroup, Button } from "@hi-ui/button"
import { HomeOutlined } from "@hi-ui/icons"
import Fibonacci from '../Fibonacci'
import HorizontalCenter from '../HorizontalCenter'
import Todos_with_Undo from '../Todos_with_Undo'
import ChatApp from '../ChatApp'

const Menu = () => {
  const navigate = useNavigate()
  const linkData =[
        {
            id:0,
            icon: <HomeOutlined />,
          title: "首页",
          path: "/home",
        },
        {
            id:1,
          icon: <Fibonacci />,
          title: "斐波那契",
          path: "/fibonacci",
        },
        {
            id:2,
          icon: <HorizontalCenter />,
          title: "css水平垂直居中",
          path: "/horizontalcenter",
        },
        {
            id:3,
          icon: <ChatApp />,
          title: "微信群聊",
          path: "/chatApp",
        },
        {
          id:4,
          icon: <Todos_with_Undo />,
          title: "待办事项",
          path: "/Todos_with_Undo",
        },
      ]
    return (
        <div className="menu">
             <ButtonGroup style={{ marginRight: 20 }}>
            {linkData.map((items)=>{
             return <Button type="primary" onClick={() => navigate(`${items?.path}`)} key={items.id}>{items.title}</Button>
            })}
             </ButtonGroup>
        </div>
    )
  }
  export default Menu