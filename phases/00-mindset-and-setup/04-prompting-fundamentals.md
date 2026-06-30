# 0.4 Prompting Fundamentals

> "The quality of your AI output is directly proportional to the quality of your input. Garbage in, garbage out. Gold in, gold out."

This is the most important lesson in Phase 0. Maybe the most important in all of LaunchOS.

Prompting is not "talking to a chatbot." It's a **skill** — one that separates people who get mediocre AI output from people who get output so good it feels like cheating. This lesson teaches you that skill from the ground up.

---

## Why Most People Get Bad Results from AI

Look at the difference:

### ❌ Beginner Prompt
```text
Give me business ideas
```

**What AI hears:** "Give me a generic list with no context about who I am, what I want, or what constraints I have."

**Result:** A vanilla list of 10 ideas you've already seen everywhere (dropshipping, print-on-demand, online courses...).

### ✅ Expert Prompt
```text
Context: I'm a former high school teacher with 8 years of experience. I now work
a corporate job but have 10 hours/week for a side business. I'm good at explaining
complex topics simply and creating structured learning materials. My budget is $50/month.

Task: Generate 7 business ideas that leverage my teaching skills for a non-education
audience. I don't want to create another online course platform.

Constraints:
- Each idea must be achievable as a solo founder
- Must be able to generate first revenue within 30 days
- Should not require coding skills
- Prefer digital products or productized services

Format: Present as a table with columns:
1. Idea Name
2. One-sentence pitch
3. Target Customer
4. Revenue Model (one-time, subscription, per-project)
5. Estimated time to first sale
6. Why my teaching background is an unfair advantage
```

**Result:** 7 specific, tailored ideas that actually fit this person's life.

**The difference isn't AI capability — it's prompt quality.**

---

## The CREATE Prompting Framework

Whenever you prompt AI for business tasks, use this structure:

| Letter | Element | What It Does | Example |
|--------|---------|-------------|---------|
| **C** | Context | Tells AI who you are and your situation | "I'm a freelance designer with 3 years of experience..." |
| **R** | Request | The specific task you want done | "Generate 5 pricing strategies for my design service..." |
| **E** | Examples & Constraints | What good output looks like and what to avoid | "Like Basecamp's pricing page, not like enterprise SaaS..." |
| **A** | Audience | Who the output is for | "My target customer is a small business owner with no design budget..." |
| **T** | Tone | How it should sound | "Professional but friendly, like a smart friend giving advice..." |
| **E** | Extras | Output format, length, special instructions | "Present as a comparison table. Keep each description under 50 words." |

### You Don't Need All Six Every Time

- Quick brainstorming? → C + R is often enough
- Writing content? → C + R + A + T is essential
- Complex analysis? → Use all six

**The more important the output, the more elements you should include.**

---

## The 7 Prompt Patterns Every Business Builder Needs

### Pattern 1: The Expert Advisor

Make AI act as a specific expert to get domain-specific advice.

```text
You are a pricing strategist who has helped 200+ SaaS companies set their pricing.
You specialize in early-stage products with less than 100 customers.

I'm launching a tool that helps freelance writers manage their client contracts.
My competitors charge $15-30/month. I'm a solo founder with no funding.

What pricing strategy do you recommend, and why? Consider:
- My positioning as a new entrant
- The psychology of freelancers (price-sensitive but value time)
- How to structure tiers that encourage upgrades
```

**Why it works:** Giving AI a specific role with expertise activates more relevant knowledge patterns than a generic question.

### Pattern 2: The Structured Generator

When you need AI to produce large volumes of structured content.

```text
Generate 20 tweet ideas for a brand that sells AI productivity templates to
solopreneurs.

Rules:
- 5 should be educational (teach something useful)
- 5 should be promotional (highlight the product)
- 5 should be engagement-bait (questions, polls, hot takes)
- 5 should be personal stories (founder journey content)

Format each as:
[Type] | Tweet text (under 280 characters) | Suggested posting time (morning/
afternoon/evening)
```

**Why it works:** Structure + constraints force AI to be specific and varied instead of generating 20 similar items.

