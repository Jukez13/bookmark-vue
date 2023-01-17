import Vue from 'vue';
import Router from 'vue-router';

import StoredResources from '../StoredResources.vue';
import AddResources from '../AddResources.vue';


Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [{
        path: '/viewsources',
        name: 'StoredResources',
        component: StoredResources,
    }, {
        path: '/addnewresource',
        name: 'AddResources',
        component: AddResources,
    },
    ],
});

router.beforeEach((to, from, next) => {
    console.log('===>Before each router');
    next(true);
});

export default router;