<template>
	<div class="view-page">
		<div class="page-container">

			<!-- Page Header -->
			<div class="page-header animate-fade-up anim-d1">
				<p class="eyebrow">Engineering Manager · GRC Context</p>
				<h1>Leadership <em>Frameworks</em></h1>
				<p>Non-technical frameworks that bridge innovation and regulatory safety — curated for an AI Applications Manager role within a GRC company.</p>
			</div>

			<!-- Priority Banner -->
			<div class="tip-box gold animate-fade-up anim-d2" style="margin-bottom: 3rem;">
				<span class="tip-icon">⚡</span>
				<div>
					<strong>Interview Strategy:</strong> Don't recite definitions. Weave these into your STAR stories. A director wants to hear how you <em>applied</em> a framework, not that you know its acronym.
				</div>
			</div>

			<!-- Priority Trifecta -->
			<div class="animate-fade-up anim-d2" style="margin-bottom: 3rem;">
				<div class="section-label">Top Priority — Cover 80% of What Directors Want to Hear</div>
				<div class="priority-grid">
					<div class="priority-card priority-1">
						<div class="priority-num">01</div>
						<div class="priority-badge badge badge-gold">GRC Critical</div>
						<h3>NIST AI RMF</h3>
						<p>The industry language for "safe AI." Signals you understand the U.S. regulatory landscape.</p>
						<div class="priority-hook">
							<span class="hook-label">Interview Hook</span>
							<p>"In a GRC environment, I view the NIST AI RMF not just as a guideline, but as the baseline for our internal Model Risk Management policy."</p>
						</div>
					</div>
					<div class="priority-card priority-2">
						<div class="priority-num">02</div>
						<div class="priority-badge badge badge-green">People Risk</div>
						<h3>Psychological Safety</h3>
						<p>In AI/ML, hallucinations happen. If your team hides failures, it becomes an audit disaster.</p>
						<div class="priority-hook">
							<span class="hook-label">Interview Hook</span>
							<p>"I cultivate psychological safety so that if an engineer detects a bias in a risk model, they feel empowered to flag it immediately without fear of reprisal."</p>
						</div>
					</div>
					<div class="priority-card priority-3">
						<div class="priority-num">03</div>
						<div class="priority-badge badge badge-navy">Metrics</div>
						<h3>OKRs + DORA</h3>
						<p>Directors care about how you align engineering output with business outcomes — not lines of code.</p>
						<div class="priority-hook">
							<span class="hook-label">Interview Hook</span>
							<p>"I align engineering OKRs with business outcomes. For an AI product, 'Increase Audit Pass Rate' with Key Result: 'Reduce False Positives by 10%.'"</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Category Sections -->
			<div v-for="(category, ci) in categories" :key="ci" class="framework-section animate-fade-up" :class="`anim-d${ci + 3}`" style="margin-bottom: 3rem;">
				<div class="section-label">{{ category.label }}</div>
				<p class="category-note" v-if="category.note">{{ category.note }}</p>

				<div class="accordion-list">
					<div v-for="(fw, fi) in category.frameworks" :key="fi" class="accordion-item" :class="{ open: isOpen(ci, fi) }">
						<button class="accordion-trigger" @click="toggleAccordion(ci, fi)">
							<div class="accordion-trigger-left">
								<span class="fw-name">{{ fw.name }}</span>
								<span v-if="fw.badge" class="badge" :class="fw.badgeClass">{{ fw.badge }}</span>
							</div>
							<span class="accordion-chevron">{{ isOpen(ci, fi) ? '−' : '+' }}</span>
						</button>

						<div class="accordion-body" v-show="isOpen(ci, fi)">
							<div class="fw-grid">
								<div class="fw-detail-card">
									<div class="fw-detail-label">What it is</div>
									<p>{{ fw.what }}</p>
								</div>
								<div class="fw-detail-card">
									<div class="fw-detail-label">Why use it</div>
									<p>{{ fw.why }}</p>
								</div>
							</div>

							<div v-if="fw.hook" class="hook-block">
								<div class="hook-block-label">Interview Hook</div>
								<p>{{ fw.hook }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Story Templates -->
			<div class="animate-fade-up anim-d6" style="margin-bottom: 3rem;">
				<div class="section-label">Woven Story Templates</div>
				<p class="category-note" style="margin-bottom: 1.5rem;">Ready-to-adapt answers that combine multiple frameworks naturally.</p>
				<div class="story-grid">
					<div class="card story-card" v-for="(story, si) in stories" :key="si">
						<div class="story-prompt">{{ story.prompt }}</div>
						<div class="gold-divider"></div>
						<p class="story-answer">{{ story.answer }}</p>
						<div class="story-tags">
							<span class="badge badge-gold" v-for="tag in story.tags" :key="tag">{{ tag }}</span>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const openMap = ref({})

function key(ci, fi) { return `${ci}-${fi}` }
function isOpen(ci, fi) { return !!openMap.value[key(ci, fi)] }
function toggleAccordion(ci, fi) {
	const k = key(ci, fi)
	openMap.value = { ...openMap.value, [k]: !openMap.value[k] }
}

const categories = [
	{
		label: '1 — Risk & Compliance Frameworks',
		note: 'Since your company sells compliance software, you cannot operate like a startup building a consumer product.',
		frameworks: [
			{
				name: 'NIST AI Risk Management Framework (AI RMF)',
				badge: 'Top Priority',
				badgeClass: 'badge-gold',
				what: 'The U.S. government\'s standard for managing AI risk across five functions: Identify, Map, Assess, Mitigate, and Govern.',
				why: 'It is the industry language for "safe AI." Mentioning it signals you understand the regulatory landscape of the U.S. and can operate within it.',
				hook: '"In a GRC environment, I view the NIST AI RMF not just as a guideline, but as the baseline for our internal Model Risk Management policy."',
			},
			{
				name: 'Model Risk Management (MRM) / CAMS Standards',
				badge: 'GRC Critical',
				badgeClass: 'badge-gold',
				what: 'Frameworks used by banks and financial institutions (CAMS - Committee of Model Risk Management) to ensure models are valid, reliable, and fit for purpose.',
				why: 'Demonstrates you know the difference between a "research model" and a "production model" in a regulated industry — a key signal for senior roles.',
				hook: '"I prioritize lifecycle governance, ensuring that a model used for risk scoring in production undergoes the same rigorous back-testing and documentation as a financial model."',
			},
			{
				name: 'GDPR / CCPA / HIPAA Alignment',
				badge: 'Privacy',
				badgeClass: 'badge-navy',
				what: 'Data privacy laws governing AI and PII handling across jurisdictions (EU, California, healthcare).',
				why: 'AI Applications often ingest sensitive data. Knowing how to architect for "Privacy by Design" is essential in any regulated industry.',
				hook: 'Frame as an architectural decision: "We designed our data pipeline with Privacy by Design from day one — field-level encryption, minimal data retention, and audit trails that satisfy both CCPA and our SOC2 requirements."',
			},
		],
	},
	{
		label: '2 — Strategic & Operational Frameworks',
		note: 'How you scale the business and align engineering with company revenue.',
		frameworks: [
			{
				name: 'OKRs (Objectives and Key Results)',
				badge: 'Top Priority',
				badgeClass: 'badge-gold',
				what: 'A goal-setting methodology (Google/Intel style) that ties team objectives to measurable outcomes.',
				why: 'Directors care about how you align engineering output with company revenue or customer success — not features shipped.',
				hook: '"I align engineering OKRs with business outcomes, not just lines of code. For an AI product, our \'Objective\' might be \'Increase Audit Pass Rate,\' with the \'Key Result\' being \'Reduce False Positives by 10%.\'"',
			},
			{
				name: 'DORA Metrics (DevOps Research and Assessment)',
				badge: 'Top Priority',
				badgeClass: 'badge-gold',
				what: 'Industry-standard metrics for engineering performance: Deployment Frequency, Lead Time, Change Failure Rate, and MTTR.',
				why: 'Helps you objectively assess the health of your AI/ML pipelines without vague claims. Especially useful in MLOps conversations.',
				hook: '"I use DORA metrics to measure our MLOps maturity. If our model update frequency is low, I ask: is it due to regulatory constraints, or do we have a technical bottleneck?"',
			},
			{
				name: 'ADKAR Model (Prosci)',
				badge: 'Change Mgmt',
				badgeClass: 'badge-navy',
				what: 'A 5-step change management model: Awareness, Desire, Knowledge, Ability, Reinforcement.',
				why: 'When you introduce an AI feature, the legal/compliance team may resist it. ADKAR helps manage that cultural shift systematically.',
				hook: '"When rolling out an AI workflow, I don\'t just build the model; I use ADKAR to ensure the compliance team understands why the AI helps them pass an audit, not just that the feature exists."',
			},
			{
				name: 'Balanced Scorecard',
				badge: 'Strategy',
				badgeClass: 'badge-navy',
				what: 'A strategic planning model that measures performance across four perspectives: financial, customer, internal processes, and learning.',
				why: 'Helps justify AI spend that isn\'t purely technical — measuring AI value via customer retention, not just model accuracy.',
				hook: 'Use when asked about ROI: "Beyond model performance, I track AI value through a Balanced Scorecard lens — customer retention impact, compliance team productivity, and audit success rates."',
			},
		],
	},
	{
		label: '3 — People & Team Dynamics',
		note: 'The leadership dimension that separates a manager from an engineering manager.',
		frameworks: [
			{
				name: 'Psychological Safety (Amy Edmondson)',
				badge: 'Top Priority',
				badgeClass: 'badge-gold',
				what: 'A framework for creating an environment where team members feel safe taking risks, experimenting, and admitting errors without fear of punishment.',
				why: 'In AI/ML, hallucinations and errors happen. If your team isn\'t psychologically safe, they\'ll hide bad data or model failures until it\'s an audit disaster.',
				hook: '"I cultivate psychological safety so that if an engineer detects a bias in a risk model, they feel empowered to flag it immediately without fear of reprisal. This is vital for a GRC product."',
			},
			{
				name: '70-20-10 Learning Model',
				badge: 'Development',
				badgeClass: 'badge-green',
				what: '70% experiential learning on the job, 20% exposure through mentorship and feedback, 10% formal education and training.',
				why: 'Useful when discussing how to upskill AI engineers into compliance-aware builders without pulling them into training cycles.',
				hook: 'Frame team growth: "I use the 70-20-10 model to develop compliance awareness organically — 70% through code reviews where we surface privacy implications, 20% through pairing with the compliance team, 10% through structured training."',
			},
			{
				name: "Kotter's 8-Step Change Model",
				badge: 'Transformation',
				badgeClass: 'badge-navy',
				what: 'A framework for large-scale organizational transformation across eight steps: Create Urgency, Build Coalition, Form Vision, Communicate, Remove Barriers, Win Short-Term, Consolidate, and Anchor.',
				why: 'Applicable when shifting a team from legacy compliance tools to AI-native tools — a transformation that requires cultural, not just technical, change.',
				hook: 'Use for "30-60-90 day" questions: "I\'d apply Kotter\'s framework — first 30 days creating urgency around the gap between current tooling and competitive AI capabilities, then building a guiding coalition across engineering and compliance."',
			},
		],
	},
	{
		label: '4 — Decision-Making & Analysis',
		note: 'How you think and analyze — the frameworks behind your judgment.',
		frameworks: [
			{
				name: 'OODA Loop (Observe, Orient, Decide, Act)',
				badge: 'Decision-Making',
				badgeClass: 'badge-navy',
				what: 'A decision-making framework developed by military strategist John Boyd: Observe current state, Orient using context, Decide on a course, Act swiftly.',
				why: 'Highly relevant for fast-moving AI environments where data changes rapidly. Explains how you make decisions under uncertainty.',
				hook: 'Use for ambiguous AI situations: "When our LLM started producing unexpected outputs after a vendor update, I applied an OODA cycle — observed the failure patterns, oriented using our evaluation suite, decided on a rollback threshold, and acted within hours."',
			},
			{
				name: 'SWOT Analysis',
				badge: 'Planning',
				badgeClass: 'badge-navy',
				what: 'Strengths, Weaknesses, Opportunities, Threats — a foundational strategic planning tool.',
				why: 'Essential for the "30-60-90 day plan" question and for evaluating new vendors or technology decisions.',
				hook: '"When evaluating a new LLM vendor, I run a SWOT analysis specifically looking at Security Threats (data leakage risk) and Regulatory Opportunities (features that help compliance pass audits)."',
			},
			{
				name: "Porter's Five Forces",
				badge: 'Competitive',
				badgeClass: 'badge-navy',
				what: 'Analyzes industry competition across: supplier power, buyer power, competitive rivalry, threat of substitution, and threat of new entrants.',
				why: 'Strategic context that shows you understand where your AI platform stands against competitors in the GRC market.',
				hook: 'Use in product strategy discussions to show business acumen beyond engineering: "I regularly use Porter\'s Five Forces to help my team understand why we\'re building features — connecting our roadmap to competitive positioning."',
			},
		],
	},
]

const stories = [
	{
		prompt: 'Tell me about scaling an AI team.',
		answer: 'I would use the ADKAR framework to align the compliance team on the AI adoption, ensuring we don\'t introduce technical debt that compromises our SOC2 audit readiness. Simultaneously, I track team health through DORA metrics to distinguish regulatory velocity constraints from engineering bottlenecks.',
		tags: ['ADKAR', 'DORA', 'SOC2'],
	},
	{
		prompt: 'How do you manage risk in AI systems?',
		answer: 'I ensure my team maintains high Psychological Safety so that model failure reporting is immediate — similar to the MRM lifecycle we see in banking. I then route those incidents through our NIST AI RMF process: map the risk, assess impact, and mitigate with documented controls.',
		tags: ['Psychological Safety', 'MRM', 'NIST AI RMF'],
	},
	{
		prompt: 'What\'s your approach to measuring team success?',
		answer: 'I use OKRs to tie engineering work to business outcomes — for a GRC AI product, that might be reducing customer audit failures by 15%, not shipping features. I validate execution quality through DORA metrics, separating regulatory compliance delays from actual engineering performance.',
		tags: ['OKRs', 'DORA', 'GRC'],
	},
]
</script>

<style scoped>
/* Priority Grid */
.priority-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.25rem;
}

