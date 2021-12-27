import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const SignUp = React.lazy(() => import('../pages/SignUp'));
const LandingPage = React.lazy(() => import('../pages/LandingPage'));
const Favourites = React.lazy(() => import('../pages/Favourites'));

export const privateRoute = [
    { title: "todo-list",component: Home,path:"/todo-list" },
    { title: "favourites",component: Favourites,path:"/favourites" }
]

export const publicRoute = [
    { title: "sign-up",component: SignUp ,path: "/sign-up" , restricted: true },
    { title: "landing-page",component: LandingPage ,path: "/" , restricted: false },
]