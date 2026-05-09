import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/index.vue'
import Modules from '../views/Modules.vue'
import Screening from '../views/Screening.vue'
import HiringManager from '../views/HiringManager.vue'
import Coding from '../views/Coding.vue'
import Negotiation from '../views/Negotiation.vue'
import GrcFrameworks from '../views/GrcFrameworks.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/modules', component: Modules },
	{ path: '/screening', component: Screening },
	{ path: '/hiring-manager', component: HiringManager },
	{ path: '/coding', component: Coding },
	{ path: '/negotiation', component: Negotiation },
	{ path: '/grc-frameworks', component: GrcFrameworks },
]

export default createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 }
	}
})
