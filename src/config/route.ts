import Friend from "../pages/Friend.vue";
import Home from "../pages/Home.vue";
import User from "../pages/User.vue";
import Search from "../pages/Search.vue";
import Edit from "../pages/Edit.vue";
import UserList from "../pages/UserList.vue";
import Login from "../pages/Login.vue";

export const routes = [
    { path: '/', component: Home },
    { path: '/friend', component: Friend },
    { path: '/user', component: User},
    { path: '/search', component: Search},
    { path: '/edit', component: Edit},
    { path: '/userList', component: UserList},
    { path: '/login', component: Login }
]