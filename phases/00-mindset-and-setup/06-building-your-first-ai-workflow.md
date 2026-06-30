# 0.6 Building Your First AI Workflow

> "A prompt gets you an answer. A workflow gets you a business."

Up until now, you've been using AI for single tasks — ask a question, get an answer. That's like using a Ferrari to drive to the mailbox.

In this lesson, you'll learn to **chain AI steps together** into complete workflows that accomplish real business outcomes. By the end, you'll have built and documented your first multi-step AI workflow — a skill that separates hobbyists from operators.

---

## What Is an AI Workflow?

An AI workflow is a **sequence of prompts** where each step's output feeds into the next step's input, building toward a complete business deliverable.

**Single prompt:** "Write me a blog post about productivity."
**Workflow:** Research → Outline → Draft → Edit → Headline Options → Social Media Posts

The workflow produces 6 assets instead of 1, and each one is dramatically higher quality because it was built on the foundation of the previous step.

### Visual: Single Prompt vs. Workflow

```
SINGLE PROMPT:
  [You] → "Write a blog post" → [AI] → Generic blog post

WORKFLOW:
  [You] → Step 1: Research the topic → [AI Output 1: Research brief]
          Step 2: Create outline from research → [AI Output 2: Structured outline]
          Step 3: Write section by section → [AI Output 3: Full draft]
          Step 4: Self-critique and improve → [AI Output 4: Edited draft]
          Step 5: Generate 10 headline options → [AI Output 5: Headlines]
          Step 6: Create social promo copy → [AI Output 6: 5 social posts]

Result: 6 polished assets vs. 1 mediocre one
```

---

## The 5 Types of AI Workflows for Business

### Type 1: Content Creation Workflow

**Use case:** Creating any marketing content (blogs, emails, social posts, landing pages)

| Step | Prompt | Output |
|------|--------|--------|
| 1. Research | "What are the top 5 questions [audience] asks about [topic]?" | Topic brief |
| 2. Outline | "Create a detailed outline covering these questions" | Content structure |
| 3. Draft | "Write section 1 based on this outline. [Paste outline]" | Raw draft |
| 4. Refine | "Improve this draft. Make it more specific and add examples" | Polished draft |
| 5. Repurpose | "Turn the key insights into 5 tweets and 1 LinkedIn post" | Social content |

### Type 2: Research & Analysis Workflow

**Use case:** Understanding a market, competitor, or audience before making a decision

| Step | Prompt | Output |
|------|--------|--------|
| 1. Landscape | "Map the competitive landscape for [niche]" | Market overview |
| 2. Deep Dive | "Analyze [top competitor]. SWOT + pricing + positioning" | Competitor profile |
| 3. Gaps | "What unmet needs exist in this market?" | Opportunity list |
| 4. Validate | "Which of these gaps has the most evidence of demand?" | Ranked opportunities |
| 5. Synthesize | "Summarize findings into a one-page market brief" | Decision document |

### Type 3: Customer Development Workflow

**Use case:** Understanding your target customer before building anything

| Step | Prompt | Output |
|------|--------|--------|
| 1. Persona | "Create a detailed customer persona for [business idea]" | Customer avatar |
| 2. Pain Map | "What are this persona's top 10 daily frustrations?" | Pain point list |
| 3. Interview Script | "Write 10 open-ended interview questions to validate these pains" | Interview guide |
| 4. Simulate | "Role-play as this persona. I'll interview you." | Practice interview |
| 5. Synthesize | "Based on our interview, what product would this person pay for?" | Product hypothesis |

### Type 4: Product Planning Workflow

**Use case:** Going from idea to actionable product specification

| Step | Prompt | Output |
|------|--------|--------|
| 1. Features | "List every feature this product could have" | Feature brainstorm |
| 2. Prioritize | "Score each feature on Impact vs. Effort. Create a 2x2 matrix" | Priority matrix |
| 3. MVP | "Based on the matrix, what is the minimum viable product?" | MVP definition |
| 4. User Stories | "Write user stories for each MVP feature" | Development guide |
| 5. Timeline | "Create a 2-week sprint plan to build this MVP" | Project plan |

### Type 5: Sales & Outreach Workflow

**Use case:** Finding and convincing potential customers

| Step | Prompt | Output |
|------|--------|--------|
| 1. Target | "Who are the ideal first 10 customers for [product]?" | Target list |
| 2. Research | "For each type of target, what do they care about most?" | Insight brief |
| 3. Message | "Write 3 versions of a cold outreach message for each target type" | Outreach templates |
| 4. Objections | "What objections will they have? Write responses to each" | Objection handling |
| 5. Follow-up | "Write a 3-email follow-up sequence for non-responders" | Email sequence |

---

## 🧪 Exercise: Build Your First Complete Workflow

We're going to walk through a real workflow together, step by step. This is the **Content Creation Workflow** applied to a real task: creating your first piece of marketing content.

### Workflow: "Create a LinkedIn Post That Establishes Your Expertise"

Even if you don't have a business yet, this exercise teaches you the workflow pattern.

#### Step 1: Topic Research

