<template>
	<div class="view-page">
		<div class="page-container">
			<!-- Header -->
			<div class="page-header animate-fade-up anim-d1">
				<p class="eyebrow"><span></span>Module 01 — Recruiter Screen</p>
				<h1>Screening Round</h1>
				<p>The recruiter screen is a filter, not an evaluation. They're checking for salary alignment, communication clarity, and baseline fit — not depth of knowledge. Your job: advance to the next round every time.</p>
			</div>

			<!-- Tip banner -->
			<div class="tip-box gold animate-fade-up anim-d2" style="margin-bottom: 3rem;">
				<span class="tip-icon">💡</span>
				<div>
					<strong>The recruiter's hidden agenda:</strong> They need to fill a role and look good doing it. Every question is ultimately asking "Will this person embarrass me if I pass them along?" Frame your answers to make their decision easy.
				</div>
			</div>

			<!-- STAR Method -->
			<div class="animate-fade-up anim-d2" style="margin-bottom: 3rem;">
				<div class="section-label">Answer Framework</div>
				<div class="card" style="margin-bottom: 1rem;">
					<h3 style="font-size: 1.4rem; margin-bottom: 0.5rem;">The STAR Method</h3>
					<p style="color: var(--muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Use this structure for every behavioral answer. Aim for 90 seconds — long enough to show substance, short enough to hold attention.</p>
					<div class="star-grid">
						<div class="star-cell" v-for="s in star" :key="s.letter">
							<div class="star-letter">{{ s.letter }}</div>
							<h4>{{ s.label }}</h4>
							<p>{{ s.desc }}</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Key Questions -->
			<div class="animate-fade-up anim-d3">
				<div class="section-label">The 6 Screening Questions That Matter Most</div>
				<div class="qa-list">
					<div class="qa-block" v-for="(q, i) in questions" :key="i">
						<div class="qa-question" @click="toggle(i)">
							<span>{{ q.q }}</span>
							<span class="qa-toggle">{{ open === i ? '−' : '+' }}</span>
						</div>
						<div class="qa-answer" v-show="open === i">
							<p>{{ q.why }}</p>
							<div class="example-label">Sample Answer Framework</div>
							<div class="example-block">{{ q.answer }}</div>
							<div v-if="q.avoid" class="tip-box red" style="margin-top: 1rem;">
								<span class="tip-icon">⚠️</span>
								<div><strong>Avoid:</strong> {{ q.avoid }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Research Checklist -->
			<div class="two-col-section animate-fade-up anim-d4">
				<div class="card">
					<h3 style="font-size: 1.3rem; margin-bottom: 0.375rem;">Pre-Call Research</h3>
					<p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 1.25rem;">Do this before every recruiter call.</p>
					<ul class="checklist">
						<li>Read the full job description — note 3 key requirements</li>
						<li>Review the company's About page & recent news</li>
						<li>Find the recruiter on LinkedIn before the call</li>
						<li>Know the company's business model and revenue sources</li>
						<li>Identify 2–3 reasons why this role specifically excites you</li>
						<li>Have your resume open and visible during the call</li>
						<li>Test audio/video 15 min before</li>
					</ul>
				</div>

				<div class="card">
					<h3 style="font-size: 1.3rem; margin-bottom: 0.375rem;">Questions to Ask the Recruiter</h3>
					<p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 1.25rem;">These signal that you're senior, thoughtful, and serious.</p>
					<ul class="checklist">
						<li>What does the interview process look like from here?</li>
						<li>Who would I be working most closely with?</li>
						<li>What is the team's biggest challenge right now?</li>
						<li>What does success look like in the first 90 days?</li>
						<li>Why is this role open — growth or backfill?</li>
						<li>What's the timeline for making a decision?</li>
					</ul>
				</div>
			</div>

			<!-- Salary Strategy -->
			<div class="salary-block animate-fade-up anim-d5">
				<div class="section-label">Compensation Strategy</div>
				<div class="card">
					<h3 style="font-size: 1.3rem; margin-bottom: 0.75rem;">Handling "What are your salary expectations?"</h3>
					<p style="color: var(--muted); font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
						This question comes up in nearly every screening call. The recruiter usually has a budget. Your goal is to get them to reveal their number first — but have a researched range ready if pressed.
					</p>
					<div class="salary-scripts">
						<div class="script-block" v-for="s in salaryScripts" :key="s.label">
							<div class="script-label">{{ s.label }}</div>
							<div class="example-block">{{ s.script }}</div>
						</div>
					</div>
					<div class="tip-box green" style="margin-top: 1.5rem;">
						<span class="tip-icon">📊</span>
						<div>Research salary ranges on <strong>Levels.fyi</strong>, <strong>Glassdoor</strong>, and <strong>LinkedIn Salary</strong> before any screening call. Know your target number, your walk-away number, and the market range.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(null)
const toggle = (i) => { open.value = open.value === i ? null : i }

const star = [
	{ letter: 'S', label: 'Situation', desc: 'Set the scene. One sentence. The context — your role, company, timeframe.' },
	{ letter: 'T', label: 'Task', desc: 'What were you specifically responsible for? What was the challenge or goal?' },
	{ letter: 'A', label: 'Action', desc: 'What did YOU do? Use "I", not "we". Be specific about your decisions.' },
	{ letter: 'R', label: 'Result', desc: 'Quantify the outcome. Revenue, time saved, team size, NPS — use numbers.' },
]

const questions = [
	{
		q: '"Tell me about yourself."',
		why: 'This is your 90-second pitch. The recruiter wants to know: who are you, what have you done, and why are you here? Structure it as: current role → key achievements → why you\'re looking → why this company.',
		answer: '"I\'m a senior software engineer with 6 years of experience building scalable backend systems, most recently at Acme Corp where I led a team of 4 to reduce our API latency by 40%. I\'m looking for a new challenge at a company where I can work on higher-impact infrastructure problems — and [Company] caught my attention because of [specific reason]. I\'d love to tell you more about that."',
		avoid: 'Don\'t start with "I was born in..." or recap your entire resume chronologically.'
	},
	{
		q: '"Why are you looking to leave your current role?"',
		why: 'They\'re screening for red flags — were you fired, are you toxic, are you a flight risk? Always frame it as moving toward something, not away from something. Never badmouth your current employer.',
		answer: '"I\'ve had a great run at [Company] and learned a lot, but I\'ve hit a ceiling in terms of scope and growth. The team\'s direction is moving away from the infrastructure challenges I\'m most excited about. I\'m ready for a role where I can take on more ownership and work on problems at a larger scale."',
		avoid: 'Never say: "My boss is terrible", "The pay is awful", "It\'s toxic there."'
	},
	{
		q: '"What do you know about our company?"',
		why: 'They\'re checking if you did basic homework. This is a pass/fail filter. Know 3 things: what they do, how they make money, and one recent development (news, product launch, blog post).',
		answer: '"From what I\'ve read, [Company] is building [product/service] primarily for [customer segment]. I noticed you recently [launched X / raised Series B / expanded to EU] — which makes the [role] particularly interesting to me because [specific reason]. I also read your engineering blog post on [topic] and it aligned with how I think about [related problem]."',
		avoid: 'Don\'t just say "You seem like a cool company." Read their website.'
	},
	{
		q: '"What are your salary expectations?"',
		why: 'The person who names a number first loses negotiating power. Try to flip the question back, or give a researched range with the top end of your range in the middle of what you\'d accept.',
		answer: '"I\'m flexible and want to make sure we\'re a good fit before getting into specifics. Could you share what the budgeted range for this role is? That said, based on my research and experience level, I\'d expect something in the $X–$Y range — but I\'m open to the total package."',
		avoid: 'Don\'t give a number without knowing their range. Don\'t undersell yourself.'
	},
	{
		q: '"What are your biggest strengths?"',
		why: 'Pick 2–3 strengths directly relevant to the role. Back each one with a brief, specific example. This isn\'t the time for humility — be direct and specific.',
		answer: '"I\'d highlight two. First, I\'m strong at debugging complex distributed systems — at my last role I owned incident response for a service handling 50K RPS and reduced MTTR from 45 minutes to under 12. Second, I\'m effective at translating technical complexity for non-technical stakeholders, which has been critical in cross-functional projects."',
		avoid: 'Don\'t say "I work too hard" or "I\'m a perfectionist" as a strength.'
	},
	{
		q: '"Do you have any questions for me?"',
		why: 'Always have 2–3 questions. This signals genuine interest and gives you valuable intel. Avoid questions about salary or PTO at this stage — focus on the role and team.',
		answer: '"Yes — a couple. What does success look like in the first 90 days for someone in this role? And what\'s the team\'s biggest challenge right now that this hire would help address?"',
		avoid: 'Don\'t say "No, I think I\'m good!" — it signals low interest.'
	},
]

const salaryScripts = [
	{
		label: 'Strategy 1: Deflect and flip (best first move)',
		script: '"I\'m more focused on finding the right fit right now. Could you share what the budgeted range is for this role? I want to make sure we\'re aligned before going further."'
	},
	{
		label: 'Strategy 2: Give a range (if pressed)',
		script: '"Based on my research and my experience level, I\'m targeting something in the $130K–$155K range for base. That said, I\'m open to discussing the total package including equity and bonus."'
	},
	{
		label: 'Strategy 3: Anchor high (competing offers)',
		script: '"I\'m currently in conversations with a few companies and the offers I\'m seeing are in the $140K–$160K range. I\'d need something competitive to make a move."'
	},
]
</script>

<style scoped>
.view-page {
	padding-bottom: 5rem;
}

.qa-list {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	margin-bottom: 3rem;
}

.qa-toggle {
	font-size: 1.25rem;
	font-weight: 300;
	color: var(--gold);
	flex-shrink: 0;
	line-height: 1;
	width: 1.5rem;
	text-align: center;
}

.two-col-section {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.25rem;
	margin-bottom: 3rem;
}

.salary-block {
	margin-bottom: 2rem;
}

.salary-scripts {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.script-label {
	font-size: 0.72rem;
	font-weight: 600;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: var(--muted-light);
	margin-bottom: 0.5rem;
}

@media (max-width: 700px) {
	.two-col-section {
		grid-template-columns: 1fr;
	}
}
</style>
