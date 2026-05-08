<template>
	<div class="view-page">
		<div class="page-container">

			<!-- Header -->
			<div class="page-header animate-fade-up anim-d1">
				<p class="eyebrow"><span></span>All Modules</p>
				<h1>Your Interview Pipeline</h1>
				<p>Four stages. Each one is a filter. Work through them in order — every module builds on the last.</p>
			</div>

			<!-- Interview date countdown -->
			<div class="countdown-bar animate-fade-up anim-d2">
				<div class="countdown-left">
					<span class="countdown-icon">📅</span>
					<div>
						<div class="countdown-label">Interview date</div>
						<div class="countdown-value" v-if="daysUntil !== null">
							<template v-if="daysUntil > 0">
								<strong>{{ daysUntil }} days</strong> to prepare
							</template>
							<template v-else-if="daysUntil === 0">
								<strong>Today.</strong> You've got this.
							</template>
							<template v-else>
								<strong>{{ Math.abs(daysUntil) }} days ago</strong> — how did it go?
							</template>
						</div>
						<div class="countdown-value" v-else>Set a date to track your prep time</div>
					</div>
				</div>
				<div class="countdown-right">
					<input type="date" class="date-input" v-model="interviewDate" :min="today" />
				</div>
			</div>

			<!-- Overall progress -->
			<div class="progress-section animate-fade-up anim-d2">
				<div class="progress-header">
					<span class="section-label" style="margin-bottom: 0;">Module completion</span>
					<span class="progress-fraction">{{ completedCount }} / {{ modules.length }} complete</span>
				</div>
				<div class="progress-track">
					<div class="progress-fill" :style="{ width: completedPct + '%' }"></div>
				</div>
			</div>

			<!-- Module cards -->
			<div class="modules-list animate-fade-up anim-d3">
				<div class="module-row" v-for="(mod, i) in modules" :key="mod.route">
					<div class="module-row-inner" :class="{ completed: mod.completed }">

						<!-- Left: number + status -->
						<div class="module-aside">
							<div class="module-big-num">{{ String(i + 1).padStart(2, '0') }}</div>
							<button class="complete-btn" :class="{ done: mod.completed }" @click="mod.completed = !mod.completed" :title="mod.completed ? 'Mark incomplete' : 'Mark complete'">
								<span v-if="mod.completed">✓</span>
								<span v-else>○</span>
							</button>
						</div>

						<!-- Center: content -->
						<div class="module-content">
							<div class="module-top-row">
								<span class="badge" :class="mod.badgeClass">{{ mod.tag }}</span>
								<span class="module-time">⏱ {{ mod.time }}</span>
							</div>
							<h2 class="module-title">{{ mod.title }}</h2>
							<p class="module-desc">{{ mod.desc }}</p>

							<div class="topic-columns">
								<div class="topic-col" v-for="(col, ci) in mod.topicCols" :key="ci">
									<div class="topic-col-label">{{ col.label }}</div>
									<ul class="topic-list">
										<li v-for="t in col.topics" :key="t">{{ t }}</li>
									</ul>
								</div>
							</div>
						</div>

						<!-- Right: CTA -->
						<div class="module-cta-col">
							<router-link :to="mod.route" class="enter-btn">
								Enter Module
								<span class="enter-arrow">→</span>
							</router-link>
							<div class="module-status-text" v-if="mod.completed">Reviewed ✓</div>
							<div class="module-status-text muted" v-else>Not started</div>
						</div>

					</div>

					<!-- Connector line -->
					<div class="connector" v-if="i < modules.length - 1">
						<div class="connector-line"></div>
					</div>
				</div>
			</div>

			<!-- Bottom tip -->
			<div class="tip-box gold animate-fade-up anim-d4" style="margin-top: 1rem;">
				<span class="tip-icon">🗓️</span>
				<div>
					<strong>Suggested schedule:</strong> Spend 1–2 days on each module. Do Screening and Manager Round first — behavioral prep compounds across all stages. Save Negotiation for when you have an offer in hand.
				</div>
			</div>

		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'

const today = new Date().toISOString().split('T')[0]
const interviewDate = ref('')

const daysUntil = computed(() => {
	if (!interviewDate.value) return null
	const diff = new Date(interviewDate.value) - new Date(today)
	return Math.round(diff / (1000 * 60 * 60 * 24))
})