@media (max-width: 900px) {
	.priority-grid {
		grid-template-columns: 1fr;
	}
}

.priority-card {
	background: var(--white);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	padding: 1.75rem;
	position: relative;
	overflow: hidden;
	transition: box-shadow 0.2s, transform 0.2s;
}

.priority-card:hover {
	box-shadow: var(--shadow-md);
	transform: translateY(-2px);
}

.priority-card::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 3px;
}

.priority-1::before {
	background: var(--gold);
}

.priority-2::before {
	background: var(--green);
}

.priority-3::before {
	background: var(--blue);
}

.priority-num {
	font-family: var(--font-display);
	font-size: 2.5rem;
	font-weight: 700;
	color: var(--cream-border);
	line-height: 1;
	margin-bottom: 0.5rem;
}

.priority-badge {
	margin-bottom: 0.75rem;
	display: inline-block;
}

.priority-card h3 {
	font-size: 1.25rem;
	margin-bottom: 0.5rem;
}

.priority-card>p {
	color: var(--muted);
	font-size: 0.9rem;
	line-height: 1.65;
	margin-bottom: 1.25rem;
}

.priority-hook {
	background: var(--cream);
	border-left: 3px solid var(--gold);
	padding: 0.875rem 1rem;
	border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.hook-label {
	display: block;
	font-size: 0.65rem;
	font-weight: 600;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: var(--gold);
	margin-bottom: 0.4rem;
}

.priority-hook p {
	font-size: 0.875rem;
	color: var(--charcoal);
	line-height: 1.65;
	font-style: italic;
}

/* Category note */
.category-note {
	color: var(--muted);
	font-size: 0.9rem;
	font-style: italic;
	margin-top: -0.75rem;
	margin-bottom: 1.25rem;
}

/* Accordion */
.accordion-list {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.accordion-item {
	background: var(--white);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	overflow: hidden;
	transition: box-shadow 0.2s;
}

.accordion-item.open {
	box-shadow: var(--shadow-sm);
	border-color: #d8d0c0;
}

.accordion-trigger {
	width: 100%;
	padding: 1.125rem 1.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	background: none;
	border: none;
	cursor: pointer;
	text-align: left;
	border-left: 3px solid transparent;
	transition: background 0.15s, border-color 0.15s;
}

.accordion-item.open .accordion-trigger {
	border-left-color: var(--gold);
	background: var(--gold-pale);
}

.accordion-trigger:hover {
	background: var(--cream-dark);
}

.accordion-item.open .accordion-trigger:hover {
	background: var(--gold-pale);
}

.accordion-trigger-left {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	flex-wrap: wrap;
}

.fw-name {
	font-family: var(--font-display);
	font-size: 1.1rem;
	font-weight: 600;
	color: var(--navy);
}

.accordion-chevron {
	font-size: 1.25rem;
	color: var(--muted);
	flex-shrink: 0;
	width: 24px;
	text-align: center;
	font-weight: 300;
}

/* Accordion body */
.accordion-body {
	padding: 1.25rem 1.5rem 1.5rem;
	border-top: 1px solid var(--cream-border);
}

.fw-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	margin-bottom: 1.25rem;
}

@media (max-width: 640px) {
	.fw-grid {
		grid-template-columns: 1fr;
	}
}

.fw-detail-card {
	background: var(--cream);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	padding: 1rem 1.125rem;
}

.fw-detail-label {
	font-size: 0.65rem;
	font-weight: 600;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: var(--muted-light);
	margin-bottom: 0.5rem;
}

.fw-detail-card p {
	font-size: 0.9rem;
	color: var(--charcoal);
	line-height: 1.7;
}

.hook-block {
	background: var(--gold-pale);
	border: 1px solid #f0d89a;
	border-left: 3px solid var(--gold);
	border-radius: 0 var(--radius-md) var(--radius-md) 0;
	padding: 1rem 1.25rem;
}

.hook-block-label {
	font-size: 0.65rem;
	font-weight: 600;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: var(--gold);
	margin-bottom: 0.4rem;
}

.hook-block p {
	font-size: 0.9rem;
	color: #5a4010;
	line-height: 1.7;
	font-style: italic;
}

/* Story Grid */
.story-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.25rem;
}

@media (max-width: 900px) {
	.story-grid {
		grid-template-columns: 1fr;
	}
}

.story-card {
	display: flex;
	flex-direction: column;
	gap: 0;
}

.story-prompt {
	font-family: var(--font-display);
	font-size: 1.05rem;
	font-weight: 600;
	color: var(--navy);
	line-height: 1.4;
	margin-bottom: 0;
}

.story-answer {
	color: var(--charcoal);
	font-size: 0.9rem;
	line-height: 1.75;
	margin-bottom: 1.25rem;
	flex: 1;
}

.story-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem;
}
</style>
