import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from '@hi-ui/hiui'
import { HomeOutlined } from "@hi-ui/icons"
import About from "../About"
import Fibonacci from '../Fibonacci'
import HorizontalCenter from '../HorizontalCenter'

const Menu = () => {
  const navigate = useNavigate()
  const linkData =[
        {
            id:0,
            icon: <HomeOutlined />,
          title: "首页",
          path: "/app",
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
          title: "css实现水平垂直居中",
          path: "/horizontalcenter",
        },
        
        {
            id:3,
          icon: <About />,
          title: "关于",
          path: "/about",
        },
      ]
      
    return (
        <div>
            {linkData.map((items)=>{
             return <Button onClick={() => navigate(`${items?.path}`)} key={items.id}>{items.title}</Button>
            })}
        </div>
    )
  }
  
  export default Menu