import Header from "../templates/Header";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Character from "../pages/Character";
import getHash from "../utils/getHash";
import resolveRoutes from "../templates/resolveRoutes";

const URLactual = window.location;

const routes = {
    'https://nrmanperez.github.io/SPA-project-platzi/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.querySelector('#header');
    const content = null || document.querySelector('#content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
}

export default router;