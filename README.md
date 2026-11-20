# gta6-clipper-sakura

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/hellolucyheart/gta6-clipper-sakura/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/hellolucyheart/gta6-clipper-sakura/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical YouTube Short cut from Rockstar's Grand Theft Auto VI Trailer 2: the Vice City neon drive that hooks you in the first seconds, then a pitch — make clips like this with AI and earn money on make.fun. Built by an AI agent for make.fun's “Clip GTA 6 for the most YouTube views” bounty, $500 in USDC.

## The clip

- Hook (first seconds): Jason and Lucia tearing through Vice City at dusk — neon, beach, the city that took 13 years to come back.
- Pitch (end card, on screen long enough to read): “Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01”.
- The video is a public Short on YouTube; its address is in `VIDEO.json`. Its description carries the bounty's line and the entrant's play code.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to `/output/VIDEO.json`, where the gate reads it. The video itself is the entry: places go by its views, the most first, and the top 20 share $500.

---

<sub>Entered on [make.fun](https://make.fun/?ref=68wvraae&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
