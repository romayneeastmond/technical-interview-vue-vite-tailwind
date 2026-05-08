<template>
	<div class="home">
		<!-- Hero -->
		<section class="hero">
			<div class="page-container hero-inner">
				<div class="hero-text">
					<p class="hero-eyebrow animate-fade-up anim-d1">
						<span class="eyebrow-line"></span>
						Complete Interview Preparation System
					</p>
					<h1 class="hero-headline animate-fade-up anim-d2">
						Land the role.<br>
						<em>On your terms.</em>
					</h1>
					<p class="hero-sub animate-fade-up anim-d3">
						A structured, end-to-end guide covering every phase of the modern job search — from the first recruiter call to signing the offer. Built for engineers and knowledge workers aiming for top-tier roles.
					</p>
					<div class="hero-actions animate-fade-up anim-d4">
						<router-link to="/screening" class="btn-primary">Begin with Screening →</router-link>
						<router-link to="/modules" class="btn-ghost">Explore modules</router-link>
					</div>
				</div>
				<div class="hero-stats animate-fade-up anim-d3">
					<div class="stat-card">
						<span class="stat-num">4</span>
						<span class="stat-label">Interview Stages</span>
					</div>
					<div class="stat-card">
						<span class="stat-num">60+</span>
						<span class="stat-label">Practice Questions</span>
					</div>
					<div class="stat-card">
						<span class="stat-num">STAR</span>
						<span class="stat-label">Answer Framework</span>
					</div>
					<div class="stat-card">
						<span class="stat-num">∞</span>
						<span class="stat-label">Revision Cycles</span>
					</div>
				</div>
			</div>
		</section>

		<!-- Modules -->
		<section class="modules-section" id="modules">
			<div class="page-container">
				<div class="section-label">Four modules · Full pipeline coverage</div>

				<div class="modules-grid">
					<router-link to="/screening" class="module-card animate-fade-up anim-d1">
						<div class="module-num">01</div>
						<div class="module-tag badge badge-gold">Recruiter Screen</div>
						<h2>Screening Round</h2>
						<p>Master the recruiter call. Learn what they're actually assessing, how to frame your story, and how to advance every time.</p>
						<ul class="module-topics">
							<li>Your 60-second elevator pitch</li>
							<li>Why are you looking? (The real answer)</li>
							<li>Salary expectations strategy</li>
							<li>Questions that impress recruiters</li>
						</ul>
						<span class="module-cta">Start Module →</span>
					</router-link>

					<router-link to="/hiring-manager" class="module-card animate-fade-up anim-d2">
						<div class="module-num">02</div>
						<div class="module-tag badge badge-navy">Behavioral</div>
						<h2>Manager Round</h2>
						<p>Navigate the hiring manager interview with STAR-structured answers to the most impactful behavioral questions.</p>
						<ul class="module-topics">
							<li>Leadership & ownership stories</li>
							<li>Conflict resolution frameworks</li>
							<li>Failure & growth narratives</li>
							<li>Culture alignment signals</li>
						</ul>
						<span class="module-cta">Start Module →</span>
					</router-link>

					<router-link to="/coding" class="module-card animate-fade-up anim-d3">
						<div class="module-num">03</div>
						<div class="module-tag badge badge-green">Technical</div>
						<h2>Technical Interview</h2>
						<p>A structured approach to live coding, system design, and communicating your problem-solving process under pressure.</p>
						<ul class="module-topics">
							<li>UMPIRE problem-solving method</li>
							<li>Top algorithm patterns</li>
							<li>System design fundamentals</li>
							<li>Live coding etiquette</li>
						</ul>
						<span class="module-cta">Start Module →</span>
					</router-link>

					<router-link to="/negotiation" class="module-card animate-fade-up anim-d4">
						<div class="module-num">04</div>
						<div class="module-tag badge badge-gold">Offer Stage</div>
						<h2>Offer & Negotiation</h2>
						<p>Don't leave money on the table. Scripts, tactics, and frameworks to negotiate your compensation with confidence.</p>
						<ul class="module-topics">
							<li>Evaluating the total package</li>
							<li>Counter-offer scripts</li>
							<li>Equity & RSU negotiation</li>
							<li>Leveraging competing offers</li>
						</ul>
						<span class="module-cta">Start Module →</span>
					</router-link>
				</div>
			</div>
		</section>

		<!-- Process -->
		<section class="process-section">
			<div class="page-container">
				<div class="process-inner">
					<div class="process-text">
						<p class="eyebrow"><span class="eyebrow-line"></span>The Framework</p>
						<h2>Structured prep, not random practice</h2>
						<p>Most candidates prepare by Googling random questions the night before. This system treats interview prep like a project — with a defined process, deliverables, and measurable outcomes.</p>
						<div class="gold-divider"></div>
						<ul class="checklist">
							<li>Learn what each round is <em>actually</em> testing</li>
							<li>Prepare 6–8 versatile STAR stories that cover every behavioral question</li>
							<li>Build a research dossier on the company, team, and role</li>
							<li>Practice out loud — silent review doesn't work</li>
							<li>Debrief after every interview to iterate</li>
						</ul>
					</div>
					<div class="process-visual">
						<div class="pipeline">
							<div class="pipe-step" v-for="(step, i) in pipeline" :key="i">
								<div class="pipe-icon">{{ step.icon }}</div>
								<div class="pipe-content">
									<strong>{{ step.label }}</strong>
									<span>{{ step.sub }}</span>
								</div>
								<div class="pipe-arrow" v-if="i < pipeline.length - 1">↓</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Golden rule -->
		<section class="quote-section">
			<div class="page-container">
				<blockquote class="pull-quote">
					<p>"Interviews are a skill. Skills are learnable. You're not being judged on who you are — you're being judged on how well you demonstrate your value in 45 minutes."</p>
					<footer>— The core premise of this system</footer>
				</blockquote>
			</div>
		</section>
	</div>
