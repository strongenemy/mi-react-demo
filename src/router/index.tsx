import type { RouteObject,} from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { lazy } from 'react';
 
 
// const routes: RouteObject[] = [
//   {
//     path: "/",
//     element: <Navigate to="/home" />,
//   },
//   {
//     path: '/404',
//     element: <NotFound />,
//   },
//   {
//     path: '/home',
//     element: <Home />,
 
//     // children: [
//     //     {
//     //         index : true,
//     //         element: <Home />
//     //     },
//     //     {
//     //         path: "/about",
//     //         element: <About />,
//     //         children: [
//     //             { index : true, element: <AboutIndex />},
//     //             { path : "/about/:id", element :<AboutList />}
//     //         ]
//     //     },
//     //     {
//     //         path: "/bussiness",
//     //         element: <Bussiness />,
//     //     }
//     // ]
//   },
// ];
 
// export default routes;