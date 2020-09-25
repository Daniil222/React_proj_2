import MoviePage from './pages/moviePage';
import MainPage from './pages/mainPage';
import LoginPage from './pages/loginPage';

const root_routes = [
    {
        path: "/",
        component: MainPage,
        exact: true
    },
    {
        path: "/movies",
        component: MoviePage,
        exact: true
    },
    {
        path: "/login",
        component: LoginPage,
        exact: true
    }
];


export default root_routes;