</template>

<script setup>
const pipeline = [
	{ icon: '📞', label: 'Recruiter Screen', sub: '20–30 min · Fit & compensation' },
	{ icon: '🤝', label: 'Hiring Manager', sub: '45–60 min · Behavioral & vision' },
	{ icon: '💻', label: 'Technical Loop', sub: '3–5 hrs · Coding & system design' },
	{ icon: '✍️', label: 'Offer & Close', sub: 'Negotiation · Reference checks' },
]
</script>

<style scoped>
/* Hero */
.hero {
	padding: 5rem 0 4rem;
	border-bottom: 1px solid var(--cream-border);
}

.hero-inner {
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 4rem;
	align-items: center;
}

.hero-eyebrow {
	display: flex;
	align-items: center;
	gap: 0.625rem;
	font-size: 0.75rem;
	font-weight: 600;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: var(--gold);
	margin-bottom: 1.25rem;
}

.eyebrow-line {
	display: inline-block;
	width: 1.5rem;
	height: 1.5px;
	background: var(--gold);
}

.hero-headline {
	font-size: clamp(3rem, 5.5vw, 4.5rem);
	font-weight: 500;
	letter-spacing: -0.03em;
	color: var(--navy);
	line-height: 1.08;
	margin-bottom: 1.5rem;
}

.hero-headline em {
	font-style: italic;
	font-weight: 300;
	color: var(--gold);
}

.hero-sub {
	font-size: 1.075rem;
	color: var(--muted);
	line-height: 1.75;
	max-width: 46ch;
	margin-bottom: 2.5rem;
}

.hero-actions {
	display: flex;
	gap: 1rem;
	align-items: center;
}

.btn-primary {
	display: inline-block;
	padding: 0.875rem 2rem;
	background: var(--navy);
	color: var(--gold-light);
	font-size: 0.9rem;
	font-weight: 600;
	letter-spacing: 0.03em;
	border-radius: var(--radius);
	text-decoration: none;
	transition: background 0.15s, transform 0.15s;
}

.btn-primary:hover {
	background: var(--navy-light);
	transform: translateY(-1px);
}

.btn-ghost {
	display: inline-block;
	padding: 0.875rem 1.5rem;
	color: var(--muted);
	font-size: 0.9rem;
	font-weight: 500;
	border-radius: var(--radius);
	text-decoration: none;
	border: 1px solid var(--cream-border);
	transition: color 0.15s, border-color 0.15s, background 0.15s;
}

.btn-ghost:hover {
	color: var(--navy);
	border-color: var(--navy);
	background: var(--cream-dark);
}

.hero-stats {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	flex-shrink: 0;
}

.stat-card {
	background: var(--white);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	padding: 1.25rem 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	box-shadow: var(--shadow-sm);
}

.stat-num {
	font-family: var(--font-display);
	font-size: 2rem;
	font-weight: 600;
	color: var(--navy);
	line-height: 1;
}

.stat-label {
	font-size: 0.75rem;
	color: var(--muted-light);
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.08em;
}

/* Modules */
.modules-section {
	padding: 5rem 0;
}

