<template>
	<div class="view-page">
		<div class="page-container">
			<div class="page-header animate-fade-up anim-d1">
				<p class="eyebrow"><span></span>Module 04 — Offer & Negotiation</p>
				<h1>Offer & Negotiation</h1>
				<p>Most candidates accept the first offer they receive. That single decision costs the average professional $500K–$1M over a career. Negotiation is not aggressive — it's expected. Every hiring manager assumes candidates will negotiate.</p>
			</div>

			<div class="tip-box green animate-fade-up anim-d2" style="margin-bottom: 3rem;">
				<span class="tip-icon">💰</span>
				<div>
					<strong>The most important rule:</strong> Never accept or decline an offer on the spot. Always say "Thank you — I'm very excited. Can I have a few days to review the details?" You have more time than you think, and time is leverage.
				</div>
			</div>

			<!-- Total Comp Breakdown -->
			<div class="animate-fade-up anim-d2" style="margin-bottom: 3rem;">
				<div class="section-label">Evaluating the Total Package</div>
				<div class="comp-grid">
					<div class="comp-card" v-for="c in compComponents" :key="c.label">
						<div class="comp-icon">{{ c.icon }}</div>
						<h4>{{ c.label }}</h4>
						<p>{{ c.desc }}</p>
						<div class="comp-tip">{{ c.tip }}</div>
					</div>
				</div>
			</div>

			<!-- Negotiation Scripts -->
			<div class="animate-fade-up anim-d3" style="margin-bottom: 3rem;">
				<div class="section-label">Negotiation Scripts — Word for Word</div>
				<div class="scripts-list">
					<div class="script-item card" v-for="s in scripts" :key="s.scenario">
						<div class="script-scenario">
							<span class="badge badge-gold">{{ s.tag }}</span>
							<h4>{{ s.scenario }}</h4>
						</div>
						<div class="example-label">What to say</div>
						<div class="example-block">{{ s.script }}</div>
						<div v-if="s.note" class="script-note">
							<span>📌</span> {{ s.note }}
						</div>
					</div>
				</div>
			</div>

			<!-- Competing Offers -->
			<div class="card animate-fade-up anim-d4" style="margin-bottom: 3rem;">
				<h3 style="font-size: 1.3rem; margin-bottom: 0.375rem;">Leveraging Competing Offers</h3>
				<p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 1.5rem;">A competing offer is the single most powerful negotiation tool. Here's how to use it ethically and effectively.</p>
				<div class="competing-steps">
					<div class="c-step" v-for="(s, i) in competingSteps" :key="i">
						<div class="c-step-num">{{ i + 1 }}</div>
						<div>
							<strong>{{ s.title }}</strong>
							<p>{{ s.desc }}</p>
						</div>
					</div>
				</div>
				<div class="tip-box red" style="margin-top: 1.5rem;">
					<span class="tip-icon">⚠️</span>
					<div><strong>Never bluff a competing offer.</strong> If they ask to see the offer letter or match it, you'll either have to produce it or admit you lied. Real offers only.</div>
				</div>
			</div>

			<!-- Equity Guide -->
			<div class="card animate-fade-up anim-d4" style="margin-bottom: 3rem;">
				<h3 style="font-size: 1.3rem; margin-bottom: 0.375rem;">Understanding Equity (RSUs & Options)</h3>
				<p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Equity is often the largest component of tech compensation and the most misunderstood.</p>
				<div class="equity-table">
					<div class="eq-row header">
						<div>Term</div>
						<div>What it means</div>
						<div>What to ask</div>
					</div>
					<div class="eq-row" v-for="e in equity" :key="e.term">
						<div class="eq-term">{{ e.term }}</div>
						<div class="eq-def">{{ e.def }}</div>
						<div class="eq-ask">{{ e.ask }}</div>
					</div>
				</div>
			</div>

			<!-- Decision Framework -->
			<div class="animate-fade-up anim-d5">
				<div class="section-label">Before You Sign — Decision Checklist</div>
				<div class="decision-grid">
					<div class="card">
						<h4 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--navy);">Compensation ✓</h4>
						<ul class="checklist">
							<li>Is base salary at or above P75 for the role/location?</li>
							<li>Is equity refreshed annually?</li>
							<li>What is the vesting schedule? (4yr/1yr cliff is standard)</li>
							<li>Is bonus discretionary or target-based?</li>
							<li>Did I negotiate, or just accept the first number?</li>
						</ul>
					</div>
					<div class="card">
						<h4 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--navy);">Role & Growth ✓</h4>
						<ul class="checklist">
							<li>Do I know what success looks like in 12 months?</li>
							<li>Is there a clear path to the next level?</li>
							<li>Have I spoken to potential teammates (not just managers)?</li>
							<li>What's the attrition rate on this team?</li>
							<li>Am I excited about the mission, not just the paycheck?</li>
						</ul>
					</div>
					<div class="card">
						<h4 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--navy);">Practical Details ✓</h4>
						<ul class="checklist">
							<li>What are the health benefits and who covers what?</li>
							<li>Is there a non-compete I need a lawyer to review?</li>
							<li>What's the remote/hybrid policy long-term?</li>
							<li>Are there signing bonus clawback provisions?</li>
							<li>Can my start date accommodate my current notice period?</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const compComponents = [
	{ icon: '💵', label: 'Base Salary', desc: 'The guaranteed annual cash. Benchmark against Levels.fyi and LinkedIn Salary for your title, YOE, and metro.', tip: 'This is your most negotiable lever — and it compounds (future raises, bonuses are % of base).' },
	{ icon: '📈', label: 'Equity (RSUs)', desc: 'Stock granted over a vesting schedule. At public companies, RSUs have clear market value. At private companies, it\'s speculative.', tip: 'Ask: What\'s the current valuation, preferred stock price, and total dilution?' },
	{ icon: '🎯', label: 'Bonus', desc: 'Target bonus as % of base. Understand: is it discretionary (up to manager) or formula-based (tied to metrics)?', tip: 'A "target" bonus is never guaranteed. Ask about historical payout rates.' },
	{ icon: '✍️', label: 'Signing Bonus', desc: 'One-time payment on join. Often used to make up unvested equity you\'re leaving behind. Usually clawed back if you leave < 1yr.', tip: 'Negotiate this to offset unvested equity you\'re giving up at your current employer.' },
	{ icon: '🏖️', label: 'PTO & Leave', desc: 'Unlimited PTO sounds great but often means less. Ask: What does the team actually take? Is parental leave paid and how long?', tip: '"Unlimited PTO" companies often average fewer vacation days than those with accrual policies.' },
	{ icon: '🏠', label: 'Remote / WFH', desc: 'Will this change? Get any flexibility promises in writing, or at least document the conversation.', tip: 'Remote policy is a compensation component — a 5-day RTO adds real commute cost and time.' },
]

