# Obeya-lite

A Lean visual management board for RevOps work. Demonstrates pull-based flow, WIP limits, and andon alerts — applied to job search and consulting pipeline management.

## What is this?

Obeya-lite is a portfolio piece that shows how I run RevOps like a Lean product shop:

- **Pull system**: Work moves right only when capacity is available
- **WIP limits**: Prevent overload and expose bottlenecks
- **Andon**: Visual alerts when limits are exceeded or cards are blocked
- **Swim lanes**: Separate flows for job search and consulting work

This is not a ticket desk. It's a constraint-driven system that makes problems visible before they become crises.

## Why it matters

Most RevOps teams drown in reactive work because they manage it like a queue. This board demonstrates:

1. **Constraint thinking**: Limited capacity is real; make it explicit
2. **Flow over utilization**: Movement matters more than busywork
3. **Visual management**: The board tells the truth at a glance
4. **Continuous improvement**: Bottlenecks and blockers become obvious

## Live demo

🔗 **[View the live board](https://crn94.github.io/revops-obeya-lite/)**

## Run locally

```bash
# Clone the repository
git clone https://github.com/CRN94/revops-obeya-lite.git
cd revops-obeya-lite

# Serve locally (choose one)
python -m http.server 8000
# or
npx serve

# Open http://localhost:8000
```

No build step required. The board loads from `data/board.json` at runtime.

## Features

- **5 columns**: Backlog → Research → Outbound → Interview → Offer
- **WIP limits per stage**: Research (3), Outbound (5), Interview (3), Offer (2)
- **Two swim lanes**: Job and Consulting
- **Drag-and-drop**: Move cards between columns (state persists to localStorage)
- **Andon warnings**: Visual alerts when WIP limits are exceeded or cards blocked >3 days
- **Pull principle**: Clear documentation that work only flows when capacity allows

## Documentation

- [System overview (SYSTEM.md)](docs/SYSTEM.md): Obeya, WIP, pull, and andon in GTM/RevOps language
- [Demo script (DEMO_SCRIPT.md)](docs/DEMO_SCRIPT.md): 5–10 minute screen-share walkthrough
- [Seed data snapshot](examples/board-snapshot.json): Initial board state

## Tech stack

- Static HTML/CSS/JavaScript
- No framework, no build step
- GitHub Pages for deployment
- LocalStorage for demo persistence

## Author

**Charles Needham**  
[needham.co](https://needham.co)

RevOps professional demonstrating constraint-driven operations management through Lean principles.

## License

MIT License - see [LICENSE](LICENSE)
