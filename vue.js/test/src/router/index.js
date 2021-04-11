import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotBases from '../parts/RobotBases.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  },
  {
    path: '/parts/browse',
    name: 'Browse',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      }, {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms,
      }, {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos,
      }, {
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases,
      },
    ],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValid = Number.isInteger(Number(to.params.id));
      next(isValid);
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
