<template>
	<div class="app-shell">
		<TheHeader />
		<main class="app-main">
			<router-view v-slot="{ Component }">
				<transition name="page" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</main>
		<footer class="site-footer">
			<div class="page-container footer-inner">
				<div class="footer-brand">
					<span class="footer-logo-mark">IP</span>
					<span class="footer-copy">
						Interview<em>Prep</em> — A structured guide to landing your next role.
					</span>
				</div>
				<span class="footer-year">© {{ new Date().getFullYear() }}</span>
			</div>
		</footer>

		<Transition name="btt">
			<button v-if="showBtt" class="back-to-top" @click="scrollTop" aria-label="Back to top">
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
					<path d="M9 14V4M4 9l5-5 5 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
		</Transition>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TheHeader from './components/TheHeader.vue'

const showBtt = ref(false)

function onScroll() {
	showBtt.value = window.scrollY > 400
}

function scrollTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style>
.app-shell {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

.app-main {
	flex: 1;
}

.site-footer {
	margin-top: 6rem;
	border-top: 1px solid var(--cream-border);
	padding: 1.75rem 0;
}

.footer-inner {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.footer-brand {
	display: flex;
	align-items: center;
	gap: 0.75rem;
}

.footer-logo-mark {
	width: 26px;
	height: 26px;
	background: var(--navy);
	color: var(--gold);
	font-family: var(--font-display);
	font-weight: 700;
	font-size: 0.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
}

.footer-copy {
	font-family: var(--font-display);
	font-size: 0.95rem;
	color: var(--muted);
}

.footer-copy em {
	font-style: italic;
}

.footer-year {
	font-size: 0.8rem;
	color: var(--muted-light);
}

/* Back to top */
.back-to-top {
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	z-index: 200;
	width: 44px;
	height: 44px;
	border-radius: 50%;
	background: var(--navy);
	color: var(--gold-light);
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 20px rgba(15, 27, 53, 0.3);
	transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}

.back-to-top:hover {
	background: var(--navy-light);
	transform: translateY(-3px);
	box-shadow: 0 8px 28px rgba(15, 27, 53, 0.35);
}

.back-to-top:active {
	transform: translateY(0);
}

.btt-enter-active,
.btt-leave-active {
	transition: opacity 0.25s ease, transform 0.25s ease;
}

.btt-enter-from,
.btt-leave-to {
	opacity: 0;
	transform: translateY(12px);
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
	transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-enter-from {
	opacity: 0;
	transform: translateY(10px);
}

.page-leave-to {
	opacity: 0;
	transform: translateY(-6px);
}
</style>
