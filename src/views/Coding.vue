<template>
	<div class="view-page">
		<div class="page-container">
			<div class="page-header animate-fade-up anim-d1">
				<p class="eyebrow"><span></span>Module 03 — Technical Interview</p>
				<h1>Technical Round</h1>
				<p>The technical interview tests problem-solving under pressure, not just coding ability. What you say while you code matters as much as the code itself. Learn to think out loud, structure your approach, and communicate trade-offs.</p>
			</div>

			<div class="tip-box blue animate-fade-up anim-d2" style="margin-bottom: 3rem;">
				<span class="tip-icon">💡</span>
				<div>
					<strong>The interviewer's goal:</strong> They want to see how you think, not just whether you can arrive at the optimal solution in 30 minutes. A well-communicated O(n²) solution beats a silent O(n log n) one every time.
				</div>
			</div>

			<!-- UMPIRE Method -->
			<div class="animate-fade-up anim-d2" style="margin-bottom: 3rem;">
				<div class="section-label">Problem-Solving Framework</div>
				<div class="card">
					<h3 style="font-size: 1.4rem; margin-bottom: 0.5rem;">The UMPIRE Method</h3>
					<p style="color: var(--muted); font-size: 0.95rem; margin-bottom: 1.5rem;">A proven verbal framework for live coding interviews. Walk through each step before touching the keyboard.</p>
					<div class="umpire-grid">
						<div class="umpire-step" v-for="step in umpire" :key="step.letter">
							<div class="umpire-letter">{{ step.letter }}</div>
							<div class="umpire-content">
								<strong>{{ step.label }}</strong>
								<span>{{ step.desc }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Algorithm Patterns -->
			<div class="animate-fade-up anim-d3" style="margin-bottom: 3rem;">
				<div class="section-label">High-Yield Algorithm Patterns</div>
				<div class="pattern-tabs">
					<button class="tab-btn" v-for="p in patterns" :key="p.name" :class="{ active: activePattern === p.name }" @click="activePattern = p.name">
						{{ p.name }}
					</button>
				</div>
				<div class="pattern-detail card" v-if="currentPattern">
					<div class="pattern-header">
						<div>
							<h3 style="font-size: 1.3rem; margin-bottom: 0.25rem;">{{ currentPattern.name }}</h3>
							<p style="color: var(--muted); font-size: 0.9rem;">{{ currentPattern.desc }}</p>
						</div>
						<div class="difficulty-group">
							<span class="pattern-complexity">{{ currentPattern.complexity }}</span>
						</div>
					</div>
					<div class="pattern-body">
						<div class="pattern-when">
							<div class="example-label">When to use this pattern</div>
							<ul class="checklist" style="margin-top: 0.5rem;">
								<li v-for="w in currentPattern.when" :key="w">{{ w }}</li>
							</ul>
						</div>
						<div class="pattern-problems">
							<div class="example-label">Classic problems</div>
							<div class="problem-list">
								<div class="problem-item" v-for="p in currentPattern.problems" :key="p.name">
									<div class="problem-name">{{ p.name }}</div>
									<div class="difficulty-dots">
										<span v-for="n in 3" :key="n" :class="{ filled: n <= p.diff }"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="currentPattern.template" style="margin-top: 1.5rem;">
						<div class="example-label">Pattern Template</div>
						<div class="code-block" v-html="currentPattern.template"></div>
					</div>
				</div>
			</div>

			<!-- Live Coding Tips -->
			<div class="animate-fade-up anim-d4" style="margin-bottom: 3rem;">
				<div class="section-label">Live Coding Protocol</div>
				<div class="protocol-grid">
					<div class="protocol-step" v-for="(step, i) in protocol" :key="i">
						<div class="protocol-num">{{ String(i + 1).padStart(2, '0') }}</div>
						<h4>{{ step.title }}</h4>
						<p>{{ step.desc }}</p>
					</div>
				</div>
			</div>

			<!-- System Design -->
			<div class="card animate-fade-up anim-d5" style="margin-bottom: 3rem;">
				<h3 style="font-size: 1.3rem; margin-bottom: 0.375rem;">System Design Fundamentals</h3>
				<p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 1.5rem;">For senior IC and above. The design interview tests breadth, trade-off reasoning, and communication — not memorization.</p>
				<div class="design-framework">
					<div class="design-step" v-for="d in designFramework" :key="d.label">
						<div class="design-step-label">{{ d.label }}</div>
						<div class="design-step-content">
							<strong>{{ d.title }}</strong>
							<p>{{ d.desc }}</p>
						</div>
					</div>
				</div>
				<div class="tip-box gold" style="margin-top: 1.5rem;">
					<span class="tip-icon">🏗️</span>
					<div>Practice systems: URL shortener, Twitter timeline, ride-sharing dispatch, search autocomplete, and distributed rate limiter. These cover almost every concept that comes up in system design interviews.</div>
				</div>
			</div>

			<!-- Red flags -->
			<div class="card animate-fade-up anim-d5">
				<h3 style="font-size: 1.3rem; margin-bottom: 1rem;">What interviewers penalize in technical rounds</h3>
				<div class="flags-two">
					<div>
						<div class="example-label" style="margin-bottom: 0.75rem;">Coding habits to avoid</div>
						<ul class="checklist">
							<li>Starting to code before understanding the problem</li>
							<li>Silent coding — not narrating your thought process</li>
							<li>Over-optimizing without working solution first</li>
							<li>Not considering edge cases (null, empty, negative)</li>
							<li>Giving up without asking for a hint</li>
						</ul>
					</div>
					<div>
						<div class="example-label" style="margin-bottom: 0.75rem;">Communication habits that impress</div>
						<ul class="checklist">
							<li>Restating the problem before solving it</li>
							<li>Walking through an example before coding</li>
							<li>Naming the time/space complexity of your solution</li>
							<li>Asking: "Is there anything you'd like me to optimize?"</li>
							<li>Testing your code with examples after writing it</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'

const umpire = [
	{ letter: 'U', label: 'Understand', desc: 'Repeat the problem in your own words. Clarify what input/output looks like. Ask about constraints.' },
	{ letter: 'M', label: 'Match', desc: 'What data structures or patterns does this look like? Say it out loud.' },
	{ letter: 'P', label: 'Plan', desc: 'Walk through your approach before coding. "I\'m going to use a hash map to track..."' },
	{ letter: 'I', label: 'Implement', desc: 'Code it up. Keep narrating. Name your variables clearly.' },
	{ letter: 'R', label: 'Review', desc: 'Trace through your code with an example. Catch off-by-one errors.' },
	{ letter: 'E', label: 'Evaluate', desc: 'State time and space complexity. Suggest optimizations if time permits.' },
]

const activePattern = ref('Two Pointers')

const patterns = [
	{
		name: 'Two Pointers',
		desc: 'Use two indices moving toward each other or in the same direction to avoid O(n²) nested loops.',
		complexity: 'O(n) time, O(1) space',
		when: [
			'Sorted array input',
			'Looking for pairs that meet a condition',
			'Removing duplicates in-place',
			'Palindrome checks',
		],
		problems: [
			{ name: 'Two Sum II (sorted)', diff: 1 },
			{ name: 'Container With Most Water', diff: 2 },
			{ name: '3Sum', diff: 2 },
			{ name: 'Trapping Rain Water', diff: 3 },
		],
		template: `<span class="code-keyword">def</span> two_pointer(arr):
    left, right = 0, len(arr) - 1
    <span class="code-keyword">while</span> left < right:
        <span class="code-comment"># condition check</span>
        <span class="code-keyword">if</span> condition:
            <span class="code-keyword">return</span> result
        <span class="code-keyword">elif</span> arr[left] + arr[right] < target:
            left += 1
        <span class="code-keyword">else</span>:
            right -= 1`,
	},
	{
		name: 'Sliding Window',
		desc: 'Maintain a window of elements that satisfies a constraint; expand or shrink as you iterate.',
		complexity: 'O(n) time, O(k) space',
		when: [
			'Subarray or substring problems',
			'Finding max/min length meeting a condition',
			'String containing all characters of another',
			'Problems with k-size windows',
		],
		problems: [
			{ name: 'Longest Substring Without Repeating', diff: 2 },
			{ name: 'Minimum Window Substring', diff: 3 },
			{ name: 'Max Sum Subarray of Size K', diff: 1 },
			{ name: 'Fruit Into Baskets', diff: 2 },
		],
		template: `<span class="code-keyword">def</span> sliding_window(s):
    left = 0
    counts = {}
    result = 0
    <span class="code-keyword">for</span> right <span class="code-keyword">in</span> range(len(s)):
        counts[s[right]] = counts.get(s[right], 0) + 1
        <span class="code-keyword">while</span> invalid(counts):  <span class="code-comment"># shrink</span>
            counts[s[left]] -= 1
            left += 1
        result = max(result, right - left + 1)
    <span class="code-keyword">return</span> result`,
	},
	{
		name: 'BFS / DFS',
		desc: 'Graph and tree traversal. BFS for shortest paths; DFS for exhaustive search and backtracking.',
		complexity: 'O(V + E) time, O(V) space',
		when: [
			'Tree or graph traversal',
			'Shortest path (unweighted) → BFS',
			'All paths, cycles, connected components → DFS',
			'Level-order processing',
		],
		problems: [
			{ name: 'Number of Islands', diff: 2 },
			{ name: 'Word Ladder', diff: 3 },
			{ name: 'Binary Tree Level Order Traversal', diff: 1 },
			{ name: 'Clone Graph', diff: 2 },
		],
		template: `<span class="code-comment"># BFS template</span>
from collections import deque
<span class="code-keyword">def</span> bfs(graph, start):
    queue = deque([start])
    visited = {start}
    <span class="code-keyword">while</span> queue:
        node = queue.popleft()
        <span class="code-keyword">for</span> neighbor <span class="code-keyword">in</span> graph[node]:
            <span class="code-keyword">if</span> neighbor <span class="code-keyword">not in</span> visited:
                visited.add(neighbor)
                queue.append(neighbor)`,
	},
	{
		name: 'Dynamic Programming',
		desc: 'Break problems into overlapping subproblems; store results to avoid recomputation.',
		complexity: 'O(n²) typical, O(n) space',
		when: [
			'"How many ways..." or "Maximum/minimum..." questions',
			'String matching or subsequence problems',
			'Optimal substructure exists',
			'Greedy doesn\'t work',
		],
		problems: [
			{ name: 'Climbing Stairs', diff: 1 },
			{ name: 'Longest Common Subsequence', diff: 2 },
			{ name: 'Coin Change', diff: 2 },
			{ name: '0/1 Knapsack', diff: 3 },
		],
		template: `<span class="code-comment"># Bottom-up DP</span>
<span class="code-keyword">def</span> dp_solution(n):
    dp = [0] * (n + 1)
    dp[0] = base_case
    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> range(1, n + 1):
        dp[i] = <span class="code-comment"># transition from dp[i-1], dp[i-2]...</span>
    <span class="code-keyword">return</span> dp[n]`,
	},
	{
		name: 'Binary Search',
		desc: 'Eliminate half the search space each step. Far broader than just "search in sorted array."',
		complexity: 'O(log n) time, O(1) space',
		when: [
			'Sorted array search',
			'"Find the minimum/maximum value that satisfies..."',
			'Search space is monotonic',
			'Rotated sorted arrays',
		],
		problems: [
			{ name: 'Search in Rotated Sorted Array', diff: 2 },
			{ name: 'Find Minimum in Rotated Array', diff: 2 },
			{ name: 'Koko Eating Bananas', diff: 2 },
			{ name: 'Median of Two Sorted Arrays', diff: 3 },
		],
		template: `<span class="code-keyword">def</span> binary_search(arr, target):
    left, right = 0, len(arr) - 1
    <span class="code-keyword">while</span> left <= right:
        mid = left + (right - left) // 2
        <span class="code-keyword">if</span> arr[mid] == target:
            <span class="code-keyword">return</span> mid
        <span class="code-keyword">elif</span> arr[mid] < target:
            left = mid + 1
        <span class="code-keyword">else</span>:
            right = mid - 1
    <span class="code-keyword">return</span> -1`,
	},
]

const currentPattern = computed(() =>
	patterns.find(p => p.name === activePattern.value)
)

const protocol = [
	{ title: 'Read, don\'t solve', desc: 'Read the problem twice. Don\'t start solving. Clarify ambiguities first.' },
	{ title: 'State your assumptions', desc: '"I\'m assuming the input is always valid integers. Is that correct?"' },
	{ title: 'Brute force first', desc: 'Name a brute force approach. Even if you won\'t code it, it shows you understand the problem.' },
	{ title: 'Walk an example', desc: 'Trace through a small example manually before coding. Draw it if needed.' },
	{ title: 'Code with narration', desc: '"I\'m creating a hash map to store frequencies as I iterate..." Don\'t go silent.' },
	{ title: 'Test with edge cases', desc: 'Empty input, single element, negatives, duplicates. Call these out explicitly.' },
]

const designFramework = [
	{ label: '01', title: 'Clarify Requirements', desc: 'Ask: who are the users, what scale (DAU, QPS), what\'s the most critical feature? Write them down visibly.' },
	{ label: '02', title: 'Estimate Scale', desc: 'Do back-of-envelope math: storage, bandwidth, QPS. This drives architecture decisions.' },
	{ label: '03', title: 'High-Level Design', desc: 'Draw the major components: client, load balancer, app servers, database, cache. Start simple.' },
	{ label: '04', title: 'Deep Dive', desc: 'Pick 1–2 components to go deep on. The interviewer often directs this. Show trade-offs.' },
	{ label: '05', title: 'Address Bottlenecks', desc: 'Identify the hardest scaling problems: hot keys, write-heavy loads, consistency requirements.' },
]
</script>

<style scoped>
.view-page {
	padding-bottom: 5rem;
}

.umpire-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0.875rem;
}