const scripts = [
	{
		tag: 'Initial Response',
		scenario: 'Responding to the verbal offer',
		script: '"Thank you so much — I\'m genuinely excited about this opportunity and I\'m very interested in [Company]. This is really encouraging. Could I have a few days to review the full written details? I want to give this the consideration it deserves."',
		note: 'Never accept verbally. Getting time gives you space to negotiate and to get competing offers or counteroffers in writing.'
	},
	{
		tag: 'Counter-Offer',
		scenario: 'Negotiating base salary',
		script: '"I\'ve done a lot of research on market rates for this role, and I\'m seeing data from Levels.fyi and other sources that puts this band at $X–$Y for my experience level. I\'m very excited about this role, but I\'d feel much more comfortable coming in at $[your number]. Is there flexibility there?"',
		note: 'Always give a specific number, not a range. Ranges anchor to the bottom. Ask for 10–20% above offer.'
	},
	{
		tag: 'Competing Offer',
		scenario: 'Using another offer as leverage',
		script: '"I want to be transparent with you — I\'m at the offer stage with another company and their package is at $[number]. [Company] is my first choice, and I\'d really prefer to be here. Is there anything you can do to close that gap? I\'m not trying to start a bidding war, I just want to be honest about where I am."',
		note: 'Name the competing company if you\'re comfortable — it adds credibility. Never name a company you don\'t actually have an offer from.'
	},
	{
		tag: 'Equity Ask',
		scenario: 'Negotiating RSU grant size',
		script: '"I\'m comfortable with the base salary. The one area I\'d love to explore is the equity grant. Given my experience level and the impact I expect to have, I was hoping we could get to [X] RSUs. Is that within range?"',
		note: 'Equity is often easier to increase than base at many companies because it\'s a future cost. Always ask.'
	},
	{
		tag: 'Final Ask',
		scenario: 'When they say "this is our best offer"',
		script: '"I appreciate you looking into it. I understand this may be at the top of your band. Would it be possible to revisit in 6 months based on performance, or to add a signing bonus to close the gap? I\'m ready to commit if we can make this work."',
		note: '"Best and final" is often not. A 6-month review or signing bonus is a very reasonable ask that costs the company less than a salary increase.'
	},
]

const competingSteps = [
	{ title: 'Inform early and professionally', desc: '"I want to be transparent — I\'m in late stages with a few other companies. I expect to have decisions by [date]. [Company] is my top choice and I\'d love to find a way to make this work."' },
	{ title: 'Mention the competing offer specifically', desc: 'Name the company and the number if you can. "I received an offer from [Company B] at $X base + $Y in equity." Specifics add credibility.' },
	{ title: 'Give them a deadline to match', desc: '"I need to respond to [Company B] by Thursday. Is there any way to accelerate the process or share what you\'re able to offer?" Creates urgency without ultimatums.' },
	{ title: 'Make clear you prefer them', desc: '"My preference is absolutely to be here — but I need the numbers to make sense. If you can get close, I\'m ready to say yes." This makes it easy for them to say yes.' },
]

