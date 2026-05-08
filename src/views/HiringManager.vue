<template>
	<div class="view-page">
		<div class="page-container">
			<div class="page-header animate-fade-up anim-d1">
				<p class="eyebrow"><span></span>Module 02 — Behavioral Interview</p>
				<h1>Manager Round</h1>
				<p>The hiring manager isn't testing your technical skills — they're evaluating whether you'll thrive on their team. They're hiring someone they'll trust with important problems, and someone who won't cause headaches. Demonstrate ownership, judgment, and self-awareness.</p>
			</div>

			<div class="tip-box blue animate-fade-up anim-d2" style="margin-bottom: 3rem;">
				<span class="tip-icon">🎯</span>
				<div>
					<strong>The preparation secret:</strong> Write 6–8 versatile "achievement stories" from your career. Each should be 90–120 seconds and cover: a challenge, your specific actions, and a measurable result. Then map each story to multiple question types. You don't need 50 prepared answers — you need 8 great stories.
				</div>
			</div>

			<!-- Story Bank -->
			<div class="animate-fade-up anim-d2" style="margin-bottom: 3rem;">
				<div class="section-label">Build Your Story Bank — 8 Archetypes</div>
				<div class="story-grid">
					<div class="story-card" v-for="s in stories" :key="s.type">
						<div class="story-type">{{ s.type }}</div>
						<h4 class="story-title">{{ s.title }}</h4>
						<p class="story-desc">{{ s.desc }}</p>
						<div class="story-maps">
							<span class="badge badge-gold" v-for="m in s.maps" :key="m">{{ m }}</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Questions -->
			<div class="animate-fade-up anim-d3">
				<div class="section-label">Top Behavioral Questions by Category</div>

				<div class="category-tabs">
					<button class="tab-btn" v-for="cat in categories" :key="cat" :class="{ active: activeCategory === cat }" @click="activeCategory = cat">
						{{ cat }}
					</button>
				</div>

				<div class="qa-list">
					<div class="qa-block" v-for="(q, i) in filteredQuestions" :key="q.q">
						<div class="qa-question" @click="toggle(q.q)">
							<span>{{ q.q }}</span>
							<span class="qa-toggle">{{ open === q.q ? '−' : '+' }}</span>
						</div>
						<div class="qa-answer" v-show="open === q.q">
							<p>{{ q.intent }}</p>
							<div class="example-label">Strong Answer Structure</div>
							<div class="example-block">{{ q.structure }}</div>
							<div v-if="q.trap" class="tip-box red" style="margin-top: 1rem;">
								<span class="tip-icon">⚠️</span>
								<div><strong>Common trap:</strong> {{ q.trap }}</div>
							</div>
							<div v-if="q.tip" class="tip-box green" style="margin-top: 1rem;">
								<span class="tip-icon">✅</span>
								<div>{{ q.tip }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Red Flags / Green Flags -->
			<div class="animate-fade-up anim-d4" style="margin-bottom: 3rem;">
				<div class="section-label">What hiring managers are really scoring</div>
				<div class="flags-grid">
					<div class="card">
						<h3 style="color: var(--green); font-size: 1.25rem; margin-bottom: 1rem;">🟢 Green Flags</h3>
						<ul class="checklist">
							<li>Takes ownership — uses "I" not "we" for their contributions</li>
							<li>Demonstrates self-awareness and learning from mistakes</li>
							<li>Quantifies impact with actual numbers</li>
							<li>Shows how they influenced others without authority</li>
							<li>Asks clarifying questions before answering</li>
							<li>Has thought about the future direction of their career</li>
						</ul>
					</div>
					<div class="card">
						<h3 style="color: var(--red); font-size: 1.25rem; margin-bottom: 1rem;">🔴 Red Flags</h3>
						<ul class="checklist" style="--check-color: var(--red);">
							<li>Blames others for failures — no accountability</li>
							<li>Can't give specific examples — only speaks in generalities</li>
							<li>Badmouths previous employers or teammates</li>
							<li>Struggles to describe their own impact clearly</li>
							<li>No questions for the interviewer at the end</li>
							<li>Answers are too long and unfocused</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Questions to Ask HM -->
			<div class="card animate-fade-up anim-d5">
				<h3 style="font-size: 1.3rem; margin-bottom: 0.375rem;">Questions to Ask the Hiring Manager</h3>
				<p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 1.5rem;">These show strategic thinking and genuine engagement. Pick 3–4.</p>
				<div class="hm-questions">
					<div class="hm-q" v-for="q in hmQuestions" :key="q.q">
						<div class="hm-q-text">{{ q.q }}</div>
						<div class="hm-q-why">{{ q.why }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'

const open = ref(null)
const toggle = (q) => { open.value = open.value === q ? null : q }
const activeCategory = ref('Leadership')

const categories = ['Leadership', 'Conflict', 'Failure', 'Collaboration', 'Ambiguity']

const stories = [
	{ type: '01', title: 'The Turnaround', desc: 'A project or situation that was failing and you helped fix it.', maps: ['Leadership', 'Pressure', 'Initiative'] },
	{ type: '02', title: 'The Difficult Colleague', desc: 'A time you navigated a challenging working relationship.', maps: ['Conflict', 'Collaboration', 'EQ'] },
	{ type: '03', title: 'The Big Mistake', desc: 'Something that went wrong and what you learned.', maps: ['Failure', 'Growth', 'Accountability'] },
	{ type: '04', title: 'The Influential Moment', desc: 'When you changed someone\'s mind without authority.', maps: ['Leadership', 'Communication', 'Influence'] },
	{ type: '05', title: 'The Ambiguous Project', desc: 'When you had to figure out what to do with minimal guidance.', maps: ['Ambiguity', 'Initiative', 'Problem-solving'] },
	{ type: '06', title: 'The Crunch', desc: 'Working under extreme pressure or tight deadline.', maps: ['Pressure', 'Prioritization', 'Resilience'] },
	{ type: '07', title: 'The Mentored', desc: 'Someone you helped grow — a junior, peer, or stakeholder.', maps: ['Mentoring', 'Leadership', 'Collaboration'] },
	{ type: '08', title: 'The Bold Call', desc: 'A decision you made that was risky or unpopular, but right.', maps: ['Judgment', 'Courage', 'Leadership'] },
]

const allQuestions = [
	{ cat: 'Leadership', q: '"Tell me about a time you led a team through a difficult project."', intent: 'They want to see that you can rally people, handle obstacles, and deliver results — not just assign tasks. Emphasize your specific decisions and how you motivated the team.', structure: 'Situation (the project & stakes) → your role as lead → the key obstacle you faced → the specific actions you took to unblock the team → the outcome with numbers. Close with: what you\'d do the same or differently.', tip: 'The best answers show both the "doing" (execution) and the "being" (how you showed up as a leader).' },
	{ cat: 'Leadership', q: '"Describe a time you had to influence without authority."', intent: 'This tests cross-functional effectiveness and communication skills. Critical for senior roles. They want to see how you build buy-in, not just announce decisions.', structure: 'Describe the stakeholder(s) and why they were skeptical → how you researched and understood their perspective → the approach you used to build alignment → the outcome and what changed.', trap: 'Don\'t just say "I communicated better." Show the specific technique — a presentation, a 1:1, a pilot, a data story.' },
	{ cat: 'Leadership', q: '"How do you prioritize when everything is a priority?"', intent: 'Prioritization is a core leadership skill. They want a repeatable framework, not a vague answer like "I make a list."', structure: 'Name your framework (e.g., impact vs. effort, RICE, business objectives alignment) → give a specific example where you applied it → describe the trade-off you made and its outcome.', tip: 'Mention that you communicate the prioritization transparently so stakeholders know what\'s being deprioritized and why.' },
	{ cat: 'Conflict', q: '"Tell me about a time you disagreed with your manager."', intent: 'They\'re checking for psychological safety and maturity. Can you advocate for your view professionally while ultimately supporting the team\'s decision? This is not a test of compliance.', structure: 'Describe the disagreement objectively → explain how you raised your concern (1:1, not in public) → how the discussion went → the decision that was made → how you responded and what the outcome was.', trap: 'Don\'t imply your manager was wrong and you were right. Show that the process was healthy, whatever the outcome.' },
	{ cat: 'Conflict', q: '"Describe a time you had a conflict with a coworker."', intent: 'Interpersonal conflict is normal. They want to see emotional intelligence — that you addressed it directly, professionally, and resolved it constructively.', structure: 'Briefly describe the conflict → the impact it was having → how you approached the conversation (private, factual, curious) → what you discovered → how it resolved.', tip: 'The best answers show that the conflict made the relationship or outcome stronger.' },
	{ cat: 'Failure', q: '"Tell me about your biggest professional failure."', intent: 'This is a self-awareness check. They want to see: did you own it? Did you learn? Did it make you better? The failure itself matters far less than your response to it.', structure: 'Name the failure directly (don\'t soften it excessively) → what role you played in it → the impact → what you did immediately after → what you changed in your approach → what you\'ve done differently since.', trap: 'Don\'t pick a failure that\'s secretly a success ("I worked too hard..."). Pick a real one.' },
	{ cat: 'Failure', q: '"Tell me about a time you missed a deadline."', intent: 'Almost everyone has. They want accountability, transparency, and a clear post-mortem mindset.', structure: 'What was the deadline and why it mattered → what caused the miss (honest breakdown) → how you communicated it when you knew you\'d miss it → what you did to mitigate the impact → what you changed afterward.', tip: 'Communicating early is always the right call. If you did this, lead with it.' },
	{ cat: 'Collaboration', q: '"Describe a time you worked with a difficult team member."', intent: 'Different from direct conflict — this is about sustained collaboration. They want to see empathy, patience, and effectiveness.', structure: 'Who was it and what made it difficult → how it was affecting the work → how you adjusted your approach → what specific tactics you used → the result.', tip: 'Show curiosity about what was driving the difficult behavior, not just frustration with it.' },
	{ cat: 'Collaboration', q: '"Tell me about a time you helped someone on your team succeed."', intent: 'Demonstrates investment in others\' growth — a key leadership signal even for ICs. Shows you\'re not purely self-focused.', structure: 'The person and their challenge → why you got involved → how you helped (specific actions, not just "I supported them") → their outcome → the relationship after.', tip: '' },
	{ cat: 'Ambiguity', q: '"Tell me about a time you had to make a decision with incomplete information."', intent: 'They want to see structured thinking under uncertainty. Can you make a reasoned bet, move forward, and learn?', structure: 'The decision and why you had to move without full info → what information you did have → your decision-making framework → the call you made → the outcome and what you\'d adjust.', tip: 'Great answers name the specific risk you accepted and show that you monitored for it.' },
	{ cat: 'Ambiguity', q: '"How do you handle working on something with no clear roadmap?"', intent: 'This tests initiative, comfort with open-ended problems, and strategic thinking. Classic senior IC/lead question.', structure: 'Give a real example → describe how you created structure from nothing → stakeholders you consulted → how you defined success → the outcome.', trap: 'Don\'t say "I just figure it out." That\'s not an answer.' },
]

const filteredQuestions = computed(() =>
	allQuestions.filter(q => q.cat === activeCategory.value)
)

const hmQuestions = [
	{ q: 'What does the team\'s biggest challenge look like today, and how would this role help?', why: 'Shows you\'re thinking about impact, not just getting the job.' },
	{ q: 'How do you typically give feedback to your team?', why: 'Reveals management style and how you\'d grow under them.' },
	{ q: 'What separates the people on your team who succeed from those who struggle?', why: 'Real answer to "what do you actually need?"' },
	{ q: 'How do you see this team changing in the next 12–18 months?', why: 'Shows you\'re thinking about fit long-term, not just today.' },
	{ q: 'What\'s your team\'s relationship with [product / engineering / leadership]?', why: 'Uncovers dysfunction, silos, and decision-making dynamics.' },
]
</script>

<style scoped>
.view-page {
	padding-bottom: 5rem;
}

.story-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 0.875rem;
	margin-bottom: 3rem;
}

.story-card {
	background: var(--white);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	padding: 1.25rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.story-type {
	font-family: var(--font-display);
	font-size: 1.75rem;
	font-weight: 300;
	color: var(--cream-border);
	line-height: 1;
}

.story-title {
	font-size: 0.9rem;
	font-weight: 700;
	color: var(--navy);
	margin: 0;
}

.story-desc {
	font-size: 0.82rem;
	color: var(--muted);
	line-height: 1.5;
	flex: 1;
}

.story-maps {
	display: flex;
	flex-wrap: wrap;
	gap: 0.375rem;
	margin-top: 0.25rem;
}

.category-tabs {
	display: flex;
	gap: 0.5rem;
	margin-bottom: 1.25rem;
	flex-wrap: wrap;
}

.tab-btn {
	padding: 0.4rem 1rem;
	font-size: 0.83rem;
	font-weight: 500;
	background: var(--white);
	border: 1px solid var(--cream-border);
	border-radius: 100px;
	cursor: pointer;
	color: var(--muted);
	transition: all 0.15s;
	font-family: var(--font-body);
}

.tab-btn:hover {
	border-color: var(--navy);
	color: var(--navy);
}

.tab-btn.active {
	background: var(--navy);
	border-color: var(--navy);
	color: var(--gold-light);
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

.flags-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.25rem;
}

.hm-questions {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.hm-q {
	padding: 1rem 1.25rem;
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	background: var(--cream);
	display: flex;
	flex-direction: column;
	gap: 0.375rem;
}

.hm-q-text {
	font-family: var(--font-display);
	font-size: 1.05rem;
	font-weight: 600;
	color: var(--navy);
}

.hm-q-why {
	font-size: 0.85rem;
	color: var(--muted);
}

@media (max-width: 900px) {
	.story-grid {
		grid-template-columns: repeat(2, 1fr);
	}

	.flags-grid {
		grid-template-columns: 1fr;
	}
}
</style>
