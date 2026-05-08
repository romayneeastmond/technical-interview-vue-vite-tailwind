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
	</div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
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