const modules = ref([
	{
		route: '/screening',
		tag: 'Recruiter Screen',
		badgeClass: 'badge-gold',
		time: '30–45 min read',
		title: 'Screening Round',
		desc: 'The recruiter screen is a filter, not a deep evaluation. Your goal is simple: advance. Master your 60-second pitch, handle salary questions without anchoring low, and leave the recruiter confident in passing you along.',
		completed: false,
		topicCols: [
			{
				label: 'Core Skills',
				topics: ['Your 60-second pitch', 'The STAR method', 'Salary anchoring strategy', 'Handling "why are you leaving?"'],
			},
			{
				label: 'Preparation',
				topics: ['Pre-call research checklist', 'Questions to ask the recruiter', 'Compensation benchmarking', 'Red flags to avoid'],
			},
		],
	},
	{
		route: '/hiring-manager',
		tag: 'Behavioral',
		badgeClass: 'badge-navy',
		time: '45–60 min read',
		title: 'Manager Round',
		desc: 'The hiring manager is evaluating trust and fit. They need someone who takes ownership, resolves conflict maturely, and communicates clearly. Build a bank of 8 versatile career stories and you\'ll have an answer for every question.',
		completed: false,
		topicCols: [
			{
				label: 'Your Story Bank',
				topics: ['8 STAR story archetypes', 'Leadership & influence', 'Conflict & resolution', 'Failure & growth'],
			},
			{
				label: 'Interview Strategy',
				topics: ['Tabbed Q&A by category', 'Green flags vs. red flags', 'Questions for your manager', 'Answer timing & structure'],
			},
		],
	},
	{
		route: '/coding',
		tag: 'Technical',
		badgeClass: 'badge-green',
		time: '60–90 min read',
		title: 'Technical Interview',
		desc: 'Technical interviews test problem-solving communication as much as coding ability. A well-narrated O(n²) solution beats a silent optimal one. Learn the UMPIRE framework, master 5 core algorithm patterns, and know the system design fundamentals cold.',
		completed: false,
		topicCols: [
			{
				label: 'Coding Interviews',
				topics: ['UMPIRE problem-solving method', 'Two Pointers & Sliding Window', 'BFS/DFS & Dynamic Programming', 'Binary Search patterns'],
			},
			{
				label: 'System Design',
				topics: ['5-step design framework', 'Scale estimation', 'Bottleneck analysis', 'Live coding etiquette'],
			},
		],
	},
	{
		route: '/negotiation',
		tag: 'Offer Stage',
		badgeClass: 'badge-gold',
		time: '30–45 min read',
		title: 'Offer & Negotiation',
		desc: 'Most candidates accept the first number they\'re given. Don\'t. Every hiring manager expects negotiation — it\'s built into the process. Learn word-for-word scripts for every scenario, how to use competing offers ethically, and how to read equity packages.',
		completed: false,
		topicCols: [
			{
				label: 'Compensation',
				topics: ['Total comp breakdown', 'Salary counter-offer scripts', 'Equity & RSU guide', 'Signing bonus tactics'],
			},
			{
				label: 'Strategy',
				topics: ['Leveraging competing offers', 'When they say "best & final"', 'Pre-signing checklist', 'Offer evaluation framework'],
			},
		],
	},
])

const completedCount = computed(() => modules.value.filter(m => m.completed).length)
const completedPct = computed(() => (completedCount.value / modules.value.length) * 100)
</script>

<style scoped>
.view-page {
	padding-bottom: 5rem;
}

/* Countdown */
.countdown-bar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.5rem;
	background: var(--white);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	padding: 1.25rem 1.75rem;
	margin-bottom: 2rem;
	box-shadow: var(--shadow-sm);
}

.countdown-left {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.countdown-icon {
	font-size: 1.5rem;
}

.countdown-label {
	font-size: 0.7rem;
	font-weight: 600;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: var(--muted-light);
	margin-bottom: 0.2rem;
}

.countdown-value {
	font-size: 0.975rem;
	color: var(--charcoal);
}

.countdown-value strong {
	color: var(--navy);
	font-weight: 700;
}

.date-input {
	padding: 0.5rem 0.875rem;
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	font-family: var(--font-body);
	font-size: 0.875rem;
	color: var(--charcoal);
	background: var(--cream);
	cursor: pointer;
	outline: none;
	transition: border-color 0.15s;
}

.date-input:focus {
	border-color: var(--gold);
}

/* Progress */
.progress-section {
	margin-bottom: 2.5rem;
}

.progress-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 0.625rem;
}

