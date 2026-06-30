# 1.4 Market Research with AI

> "Hope is not a strategy. Data is."

You have pain points. Now you need to prove there's a **market** — a large enough group of people who share that pain and have money to spend on solving it.

This lesson teaches you how to use AI as your market research department. You'll size markets, analyze demand signals, identify trends, and build a research brief — all in a few hours instead of weeks.

---

## What Market Research Actually Means (For Founders)

Forget MBA-style market research with 50-page reports. As a solo founder, you need answers to exactly 5 questions:

| Question | Why It Matters | How to Find the Answer |
|----------|---------------|----------------------|
| **How many people have this problem?** | Market too small = not worth building | Google Trends, industry reports, community sizes |
| **Is this problem growing or shrinking?** | Shrinking markets are deathtraps | Google Trends, Exploding Topics, industry news |
| **Do they already spend money on solutions?** | No spending = you're creating demand (very hard) | Existing products, competitor pricing, G2/Capterra |
| **How much do they spend?** | Price anchoring tells you what to charge | Competitor pricing, product reviews |
| **Where do they hang out online?** | You need to reach them affordably | Community research, content analysis |

---

## Research Method 1: Market Sizing with AI

You don't need expensive market research databases. AI can synthesize publicly available data into actionable estimates.

### AI Prompt: Quick Market Sizing

```text
I'm researching the market for [your problem/solution space, e.g., "tools that
help freelance writers manage their client contracts and invoicing"].

Help me estimate the market size:

1. TAM (Total Addressable Market): How many people worldwide could
   potentially use this type of solution? Show your math.
2. SAM (Serviceable Addressable Market): How many of those can I
   realistically reach with online marketing? Show your math.
3. SOM (Serviceable Obtainable Market): How many could I realistically
   capture as a solo founder in Year 1? Show your math.
4. Existing market spending: What do people currently pay for similar
   solutions? List specific products and their prices.
5. Market growth: Is this market growing, stable, or shrinking?
   What's driving the trend?

Important: Cite your sources where possible. Flag any numbers that are
estimates vs. verified data.
```

### How to Interpret the Results

| Market Size (SOM Year 1) | Verdict |
|--------------------------|---------|
| < 1,000 potential customers | ⚠️ Very small — you need high prices ($100+/month) to make it work |
| 1,000 - 10,000 | ✅ Ideal for a solo founder — focused enough to dominate |
| 10,000 - 100,000 | ✅ Great market — room to grow without needing to reach everyone |
| 100,000+ | ⚠️ Large — you'll need strong differentiation to stand out |

### Verification Step (Don't Skip This!)

AI estimates are starting points, not facts. Verify the key numbers:

1. **Use Perplexity** to search: "How many [target audience] are there in [country]?"
2. **Check community sizes** — subreddit subscriber counts, Facebook group members, LinkedIn group sizes
3. **Use Google Trends** to confirm the trend direction
4. **Check Statista, IBISWorld, or similar** for industry reports (many have free summaries)

---

## Research Method 2: Demand Signal Analysis

Demand signals are real-world evidence that people actively want a solution. They're more reliable than market size estimates.

### The 8 Demand Signals

| Signal | Where to Find It | What It Means | Strength |
|--------|------------------|---------------|----------|
| **People search for it** | Google keyword data | Active intent to solve the problem | 🔥 Strong |
| **People complain about it** | Reddit, Twitter, forums | Emotional pain = motivation to pay | 🔥 Strong |
| **Competitors exist** | G2, Product Hunt, Google | Proven market (your job: be better) | 🔥 Strong |
| **People ask for recommendations** | Reddit, Quora, communities | Actively shopping for solutions | 🔥 Strong |
| **Freelancers are hired for it** | Upwork, Fiverr | People pay humans = will pay for tools | ✅ Good |
| **Content about it gets engagement** | YouTube views, blog traffic | Topic interest (but not necessarily buyer intent) | ⚠️ Moderate |
| **People share workarounds** | Forums, Twitter threads | Problem exists but isn't solved well | ✅ Good |
| **Industry experts discuss it** | Podcasts, conferences, newsletters | Problem is real and recognized | ⚠️ Moderate |

### AI Prompt: Demand Signal Search

