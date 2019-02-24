import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Login from '../components/login'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
    if (!localStorage.getItem('authToken')) {
        next()
        return
    }
    next('/')
}

const ifAuthenticated = (to, from, next) => {
    if (localStorage.getItem('authToken')) {
        next()
        return
    }
    next('/login')
}

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            beforeEnter: ifAuthenticated,
        },
        // {
        //     path: '/account',
        //     name: 'Account',
        //     component: Account,
        //     beforeEnter: ifAuthenticated,
        // },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            beforeEnter: ifNotAuthenticated,
        },
    ],
})