### Pattern 3: The Devil's Advocate

Use AI to poke holes in your own ideas before the market does.

```text
I'm planning to launch a subscription box for remote workers that delivers
productivity snacks and desk accessories monthly for $39/month.

I want you to be brutally honest. Act as a skeptical investor who has seen
1,000 subscription box pitches.

1. List 5 reasons this business might fail
2. Identify the 3 biggest assumptions I'm making
3. Name 3 competitors I probably haven't considered
4. What would you need to see to believe this could work?
5. If you had to pivot this idea to make it 10x more likely to succeed,
   what would you change?
```

**Why it works:** AI won't challenge you unless you explicitly ask. This prompt forces constructive criticism.

### Pattern 4: The Chain-of-Thought Analyzer

For complex decisions, ask AI to think step by step.

```text
I need to decide between two business ideas:

Idea A: A Notion template pack for project managers ($49 one-time)
Idea B: A weekly newsletter for product managers ($10/month subscription)

Walk me through the decision step by step:
1. First, analyze the market size for each
2. Then, compare the effort to create and maintain each
3. Next, estimate the revenue potential at 100, 500, and 1000 customers
4. Consider which one builds a more valuable long-term asset
5. Finally, give me your recommendation with the top 3 reasons why

Show your reasoning at each step. Don't just give me the answer.
```

**Why it works:** "Step by step" and "show your reasoning" force AI into deeper analysis instead of a quick surface-level answer.

### Pattern 5: The Template Builder

Have AI create reusable frameworks you can use repeatedly.

```text
Create a reusable template I can use to evaluate any business idea in 5 minutes.

The template should include:
- A scoring rubric (1-10 scale) for 5 key criteria
- 3 yes/no "kill questions" that immediately disqualify bad ideas
- A space for noting the target customer in one sentence
- A space for the one-sentence value proposition
- A "next step" recommendation based on the total score

Make it something I can copy-paste into a Google Doc and fill in quickly.
```

**Why it works:** You're teaching AI to build tools for you, not just answer questions. These templates compound in value.

### Pattern 6: The Iterative Refiner

Start broad, then narrow down with follow-up prompts.

**Prompt 1:**
```text
Give me 10 niches where solopreneurs are underserved by existing tools.
```

**Prompt 2 (after reviewing the list):**
```text
Let's go deeper on niche #3 (freelance translators). What are the 5 biggest
operational pain points they face weekly? For each pain point, rate the
severity (1-10) and how well existing tools solve it (1-10).
```

**Prompt 3 (after reviewing):**
```text
For pain point #2 (managing glossaries across multiple clients), brainstorm
5 simple product ideas that a non-technical founder could build in 2 weeks
using no-code tools.
```

**Why it works:** Iterating is faster than trying to write one perfect mega-prompt. Each step builds on the previous.

### Pattern 7: The Role-Play Simulator

Practice real business scenarios before they happen.

```text
Let's role-play a customer discovery interview.

You are Sarah, a 35-year-old freelance graphic designer who makes $80,000/year.
You use Canva, Figma, and Adobe Illustrator. You have 12 regular clients.
Your biggest frustration is managing revision requests across email, Slack,
and text messages.

I'm going to interview you about your workflow pain points. Stay in character.
Give realistic, slightly hesitant answers like a real person would — don't
volunteer information too eagerly. Push back on leading questions.

I'll start: "Hey Sarah, thanks for chatting with me. Can you walk me through
what a typical day looks like for you?"
```

**Why it works:** This gives you safe practice before real conversations. AI is surprisingly good at staying in character.

---

## The Prompt Quality Checklist

Before you hit Enter on any important prompt, run through this checklist:

