import React from 'react'
// import { Switch, Route, Router } from 'react-router-dom'
// import history from './history'
import * as pages from './pages/index'

const Routes = [
    {
        path: '/',
        exact: true,
        main: () => <pages.HomePage />
    },
    {
        path: '/products',
        exact: false,
        main: () => <pages.ProductsPage />
    },
    {
        path: '*',
        exact: false,
        main: () => <>Not Found</>
    }
]

// const Routes = () => (
//     <Router history={history}>
//         <Switch>
//             <Route exact={true} path="/" component={pages.HomePage} />
//             <Route exact={true} path="/products" component={pages.ProductsPage} />
//         </Switch>
//     </Router>
// )

export default Routes;