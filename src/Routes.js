import React from 'react'
import CartPage from './pages/CartPage/CartPage';
// import { Switch, Route, Router } from 'react-router-dom'
// import history from './history'
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'

const Routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products',
        exact: false,
        main: () => <ProductsPage />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartPage />
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