.umpire-step {
	display: flex;
	gap: 0.875rem;
	align-items: flex-start;
	padding: 1rem;
	background: var(--cream);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
}

.umpire-letter {
	font-family: var(--font-display);
	font-size: 1.75rem;
	font-weight: 700;
	color: var(--gold);
	line-height: 1;
	flex-shrink: 0;
	width: 1.5rem;
}

.umpire-content {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}

.umpire-content strong {
	font-size: 0.875rem;
	font-weight: 600;
	color: var(--navy);
}

.umpire-content span {
	font-size: 0.82rem;
	color: var(--muted);
	line-height: 1.5;
}

.pattern-tabs {
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

.pattern-header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 1.5rem;
}

.pattern-complexity {
	font-family: 'Courier New', monospace;
	font-size: 0.8rem;
	color: var(--muted);
	background: var(--cream-dark);
	padding: 0.25rem 0.625rem;
	border-radius: var(--radius);
	border: 1px solid var(--cream-border);
	white-space: nowrap;
}

.pattern-body {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.5rem;
}

.problem-list {
	display: flex;
	flex-direction: column;
	gap: 0.625rem;
	margin-top: 0.5rem;
}

.problem-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 0.75rem;
	background: var(--cream);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius);
	font-size: 0.875rem;
	color: var(--charcoal);
}

