import About from '../views/About'
import NotFound from '../views/NotFound'
import Fibonacci from '../views/Fibonacci'
import Chat from '../views/Chat'
import ChatApp from '@/views/ChatApp'
import HorizontalCenter from '../views/HorizontalCenter'
import App from '../App'
import { createBrowserRouter} from 'react-router-dom'
import Home from '@/views/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // 设置为默认二级路由 一级路由访问的时候，它也能得到渲染
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'fibonacci',
        element: <Fibonacci />
      },
      {
        path: 'horizontalcenter',
        element: <HorizontalCenter />
      },
      {
        path: 'chat',
        element: <Chat />
      },
      {
        path: 'chatApp',
        element: <ChatApp />
      },
      {
        path: 'about',
        element: <About />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

console.log(router)

export default router