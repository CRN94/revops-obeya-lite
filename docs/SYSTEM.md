# System Documentation: Obeya-lite

This document explains the Lean manufacturing principles behind Obeya-lite and how they apply to GTM and RevOps work.

## What is Obeya?

**Obeya** (大部屋, "big room") is a visual management practice from Toyota. It creates a shared space where teams coordinate work, surface problems, and make decisions based on current reality rather than optimistic plans.

In this board:
- The "big room" is the screen-share
- Visual management makes status and constraints immediately obvious
- No guessing whether we're overloaded or on track

## Core principles

### 1. Pull system

Work **flows** through the board from left to right. Importantly:

- Work only **moves right** when the next column has capacity
- Downstream columns "pull" work when ready
- Upstream columns cannot "push" work when downstream is full

**Why this matters in RevOps:**  
Most ops teams treat work as a queue: everything comes in, we try to do it all, and we burn out. Pull systems expose true capacity and force prioritization before overcommitment.

Example: If Interview is at WIP limit (3/3), no new cards move from Outbound. This forces the question: "What needs to happen for Interview to clear?" rather than piling on more outbound.

### 2. WIP (Work in Progress) limits

Each stage has a **maximum number of items** allowed at once:

| Stage      | WIP Limit | Rationale |
|------------|-----------|-----------|
| Backlog    | None      | Queue of demand; prioritized but not committed |
| Research   | 3         | Deep research is time-intensive; more than 3 diffuses focus |
| Outbound   | 5         | Active applications/proposals require follow-up; >5 risks shallow engagement |
| Interview  | 3         | Each interview thread needs prep and follow-through |
| Offer      | 2         | Final negotiations demand full attention |

**Why limits matter:**
- Exposes bottlenecks (if Interview is always full, that's the constraint)
- Prevents context-switching overhead
- Forces completion over starting new work

In RevOps, unlimited WIP is the norm: "Just add it to my backlog." This board makes overload **visible** and **undeniable**.

### 3. Andon

**Andon** (行灯, "lantern") is a manufacturing term for a visual alert that stops the line when something goes wrong.

On this board, andon triggers when:
- **WIP limit exceeded**: A column has more cards than its limit
- **Blocked card**: Any card sits in one stage >3 days without movement

When andon shows:
- Red banner at the top with the specific issue
- Affected columns highlighted in red
- Blocked cards marked with ⚠️

**Why andon matters in GTM:**  
Traditional ops hide problems until they're crises. Andon makes small problems visible while they're still fixable. A card blocked for 4 days is a conversation to have, not a silent failure.

### 4. Swim lanes

This board has two horizontal lanes:
- **Job**: Full-time employment opportunities
- **Consulting**: Fractional or project-based work

Separate lanes allow:
- **Parallel flow**: Different value streams, different rhythms
- **Resource clarity**: How much capacity goes to each?
- **Strategic balance**: Avoid accidentally over-indexing on one lane

In a RevOps org, swim lanes might be:
- Sales Ops vs. Customer Success Ops
- Demand Gen vs. Product Launch support
- Strategic projects vs. BAU requests

## How to use this board

### Daily standup questions

1. **What moved?** (Celebrate flow)
2. **What's blocked?** (Address andon)
3. **Where are we at/over WIP?** (Identify constraints)
4. **What can we pull next?** (Maintain flow)

### Constraint identification

The column that is **most often at or over WIP** is your system constraint. That's where improvement effort should focus:

- Interview at 3/3 frequently? → Need better interview prep or faster scheduling
- Outbound at 5/5 and blocking Research? → Outbound process needs streamlining

### Pull decisions

Before moving a card right, ask:
1. Is there capacity in the next column?
2. If not, what blocks flow? Can we resolve it?
3. Should we reprioritize rather than add more upstream work?

## GTM & RevOps applications

This board is a proof of concept. The same principles apply to:

- **Lead lifecycle management**: MQL → SQL → Opp → Closed
- **Support ticket flow**: New → Triage → Assigned → Resolved
- **Campaign delivery**: Idea → Briefed → Built → Launched
- **Tooling requests**: Backlog → Spec → Build → Deploy

In every case:
- Limit WIP per stage
- Pull, don't push
- Make blockers visible (andon)
- Measure flow, not just output

## Further reading

- *The Goal* by Eliyahu Goldratt (Theory of Constraints)
- *The Phoenix Project* by Gene Kim et al. (Lean + DevOps in IT)
- *Lean Thinking* by Womack & Jones (Lean principles)
- Toyota Production System documentation (original Obeya and andon practices)

---

**Author**: Charles Needham | [needham.co](https://needham.co)  
**License**: MIT