.protocol-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
}

.protocol-step {
	background: var(--white);
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	padding: 1.25rem;
}

.protocol-num {
	font-family: var(--font-display);
	font-size: 2rem;
	font-weight: 300;
	color: var(--cream-border);
	line-height: 1;
	margin-bottom: 0.5rem;
}

.protocol-step h4 {
	font-size: 0.95rem;
	font-weight: 700;
	margin-bottom: 0.375rem;
	color: var(--navy);
}

.protocol-step p {
	font-size: 0.85rem;
	color: var(--muted);
	line-height: 1.55;
}

.design-framework {
	display: flex;
	flex-direction: column;
	gap: 0;
	border: 1px solid var(--cream-border);
	border-radius: var(--radius-md);
	overflow: hidden;
}

.design-step {
	display: flex;
	align-items: flex-start;
	gap: 1.25rem;
	padding: 1rem 1.25rem;
	border-bottom: 1px solid var(--cream-border);
	background: var(--cream);
}

.design-step:last-child {
	border-bottom: none;
}

.design-step-label {
	font-family: var(--font-display);
	font-size: 1.1rem;
	font-weight: 600;
	color: var(--gold);
	flex-shrink: 0;
	width: 2rem;
}

.design-step-content strong {
	display: block;
	font-size: 0.9rem;
	color: var(--navy);
	margin-bottom: 0.2rem;
}

.design-step-content p {
	font-size: 0.83rem;
	color: var(--muted);
	line-height: 1.55;
	margin: 0;
}

.flags-two {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
}

@media (max-width: 800px) {
	.umpire-grid {
		grid-template-columns: 1fr 1fr;
	}

	.protocol-grid {
		grid-template-columns: 1fr 1fr;
	}

	.pattern-body {
		grid-template-columns: 1fr;
	}

	.flags-two {
		grid-template-columns: 1fr;
	}
}
</style>