- [ ] **Did I provide context?** (Who am I? What's my situation?)
- [ ] **Is my request specific?** (Not "help me" but "generate 5 pricing options for...")
- [ ] **Did I include constraints?** (Budget, timeline, skill level, what to avoid)
- [ ] **Did I specify the audience?** (Who will read/use this output?)
- [ ] **Did I request a format?** (Table, list, paragraph, step-by-step)
- [ ] **Am I asking for too much in one prompt?** (If yes, break it into steps)

---

## 🧪 Exercise: Build Your Prompt Library

Your first concrete asset in LaunchOS: a personal library of prompts you'll reuse throughout the course.

### Step 1: Create a Document

In your LaunchOS Journal (or a separate doc), create a section called **"My Prompt Library."**

### Step 2: Create and Test These 5 Prompts

Copy each template below, customize the bracketed sections for YOUR situation, and run them. Save the prompts (not just the outputs) for future reuse.

**Prompt 1 — The Daily Brainstorm Opener:**
```text
I'm working on [your business area]. Today I need help with [specific task].
Before we start, ask me 3 clarifying questions that will help you give me
better answers.
```

**Prompt 2 — The Content Creator:**
```text
Write a [type: tweet/email/blog intro/LinkedIn post] about [topic] for
[audience]. The tone should be [professional/casual/inspiring/educational].
It should be [length: under 100 words/280 chars/3 paragraphs]. Include
a call to action that [specific desired action].
```

**Prompt 3 — The Competitor Analyst:**
```text
Analyze [competitor name/URL] as a potential competitor to my business.
Identify: 1) Their target customer, 2) Their pricing model, 3) Their
strengths and weaknesses based on customer reviews, 4) Gaps in their
offering that I could exploit. Present as a SWOT analysis.
```

**Prompt 4 — The Decision Maker:**
```text
I'm deciding between [Option A] and [Option B]. My constraints are
[time/money/skills]. My goal is [specific outcome]. Create a comparison
table and give me a clear recommendation with reasoning.
```

**Prompt 5 — The Accountability Coach:**
```text
I'm building [business type] and my goal for this week is [specific goal].
I've completed [what you've done]. I'm stuck on [specific blocker].
Help me create a specific action plan for the next 7 days with daily
tasks. Be realistic — I have [X] hours available this week.
```

### Step 3: Grade Your Results

For each prompt you ran, rate the output:
- ⭐⭐⭐ — Great, I can use this almost as-is
- ⭐⭐ — Decent, needs some editing
- ⭐ — Generic or off-target

For any ⭐ or ⭐⭐ results, try adding more context or constraints and run again. Notice how the output improves.

---

## ⚠️ Common Mistakes to Avoid

| Mistake | Why It Hurts | What to Do Instead |
|---------|-------------|-------------------|
| Writing prompts like Google searches | You get search-result quality answers | Write prompts like you're briefing a smart employee |
| Not iterating on prompts | You accept mediocre first results | Treat the first output as a draft, then refine |
| Making prompts too long on the first try | You might confuse the AI with competing instructions | Start simple, then add constraints in follow-ups |
| Never saving good prompts | You'll reinvent the wheel every time | Build and maintain your Prompt Library |
| Using the same prompt for different tools | Each AI has different strengths | Adjust prompts based on the tool's personality |
| Forgetting to specify format | You get a wall of text when you wanted a table | Always tell AI what format you want |

---

## 🛠️ Recommended Tools for This Lesson

| Tool | Purpose | Cost |
|------|---------|------|
| [ChatGPT](https://chatgpt.com) or [Claude](https://claude.ai) | Running and testing all prompts | Free / $20/mo |
| Google Docs / Notion | Storing your Prompt Library | Free |

---

## ✅ Action Items

- [ ] Read through all 7 prompt patterns and understand when to use each
- [ ] Create your Prompt Library document
- [ ] Customize and run all 5 starter prompts
- [ ] Grade your results and iterate on any ⭐ or ⭐⭐ outputs
- [ ] Save at least 5 working prompts to your library
- [ ] Memorize the CREATE framework (or save it as a reference card)
- [ ] Write in your journal: "The prompt pattern I'll use most is ____________"

---

<div align="center">

**[← Previous Lesson](03-choosing-the-right-ai-tools.md)** | **[Next Lesson: Common Beginner Mistakes →](05-common-beginner-mistakes.md)**

</div>
