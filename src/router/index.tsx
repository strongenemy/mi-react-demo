import Layout from '../page/Layout'
import About from '../page/About'
import NotFound from '../page/NotFound'
import Fibonacci from '../page/Fibonacci'
import HorizontalCenter from '../page/HorizontalCenter'
import App from '../App'
import { createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // 设置为默认二级路由 一级路由访问的时候，它也能得到渲染
      {
        index: true,
        element: <App />
      },
      {
        path: 'fibonacci',
        element: <Fibonacci />
      },
      {
        path: 'horizontalcenter',
        element: < HorizontalCenter />
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