<template>
	<header class="site-header" :class="{ 'menu-open': menuOpen }">
		<div class="header-inner page-container">
			<router-link to="/" class="logo" @click="menuOpen = false">
				<span class="logo-mark">IP</span>
				<span class="logo-text">Interview<em>Prep</em></span>
			</router-link>

			<nav class="main-nav">
				<router-link to="/screening" class="nav-link" :class="{ active: $route.path === '/screening' }">
					<span class="nav-num">01</span> Screening
				</router-link>
				<router-link to="/hiring-manager" class="nav-link" :class="{ active: $route.path === '/hiring-manager' }">
					<span class="nav-num">02</span> Manager Round
				</router-link>
				<router-link to="/coding" class="nav-link" :class="{ active: $route.path === '/coding' }">
					<span class="nav-num">03</span> Technical
				</router-link>
				<router-link to="/negotiation" class="nav-link" :class="{ active: $route.path === '/negotiation' }">
					<span class="nav-num">04</span> Offer & Negotiation
				</router-link>
			</nav>

			<div class="header-cta">
				<span class="progress-label">Progress</span>
				<div class="progress-pips">
					<span class="pip" :class="{ done: $route.path === '/screening' || $route.path === '/hiring-manager' || $route.path === '/coding' || $route.path === '/negotiation' }"></span>
					<span class="pip" :class="{ done: $route.path === '/hiring-manager' || $route.path === '/coding' || $route.path === '/negotiation' }"></span>
					<span class="pip" :class="{ done: $route.path === '/coding' || $route.path === '/negotiation' }"></span>
					<span class="pip" :class="{ done: $route.path === '/negotiation' }"></span>
				</div>
			</div>

			<button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>

		<div class="mobile-drawer" :class="{ open: menuOpen }">
			<nav class="mobile-nav">
				<router-link to="/screening" class="mobile-nav-link" :class="{ active: $route.path === '/screening' }" @click="menuOpen = false">
					<span class="nav-num">01</span> Screening
				</router-link>
				<router-link to="/hiring-manager" class="mobile-nav-link" :class="{ active: $route.path === '/hiring-manager' }" @click="menuOpen = false">
					<span class="nav-num">02</span> Manager Round
				</router-link>
				<router-link to="/coding" class="mobile-nav-link" :class="{ active: $route.path === '/coding' }" @click="menuOpen = false">
					<span class="nav-num">03</span> Technical
				</router-link>
				<router-link to="/negotiation" class="mobile-nav-link" :class="{ active: $route.path === '/negotiation' }" @click="menuOpen = false">
					<span class="nav-num">04</span> Offer & Negotiation
				</router-link>
			</nav>
			<div class="mobile-progress">
				<span class="progress-label">Progress</span>
				<div class="progress-pips">
					<span class="pip" :class="{ done: $route.path === '/screening' || $route.path === '/hiring-manager' || $route.path === '/coding' || $route.path === '/negotiation' }"></span>
					<span class="pip" :class="{ done: $route.path === '/hiring-manager' || $route.path === '/coding' || $route.path === '/negotiation' }"></span>
					<span class="pip" :class="{ done: $route.path === '/coding' || $route.path === '/negotiation' }"></span>
					<span class="pip" :class="{ done: $route.path === '/negotiation' }"></span>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const $route = useRoute()
const menuOpen = ref(false)

watch(() => $route.path, () => { menuOpen.value = false })
</script>

<style scoped>
.site-header {
	position: sticky;
	top: 0;
	z-index: 100;
	background: rgba(250, 250, 247, 0.94);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	border-bottom: 1px solid var(--cream-border);
	height: 68px;
}

.header-inner {
	display: flex;
	align-items: center;
	height: 100%;
	gap: 2.5rem;
}

.logo {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	text-decoration: none;
	flex-shrink: 0;
}

.logo-mark {
	width: 34px;
	height: 34px;
	background: var(--navy);
	color: var(--gold);
	font-family: var(--font-display);
	font-weight: 700;
	font-size: 0.95rem;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 0.05em;
}

.logo-text {
	font-family: var(--font-display);
	font-size: 1.1rem;
	font-weight: 600;
	color: var(--navy);
	letter-spacing: -0.01em;
}

.logo-text em {
	font-style: italic;
	font-weight: 300;
	color: var(--muted);
}

.main-nav {
	display: flex;
	align-items: center;
	gap: 0.25rem;
	flex: 1;
}

.nav-link {
	display: flex;
	align-items: center;
	gap: 0.4rem;
	padding: 0.375rem 0.875rem;
	font-size: 0.85rem;
	font-weight: 500;
	color: var(--muted);
	border-radius: 100px;
	transition: color 0.15s, background 0.15s;
	white-space: nowrap;
	text-decoration: none;
}

.nav-link:hover {
	color: var(--navy);
	background: var(--cream-dark);
}

.nav-link.active {
	color: var(--navy);
	background: var(--gold-pale);
	font-weight: 600;
}

.nav-link.active .nav-num {
	color: var(--gold);
}

.nav-num {
	font-family: var(--font-display);
	font-size: 0.75rem;
	color: var(--cream-border);
	font-weight: 400;
	transition: color 0.15s;
}

.header-cta {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0.25rem;
	flex-shrink: 0;
}

.progress-label {
	font-size: 0.65rem;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: var(--muted-light);
	font-weight: 500;
}

.progress-pips {
	display: flex;
	gap: 4px;
}

.pip {
	width: 20px;
	height: 4px;
	border-radius: 2px;
	background: var(--cream-border);
	transition: background 0.2s;
}

.pip.done {
	background: var(--gold);
}

/* Hamburger button */
.hamburger {
	display: none;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
	width: 36px;
	height: 36px;
	padding: 6px;
	background: none;
	border: none;
	cursor: pointer;
	margin-left: auto;
	flex-shrink: 0;
}

.hamburger span {
	display: block;
	width: 100%;
	height: 2px;
	background: var(--navy);
	border-radius: 2px;
	transition: transform 0.25s ease, opacity 0.25s ease;
	transform-origin: center;
}

.hamburger.open span:nth-child(1) {
	transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
	opacity: 0;
	transform: scaleX(0);
}

.hamburger.open span:nth-child(3) {
	transform: translateY(-7px) rotate(-45deg);
}

/* Mobile drawer */
.mobile-drawer {
	display: none;
	overflow: hidden;
	max-height: 0;
	transition: max-height 0.3s ease;
	background: rgba(250, 250, 247, 0.98);
	border-top: 1px solid var(--cream-border);
}

.mobile-drawer.open {
	max-height: 320px;
}

.mobile-nav {
	display: flex;
	flex-direction: column;
	padding: 0.5rem 1rem;
}

.mobile-nav-link {
	display: flex;
	align-items: center;
	gap: 0.6rem;
	padding: 0.85rem 0.5rem;
	font-size: 0.95rem;
	font-weight: 500;
	color: var(--muted);
	text-decoration: none;
	border-bottom: 1px solid var(--cream-border);
	transition: color 0.15s;
}

.mobile-nav-link:last-child {
	border-bottom: none;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
	color: var(--navy);
}

.mobile-nav-link.active .nav-num {
	color: var(--gold);
}

.mobile-progress {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	padding: 0.75rem 1.5rem 1rem;
	border-top: 1px solid var(--cream-border);
}

@media (max-width: 800px) {
	.main-nav {
		display: none;
	}

	.header-cta {
		display: none;
	}

	.hamburger {
		display: flex;
	}

	.mobile-drawer {
		display: block;
	}
}
</style>
