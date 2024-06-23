import React from "react"
import { Link, useNavigate } from "react-router-dom"
import './index.scss'
import { ButtonGroup, Button } from "@hi-ui/button"
import { HomeOutlined } from "@hi-ui/icons"
import About from "../About"
import Fibonacci from '../Fibonacci'
import HorizontalCenter from '../HorizontalCenter'
import Chat from '../Chat'
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
          icon: <Chat />,
          title: "微信群聊",
          path: "/chat",
        },
        {
            id:4,
          icon: <ChatApp />,
          title: "消息列表",
          path: "/chatApp",
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