.modules-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.25rem;
	margin-top: 2rem;
}

.module-card {
	display: flex;
	flex-direction: column;
	gap: 0.875rem;
	padding: 2rem;
	background: var(--white);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	text-decoration: none;
	color: inherit;
	box-shadow: var(--shadow-sm);
	transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
	position: relative;
	overflow: hidden;
}

.module-card::before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 3px;
	background: var(--gold);
	transform: scaleX(0);
	transform-origin: left;
	transition: transform 0.25s ease;
}

.module-card:hover {
	box-shadow: var(--shadow-lg);
	transform: translateY(-3px);
	border-color: var(--gold-light);
}

.module-card:hover::before {
	transform: scaleX(1);
}

.module-num {
	font-family: var(--font-display);
	font-size: 2.5rem;
	font-weight: 300;
	color: var(--cream-border);
	line-height: 1;
	position: absolute;
	top: 1.25rem;
	right: 1.5rem;
}

.module-tag {
	align-self: flex-start;
}

.module-card h2 {
	font-size: 1.5rem;
	font-weight: 600;
	letter-spacing: -0.02em;
	margin-top: 0.25rem;
}

.module-card>p {
	font-size: 0.925rem;
	color: var(--muted);
	line-height: 1.65;
}

.module-topics {
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 0.375rem;
	margin-top: 0.25rem;
}

.module-topics li {
	font-size: 0.85rem;
	color: var(--charcoal);
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.module-topics li::before {
	content: '–';
	color: var(--gold);
	font-weight: 700;
}

.module-cta {
	font-size: 0.85rem;
	font-weight: 600;
	color: var(--gold);
	margin-top: auto;
	padding-top: 0.5rem;
	letter-spacing: 0.02em;
}

/* Process */
.process-section {
	padding: 5rem 0;
	background: var(--cream-dark);
	border-top: 1px solid var(--cream-border);
	border-bottom: 1px solid var(--cream-border);
}

.process-inner {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 5rem;
	align-items: center;
}

.process-text .eyebrow {
	display: flex;
	align-items: center;
	gap: 0.625rem;
	font-size: 0.75rem;
	font-weight: 600;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: var(--gold);
	margin-bottom: 1rem;
}

.process-text h2 {
	font-size: 2.25rem;
	font-weight: 500;
	letter-spacing: -0.02em;
	margin-bottom: 1rem;
	line-height: 1.2;
}

.process-text>p {
	color: var(--muted);
	line-height: 1.75;
	margin-bottom: 1.5rem;
	font-size: 0.975rem;
}

.pipeline {
	display: flex;
	flex-direction: column;
	gap: 0;
	background: var(--white);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	overflow: hidden;
	box-shadow: var(--shadow-md);
}

.pipe-step {
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1.125rem 1.5rem;
	border-bottom: 1px solid var(--cream-border);
	position: relative;
}

.pipe-step:last-child {
	border-bottom: none;
}

.pipe-icon {
	font-size: 1.25rem;
	width: 2rem;
	text-align: center;
	flex-shrink: 0;
}

.pipe-content {
	display: flex;
	flex-direction: column;
	gap: 0.15rem;
	flex: 1;
}

.pipe-content strong {
	font-size: 0.9rem;
	color: var(--navy);
	font-weight: 600;
}

.pipe-content span {
	font-size: 0.8rem;
	color: var(--muted-light);
}

.pipe-arrow {
	color: var(--cream-border);
	position: absolute;
	bottom: -1rem;
	left: 2.25rem;
	font-size: 0.875rem;
	z-index: 2;
}

/* Quote */
.quote-section {
	padding: 5rem 0;
}

.pull-quote {
	max-width: 64ch;
	margin: 0 auto;
	text-align: center;
}

.pull-quote p {
	font-family: var(--font-display);
	font-size: clamp(1.25rem, 2.5vw, 1.75rem);
	font-style: italic;
	font-weight: 400;
	color: var(--navy);
	line-height: 1.55;
	margin-bottom: 1.5rem;
}

.pull-quote footer {
	font-size: 0.8rem;
	color: var(--muted-light);
	letter-spacing: 0.06em;
	text-transform: uppercase;
	font-weight: 500;
}

@media (max-width: 800px) {
	.hero-inner {
		grid-template-columns: 1fr;
	}

	.hero-stats {
		display: none;
	}

	.modules-grid {
		grid-template-columns: 1fr;
	}

	.process-inner {
		grid-template-columns: 1fr;
		gap: 2.5rem;
	}
}
</style>
