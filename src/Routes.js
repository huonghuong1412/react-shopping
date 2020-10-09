import React from 'react'
import About from './pages/AboutPage/About';
import CartPage from './pages/CartPage/CartPage';
import Contact from './pages/ContactPage/Contact';
// import { Switch, Route, Router } from 'react-router-dom'
// import history from './history'
import HomePage from './pages/HomePage/HomePage'
import InstructionBank from './pages/InstructionPage/InstructionBank';
import InstructionBuy from './pages/InstructionPage/InstructionBuy';
import InstructionPage from './pages/InstructionPage/InstructionPage';
import NotFound from './pages/NotFoundPage/NotFound';
import PolicyChange from './pages/PolicyPage/PolicyChange';
import PolicyGuarantee from './pages/PolicyPage/PolicyGuarantee';
import PolicyPayment from './pages/PolicyPage/PolicyPayment';
import PolicySecurity from './pages/PolicyPage/PolicySecurity';
import PolicyShip from './pages/PolicyPage/PolicyShip';
import ProductsPage from './pages/ProductsPage/ProductsPage'
import Change from './pages/UserPage/Change';
import Login from './pages/UserPage/Login';
import Register from './pages/UserPage/Register';
import User from './pages/UserPage/User';

const Routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products',
        exact: true,
        main: () => <ProductsPage />
    },
    {
        path: '/collections/:category',
        exact: false,
        main: ({ match, location }) => <ProductsPage match={match} location={location} />
    },
    {
        path: '/products/:id',
        exact: false,
        main: () => <CartPage />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartPage />
    },
    {
        path: '/pages/huong-dan',
        exact: false,
        main: () => <InstructionPage />
    },
    {
        path: '/pages/tai-khoan-ngan-hang',
        exact: false,
        main: () => <InstructionBank />
    },
    {
        path: '/pages/huong-dan-mua-hang',
        exact: false,
        main: () => <InstructionBuy />
    },
    {
        path: '/pages/chinh-sach-van-chuyen',
        exact: false,
        main: () => <PolicyShip />
    },
    {
        path: '/pages/chinh-sach-doi-tra',
        exact: false,
        main: () => <PolicyChange />
    },
    {
        path: '/pages/chinh-sach-thanh-toan',
        exact: false,
        main: () => <PolicyPayment />
    },
    {
        path: '/pages/chinh-sach-bao-mat',
        exact: false,
        main: () => <PolicySecurity />
    },
    {
        path: '/pages/chinh-sach-bao-hanh',
        exact: false,
        main: () => <PolicyGuarantee />
    },
    {
        path: '/pages/about-us',
        exact: false,
        main: () => <About />
    },
    {
        path: '/account',
        exact: true,
        main: ({ history }) => <User history={history} />
    },
    {
        path: '/account/register',
        exact: false,
        main: ({ history, location }) => <Register history={history} location={location} />
    },
    {
        path: '/account/login',
        exact: false,
        main: ({ history, location }) => <Login history={history} location={location} />
    },
    {
        path: '/account/change',
        exact: false,
        main: ({ history }) => <Change history={history} />
    },
    {
        path: '/pages/lien-he',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/pages/lien-he',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '*',
        exact: false,
        main: () => <NotFound />
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