const equity = [
	{ term: 'Vesting Schedule', def: 'The timeline over which you earn your equity. Standard: 4 years with 1-year cliff (you get nothing if you leave before 12 months, then 25% unlocks).', ask: '"Is there a cliff? How does acceleration work if I\'m acquired or laid off?"' },
	{ term: 'RSU', def: 'Restricted Stock Unit. A grant of stock that vests over time. At public companies, value is clear. At startups, it\'s theoretical.', ask: '"What\'s the current fair market value per share? What was it 1–2 years ago?"' },
	{ term: 'ISO / NSO Options', def: 'Rights to buy stock at a fixed price. ISOs have tax advantages. Value depends on growth. You must exercise (buy) before they expire.', ask: '"What\'s the strike price, current 409A valuation, and option expiration window after leaving?"' },
	{ term: 'Refresh Grants', def: 'Additional equity given each year (usually after review). Critical for retention at year 3–4 when initial cliff is done.', ask: '"What does the annual refresh grant process look like? Is it formula-based or discretionary?"' },
	{ term: 'Fully Diluted Shares', def: 'Total shares including all options, warrants, and convertibles. Needed to calculate your % ownership at a startup.', ask: '"What percentage of the fully diluted cap table does this grant represent?"' },
]
</script>

<style scoped>
.view-page {
	padding-bottom: 5rem;
}

.comp-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
}

.comp-card {
	background: var(--white);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.comp-icon {
	font-size: 1.5rem;
	line-height: 1;
}

.comp-card h4 {
	font-size: 0.975rem;
	font-weight: 700;
	color: var(--navy);
	margin: 0;
}

.comp-card p {
	font-size: 0.85rem;
	color: var(--muted);
	line-height: 1.6;
	flex: 1;
}

.comp-tip {
	font-size: 0.8rem;
	color: var(--gold);
	font-weight: 500;
	padding-top: 0.5rem;
	border-top: 1px solid var(--cream-border);
	line-height: 1.5;
}

.scripts-list {
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
}

.script-item {
	display: flex;
	flex-direction: column;
	gap: 0.875rem;
}

.script-scenario {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	flex-wrap: wrap;
}

.script-scenario h4 {
	font-size: 1.1rem;
	font-weight: 600;
	margin: 0;
}

.script-note {
	font-size: 0.85rem;
	color: var(--muted);
	line-height: 1.6;
	display: flex;
	gap: 0.5rem;
	align-items: flex-start;
}

.competing-steps {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.c-step {
	display: flex;
	gap: 1rem;
	align-items: flex-start;
	padding: 1rem 1.25rem;
	background: var(--cream);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
}

.c-step-num {
	width: 1.75rem;
	height: 1.75rem;
	background: var(--navy);
	color: var(--gold-light);
	font-family: var(--font-display);
	font-size: 0.85rem;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	flex-shrink: 0;
	margin-top: 0.1rem;
}

.c-step strong {
	display: block;
	font-size: 0.9rem;
	color: var(--navy);
	margin-bottom: 0.25rem;
}

.c-step p {
	font-size: 0.85rem;
	color: var(--muted);
	line-height: 1.6;
	margin: 0;
}

.equity-table {
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	overflow: hidden;
}

.eq-row {
	display: grid;
	grid-template-columns: 1.5fr 3fr 2.5fr;
	gap: 1rem;
	padding: 0.875rem 1.25rem;
	border-bottom: 1px solid var(--cream-border);
	font-size: 0.875rem;
	line-height: 1.55;
}

.eq-row:last-child {
	border-bottom: none;
}

.eq-row.header {
	background: var(--navy);
	color: var(--gold-light);
	font-weight: 600;
	font-size: 0.75rem;
	letter-spacing: 0.08em;
	text-transform: uppercase;
}

.eq-row:not(.header):nth-child(even) {
	background: var(--cream);
}

.eq-term {
	font-weight: 600;
	color: var(--navy);
}

.eq-def {
	color: var(--charcoal);
}

.eq-ask {
	color: var(--muted);
	font-style: italic;
	font-family: var(--font-display);
	font-size: 0.9rem;
}

.decision-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
}

@media (max-width: 900px) {
	.comp-grid {
		grid-template-columns: 1fr 1fr;
	}

	.decision-grid {
		grid-template-columns: 1fr;
	}

	.eq-row {
		grid-template-columns: 1fr;
		gap: 0.375rem;
	}

	.eq-row.header {
		display: none;
	}
}

@media (max-width: 600px) {
	.comp-grid {
		grid-template-columns: 1fr;
	}
}
</style>