```text
I'm validating demand for a solution to this problem:
[paste your problem statement]

Search for evidence of demand using these 8 demand signals:

1. Search volume: What keywords do people use to search for solutions
   to this problem? Estimate search volume (high/medium/low).
2. Community complaints: What would people say on Reddit or Twitter
   about this problem? Suggest 5 search queries I should use.
3. Existing competitors: Name 3-5 products or services that partially
   solve this problem. Note their pricing.
4. Recommendation requests: What would a "asking for recommendations"
   post look like for this problem?
5. Freelancer demand: Is anyone hired on Upwork/Fiverr to solve this manually?
6. Content engagement: Are there YouTube videos or blog posts about this
   with high views/engagement?
7. Workaround sharing: What manual workarounds do people currently use?
8. Expert validation: Do industry experts or publications discuss this problem?

Rate overall demand confidence: Low / Medium / High / Very High
Explain your rating.
```

### Step-by-Step: Manual Demand Verification

After running the AI prompt, verify the top signals yourself:

#### Google Keyword Research (Free)
1. Go to [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) (free with Google Ads account — you don't need to run ads)
2. Enter 5 keywords related to your problem
3. Check monthly search volume and competition level
4. Document the results:

| Keyword | Monthly Searches | Competition | Trend |
|---------|-----------------|-------------|-------|
| [keyword 1] | X,XXX | Low/Med/High | ↑ / → / ↓ |

#### Upwork/Fiverr Check
1. Search Upwork for jobs related to your problem
2. If people are hiring freelancers to solve it manually, that's a strong demand signal
3. Note: What do they pay? How often are these jobs posted?

#### Reddit Validation
1. Search Reddit for your problem keywords
2. Sort by "Top" and "All Time"
3. Count posts with 50+ upvotes — each one represents hundreds of silent sufferers

---

## Research Method 3: Trend Analysis

You want to build on a **rising tide**, not a sinking ship. Trend analysis tells you if your market is growing or dying.

### AI Prompt: Trend Analysis

```text
Analyze the trend trajectory for [your problem/niche space]:

1. Is this problem getting bigger or smaller over the next 3-5 years? Why?
2. What macrotrends (technology, demographics, regulation, culture) are
   driving this direction?
3. Are there any upcoming disruptions that could make this problem
   disappear (or get much worse)?
4. What adjacent markets or problems are growing that could feed into
   this opportunity?
5. If I started building a solution today, would the market be bigger
   or smaller by the time I launch?

Be specific. Don't just say "AI is growing." Tell me HOW AI specifically
affects this problem space.
```

### Google Trends Deep Dive

1. Go to [Google Trends](https://trends.google.com)
2. Enter your core problem keyword
3. Set the time range to 5 years
4. Compare with 2-3 related keywords
5. Look for:
   - **Steady upward trend** ✅ = Growing market
   - **Spike then decline** ⚠️ = Fad, be cautious
   - **Flat line** ⚠️ = Stable but not growing
   - **Downward trend** ❌ = Shrinking market

---

## Research Method 4: Audience Profiling

You need to know exactly WHO your customer is — not "small business owners" but "solopreneur coaches with 2-5 years of experience who run their business on Instagram and struggle with booking and invoicing."

### AI Prompt: Deep Audience Profile

```text
I'm building a solution for this problem:
[paste your problem statement]

Create a detailed Ideal Customer Profile (ICP):

DEMOGRAPHICS:
- Age range
- Job title/role
- Industry
- Company size (if B2B)
- Income range
- Location

PSYCHOGRAPHICS:
- What do they value most? (Time, money, status, simplicity)
- What are they afraid of?
- What frustrates them daily?
- What do they aspire to?

BEHAVIORAL:
- Where do they spend time online? (Specific platforms, communities, newsletters)
- What tools do they currently use?
- How do they discover new products? (Search, recommendations, ads, content)
- What's their buying behavior? (Impulse? Research-heavy? Social proof dependent?)

BUDGET:
- How much do they currently spend on solving this problem?
- What price point would feel like a "no-brainer" for them?
- What price point would make them hesitate?
- What price point would be an instant "no"?

Make this feel like a real person, not a marketing segment. Give them a name
and a brief backstory.
```

---

## 🧪 Exercise: Build Your Market Research Brief

### The Deliverable

Create a **one-page Market Research Brief** that summarizes everything you've learned. This is a key document you'll reference throughout LaunchOS.

### Template: Market Research Brief

Copy this into your LaunchOS Journal and fill it in:

```
═══════════════════════════════════════════════════════════
                 MARKET RESEARCH BRIEF
                 [Your Problem/Niche]
                 Date: ___________
═══════════════════════════════════════════════════════════

PROBLEM STATEMENT:
[Your refined problem statement from Lesson 1.2]

MARKET SIZE:
- TAM: [estimate]
- SAM: [estimate]
- SOM (Year 1): [estimate]
- Confidence in estimates: [Low / Medium / High]
- Sources: [list]

DEMAND SIGNALS (verified ✓ or unverified ?):
□ Search volume: [keyword] = [volume]
□ Community complaints: [# of posts with 50+ upvotes]
□ Existing competitors: [list with pricing]
□ Freelancer demand: [# of Upwork jobs]
□ Other: _______________

TREND DIRECTION: [↑ Growing / → Stable / ↓ Declining]
- Key drivers: _______________
- Time horizon: _______________

IDEAL CUSTOMER PROFILE:
- Name: [persona name]
- Title/Role: _______________
- Core frustration: _______________
- Current spending on this problem: $___/month
- Where to reach them: _______________

COMPETITIVE LANDSCAPE (preview — detailed in Lesson 1.5):
- # of direct competitors: ___
- Price range: $___  to $___
- Key gap in market: _______________

OVERALL ASSESSMENT:
Is this market worth pursuing? [YES / MAYBE / NO]
Top reason for your answer: _______________
Biggest risk: _______________
═══════════════════════════════════════════════════════════
```

### Step-by-Step to Complete It

1. Run the Market Sizing prompt → Fill in the market size section
2. Run the Demand Signal prompt, then verify top 3 signals manually → Fill in demand signals
3. Run the Trend Analysis prompt + check Google Trends → Fill in trend direction
4. Run the Audience Profile prompt → Fill in ICP section
5. Do a quick Google search for competitors → Fill in competitive landscape (we'll go deeper in Lesson 1.5)
6. Based on all the data, make your overall assessment

---

## ⚠️ Common Mistakes to Avoid

| Mistake | Why It Hurts | What to Do Instead |
|---------|-------------|-------------------|
| Trusting AI market size estimates without verification | AI frequently makes up statistics | Always verify key numbers with Perplexity, Google, or industry sources |
| Skipping manual verification | AI can only work with its training data | Spend 20 minutes checking real websites, communities, and searches |
| Using only one type of evidence | Any single data point can be misleading | Triangulate: combine search data + community evidence + competitor analysis |
| Getting paralyzed by research | "Just one more data point..." becomes endless | Set a timer for 2-3 hours. Make a decision with what you have |
| Ignoring negative signals | Confirmation bias makes you see only what supports your idea | Actively look for reasons the market might NOT work |
| Targeting "everyone" as your audience | You can't market to everyone affordably | Narrow your ICP until you can describe your customer in one sentence |

---

## 🛠️ Recommended Tools for This Lesson

| Tool | Purpose | Cost |
|------|---------|------|
| [ChatGPT](https://chatgpt.com) or [Claude](https://claude.ai) | Running market research prompts | Free / $20/mo |
| [Perplexity](https://perplexity.ai) | Verifying market data with citations | Free |
| [Google Trends](https://trends.google.com) | Trend validation | Free |
| [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) | Search volume data | Free (with Google account) |
| [G2.com](https://g2.com) | Competitor and market research | Free |

---

## ✅ Action Items

- [ ] Run the Market Sizing prompt for your top problem
- [ ] Verify the market size with at least 2 independent sources
- [ ] Run the Demand Signal prompt and manually verify the top 3 signals
- [ ] Check Google Trends for your core keywords (5-year view)
- [ ] Run the Audience Profile prompt and refine the ICP
- [ ] Complete the Market Research Brief template
- [ ] Make an honest assessment: Is this market worth pursuing?
- [ ] Write in your journal: "My market research tells me ____________ and the evidence is ____________"

---

<div align="center">

**[← Previous Lesson](03-finding-pain-points.md)** | **[Next Lesson: Competitor Research Framework →](05-competitor-research-framework.md)**

</div>
