# Demo Script: Obeya-lite (5–10 minutes)

This script guides a screen-share demo of the Obeya-lite board for recruiters, hiring managers, or consulting prospects.

## Setup (before the call)

1. Open the live board: [https://crn94.github.io/revops-obeya-lite/](https://crn94.github.io/revops-obeya-lite/)
2. Ensure browser window is maximized (desktop view recommended)
3. Have the GitHub repo open in another tab: [https://github.com/CRN94/revops-obeya-lite](https://github.com/CRN94/revops-obeya-lite)
4. Optional: Open docs/SYSTEM.md for deeper dive if questions arise

## Script (5–10 min)

### 1. Opening hook (30 seconds)

> "This is Obeya-lite — a Lean visual management board I built to demonstrate how I approach RevOps. Most ops teams treat work like a ticket queue. I treat it like a pull-based production system. Let me show you what that means."

### 2. The constraint (1 minute)

> "The first principle is **constraint thinking**. I don't have infinite capacity, and neither does any ops team. So instead of pretending I can do everything, this board makes my capacity **explicit** through WIP limits."
>
> *[Point to column headers]*
>
> "See these numbers under each stage? Research: 3 max. Outbound: 5 max. Interview: 3 max. Offer: 2 max. These aren't aspirations — they're hard limits based on how much attention each stage actually requires."

### 3. Walk the board (2 minutes)

> "Let me walk you through the flow. Work moves left to right:"
>
> - **Backlog**: "Ideas and opportunities I'm tracking but haven't committed to yet."
> - **Research**: "Deep ICP fit assessment, company research, role alignment."
> - **Outbound**: "Active applications or proposals. Currently I have one real card here: Crew, a RevOps network placement. Applied October 2nd, paused multi-threading to partners until this portfolio demo is complete."
> - **Interview**: "Active interview threads. Right now this is empty — honest signal."
> - **Offer**: "Negotiation stage. Also empty. Again: honest board beats vanity metrics."
>
> "You'll notice there are illustrative cards labeled clearly as examples. That's intentional — this board tracks **real** work. n is small, and empty is honest."

### 4. Pull system (1 minute)

> "Second principle: **pull, not push**. Work only moves right when there's capacity in the next column."
>
> *[Demonstrate by trying to describe a scenario]*
>
> "If Interview is at 3/3, no more cards move from Outbound. That's not a failure — it's a forcing function. It makes me ask: 'What needs to happen to clear Interview?' rather than piling on more applications. Pull systems prevent overload by design."
>
> *[If comfortable, drag a card between columns to show interaction]*
>
> "I can drag cards to simulate flow. The board uses localStorage, so changes persist. But the real value isn't the tool — it's the **discipline** it enforces."

### 5. Swim lanes (1 minute)

> "Third: **swim lanes**. You'll see two colors: blue for Job, purple for Consulting."
>
> *[Point to legend at the top and example cards]*
>
> "Different value streams, different rhythms. This lets me balance: how much capacity goes to full-time job search versus consulting work? In a RevOps org, swim lanes might separate Sales Ops from CS Ops, or strategic projects from BAU requests."

### 6. Andon (1 minute)

> "Fourth principle: **andon** — Japanese for 'lantern,' a visual alert when something's wrong."
>
> *[If andon is not currently showing, explain when it would appear]*
>
> "If any column goes over its WIP limit, you'd see a red banner at the top and the column highlighted in red. If a card sits in one stage for more than 3 days without moving, it gets flagged as blocked."
>
> "Why does this matter? Traditional ops hide problems until they're crises. Andon makes small problems **visible** while they're still fixable. A card blocked for 4 days is a conversation to have, not a silent failure."

### 7. RevOps application (1–2 minutes)

> "Now, this board is tracking my job search and consulting pipeline. But the same principles apply to **any RevOps workflow**:"
>
> - Lead lifecycle: MQL → SQL → Opp → Closed
> - Support tickets: New → Triage → Assigned → Resolved  
> - Campaign delivery: Idea → Briefed → Built → Launched
> - Tool requests: Backlog → Spec → Build → Deploy
>
> "In every case: limit WIP per stage, pull instead of push, make blockers visible. **Flow over utilization. Visual management over status reports. Constraint-driven instead of reactive.**"

### 8. Why it matters (1 minute)

> "Here's the bottom line: Most RevOps teams burn out because they manage work like an infinite queue. Everything comes in, we try to do it all, and we drown."
>
> "I run ops like a **product system**: acknowledge constraints, optimize for flow, make problems visible before they metastasize. This board is a proof of concept. The thinking scales to any GTM operation."

### 9. Closing & Q&A (1–2 minutes)

> "The code is open-source on GitHub. Plain HTML, CSS, JavaScript — no build step, no backend. Built to be simple and demoable."
>
> *[Show GitHub repo briefly if relevant]*
>
> "Happy to walk through the technical implementation, the Lean theory in the docs, or how this applies to your specific ops challenges. What questions do you have?"

---

## Variants & adaptations

### If asked about technical implementation (1 min)

> "Static site. Board state loads from a JSON file at runtime. Drag-and-drop is vanilla JavaScript with localStorage persistence. Deployed on GitHub Pages. No frameworks, no dependencies — intentionally simple so the focus stays on the system, not the stack."

### If asked about Lean background (1–2 min)

> "This draws on Toyota Production System principles: Obeya for visual management, Theory of Constraints for WIP limits, andon for problem escalation. I've applied these in RevOps contexts before — e.g., limiting concurrent campaigns to prevent half-finished launches, or capping support ticket WIP to force resolution over just 'triaging' everything."

### If asked "Does this really work in practice?" (1 min)

> "Yes. The hard part isn't the board — it's the **discipline** to say no when WIP is full. That's cultural, not technical. But the visual management makes the conversation much easier: 'We're at 5/5 in Outbound; if we add this, what do we drop?' That's a better conversation than silent overload."

---

**Author**: Charles Needham | [needham.co](https://needham.co)  
**License**: MIT