.progress-fraction {
	font-size: 0.8rem;
	font-weight: 600;
	color: var(--muted);
}

.progress-track {
	height: 5px;
	background: var(--cream-border);
	border-radius: 3px;
	overflow: hidden;
}

.progress-fill {
	height: 100%;
	background: var(--gold);
	border-radius: 3px;
	transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Module list */
.modules-list {
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
}

.module-row-inner {
	display: grid;
	grid-template-columns: 80px 1fr 160px;
	gap: 2rem;
	align-items: start;
	background: var(--white);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	padding: 2rem;
	box-shadow: var(--shadow-sm);
	transition: box-shadow 0.2s, border-color 0.2s;
}

.module-row-inner:hover {
	box-shadow: var(--shadow-md);
	border-color: var(--gold-light);
}

.module-row-inner.completed {
	border-color: #9ECDB6;
	background: var(--green-light);
}

.connector {
	display: flex;
	justify-content: center;
	height: 2rem;
	align-items: center;
}

.connector-line {
	width: 1.5px;
	height: 100%;
	background: var(--cream-border);
}

/* Aside */
.module-aside {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.75rem;
	padding-top: 0.25rem;
}

.module-big-num {
	font-family: var(--font-display);
	font-size: 2.5rem;
	color: var(--cream-border);
	line-height: 1;
	font-weight: 400;
}

.complete-btn {
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	border: 2px solid var(--cream-border);
	background: transparent;
	cursor: pointer;
	font-size: 0.875rem;
	color: var(--muted-light);
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.15s;
	font-family: var(--font-body);
}

.complete-btn:hover {
	border-color: var(--green);
	color: var(--green);
}

.complete-btn.done {
	background: var(--green);
	border-color: var(--green);
	color: white;
	font-size: 0.75rem;
}

/* Content */
.module-top-row {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	margin-bottom: 0.625rem;
}

.module-time {
	font-size: 0.75rem;
	color: var(--muted-light);
	font-weight: 500;
}

.module-title {
	font-size: 1.6rem;
	font-weight: 400;
	letter-spacing: -0.02em;
	margin-bottom: 0.625rem;
}

.module-desc {
	font-size: 0.9rem;
	color: var(--muted);
	line-height: 1.7;
	max-width: 60ch;
	margin-bottom: 1.5rem;
}

.topic-columns {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.5rem;
}

.topic-col-label {
	font-size: 0.68rem;
	font-weight: 600;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: var(--muted-light);
	margin-bottom: 0.5rem;
}

.topic-list {
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
}

.topic-list li {
	font-size: 0.85rem;
	color: var(--charcoal);
	display: flex;
	align-items: center;
	gap: 0.5rem;
	line-height: 1.4;
}

.topic-list li::before {
	content: '–';
	color: var(--gold);
	font-weight: 700;
	flex-shrink: 0;
}

/* CTA col */
.module-cta-col {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0.625rem;
	padding-top: 0.25rem;
}

.enter-btn {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.75rem 1.25rem;
	background: var(--navy);
	color: var(--gold-light);
	font-size: 0.875rem;
	font-weight: 600;
	border-radius: var(--radius);
	text-decoration: none;
	white-space: nowrap;
	transition: background 0.15s, transform 0.15s;
}

.enter-btn:hover {
	background: var(--navy-light);
	transform: translateY(-1px);
}

.enter-arrow {
	transition: transform 0.15s;
}

.enter-btn:hover .enter-arrow {
	transform: translateX(3px);
}

.module-status-text {
	font-size: 0.75rem;
	font-weight: 600;
	color: var(--green);
	text-align: right;
}

.module-status-text.muted {
	color: var(--muted-light);
	font-weight: 400;
}

@media (max-width: 800px) {
	.module-row-inner {
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}

	.module-aside {
		flex-direction: row;
		align-items: center;
	}

	.module-cta-col {
		align-items: flex-start;
	}

	.topic-columns {
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.countdown-bar {
		flex-direction: column;
		align-items: flex-start;
	}
}
</style>