Paste this prompt (customize the bracketed sections):

```text
I'm building expertise in [your chosen niche or interest area, e.g., "helping
freelancers manage their finances"]. I want to write a LinkedIn post that
establishes me as someone knowledgeable in this space.

Research and give me:
1. The top 5 topics in this space that get high engagement on LinkedIn
2. For each topic, a "contrarian take" or surprising insight
3. The type of LinkedIn posts that perform best (text-only, carousel,
   polls, etc.)
```

**Save the output. You'll need it for Step 2.**

#### Step 2: Outline Creation

Now paste this follow-up:

```text
Based on the research above, I want to write about topic #[pick one].

Create an outline for a LinkedIn post using this structure:
- Hook (first line that stops the scroll — under 15 words)
- Problem (1-2 sentences about a pain the audience feels)
- Insight (the surprising or contrarian point — 2-3 sentences)
- Evidence (a specific example, stat, or story)
- Takeaway (what the reader should do differently)
- CTA (call to action — what should they do next?)

Give me 3 different versions of this outline with different hooks.
```

#### Step 3: Full Draft

Pick your favorite outline and paste:

```text
Write the full LinkedIn post based on Outline #[your pick].

Rules:
- Keep it under 200 words
- Use short paragraphs (1-2 sentences each)
- Use line breaks between paragraphs (this is how LinkedIn works)
- Make the hook irresistible
- End with a question to encourage comments
- Don't use hashtags (they look spammy)
- Write in first person
- Sound like a real person sharing a genuine insight, not a thought leader robot
```

#### Step 4: Self-Critique and Improve

```text
Review the post you just wrote. Score it on:
1. Hook strength (would someone stop scrolling?) — 1-10
2. Specificity (concrete details vs. vague claims) — 1-10
3. Authenticity (does it sound human?) — 1-10
4. Value (would someone learn something?) — 1-10
5. Engagement potential (would someone comment?) — 1-10

Rewrite the post to score at least 8 on every dimension.
```

#### Step 5: Repurpose

```text
Now take the final LinkedIn post and create:
1. A tweet thread (3-5 tweets) covering the same insight
2. A shorter tweet (single tweet, under 280 characters)
3. An email subject line + first paragraph if this were a newsletter issue
4. A title for a blog post that expands on this topic
```

---

## Documenting Your Workflows

A workflow you can't repeat is a workflow you'll lose. Here's how to document them:

### The Workflow Card Template

For every workflow you create, save a card like this:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WORKFLOW NAME: [Content Creation — LinkedIn Post]
PURPOSE: [Create engaging LinkedIn content in 20 minutes]
AI TOOL: [ChatGPT / Claude]
STEPS: [5]
TIME: [~20 minutes]
OUTPUTS: [LinkedIn post + tweet thread + tweet + email intro + blog title]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Topic Research
  → Prompt: [saved prompt]
  → Output feeds into: Step 2

Step 2: Outline Creation
  → Prompt: [saved prompt]
  → Output feeds into: Step 3

Step 3: Full Draft
  → Prompt: [saved prompt]
  → Output feeds into: Step 4

Step 4: Self-Critique
  → Prompt: [saved prompt]
  → Output feeds into: Step 5

Step 5: Repurpose
  → Prompt: [saved prompt]
  → Final outputs: [list]

NOTES: [Any tips or adjustments for next time]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Save this in your LaunchOS Journal under **"My Workflows."**

---

## ⚠️ Common Mistakes to Avoid

| Mistake | Why It Hurts | What to Do Instead |
|---------|-------------|-------------------|
| Trying to do the entire workflow in one prompt | AI loses context and produces shallow output | Break it into clear steps |
| Not saving intermediate outputs | You can't go back and iterate | Copy each step's output before moving to the next |
| Skipping the self-critique step | You miss obvious quality improvements | Always include an evaluation step |
| Making workflows too complex | 15-step workflows are brittle and tedious | Keep workflows to 3-7 steps max |
| Not documenting workflows you'll reuse | You'll recreate them from scratch next time | Save a Workflow Card every time |
| Running all steps in a single conversation | Long conversations make AI lose earlier context | For workflows >5 steps, consider starting a fresh conversation and pasting key context |

---

## 🛠️ Recommended Tools for This Lesson

| Tool | Purpose | Cost |
|------|---------|------|
| [ChatGPT](https://chatgpt.com) or [Claude](https://claude.ai) | Running the full workflow exercise | Free / $20/mo |
| [Notion](https://notion.so) or Google Docs | Documenting your Workflow Cards | Free |

---

## ✅ Action Items

- [ ] Read through all 5 workflow types and identify which you'll use first
- [ ] Complete the full "LinkedIn Post" workflow exercise (all 5 steps)
- [ ] Create a Workflow Card for the exercise and save it to your journal
- [ ] Identify 2 more workflows you'll need for your business
- [ ] Write in your journal: "The workflow that will save me the most time is ____________"

---

<div align="center">

**[← Previous Lesson](05-common-beginner-mistakes.md)** | **[Next Lesson: Recommended Tool Stack →](07-recommended-tool-stack.md)**

</div>
