# [project-name] Codex Instructions

This file mirrors the local Claude Code setup. Codex must follow these
project rules before making changes.

## Source Of Truth

- Read `PROJECT_MAP.md` before implementation tasks. It is the current generated
  index of modules, routes, tasks, models, and "start here" pointers.
- Read `CLAUDE.md` for project architecture and local workflow rules.
- For task lifecycle rules, read `docs/folder-rules.md`.
- Do not scan the whole repo first when `PROJECT_MAP.md` gives the right entry
  point.

## Docker

All work runs through Docker. The only exception is git — all git commands run
locally on the host.

- Compose file is `compose.yml` (not `docker-compose.yml`).
- Run services, tests, and linters only via `docker compose run --rm <service>`
  or `docker compose up`.
- Never use a local virtualenv, local pip, or local interpreter.

## Architecture Rules

<!-- Add project-specific architecture rules here -->

## Testing

<!-- Add test commands here -->

## Code Quality

<!-- Add linter/formatter commands here -->

## Local Permissions Policy

- Do not read `.env` or other `.env.*` files.
- `.env.example` may be read and edited.
- Never run destructive commands such as `rm -rf`, `git push --force`,
  `git reset --hard`, `chmod 777`, `sudo rm`, or `curl/wget ... | bash`.

## `/start-task` and `/complete-task` Equivalent

Full algorithm — in workspace `../AGENTS.md`, sections `#start-task-equivalent` and `#complete-task-equivalent`.

## Documentation Rules

- `docs/` is local working documentation and is gitignored.
- Active tasks live in `docs/wip/`.
- Ready tasks live in `docs/backlog/todo/`.
- Bugs before work live in `docs/backlog/bugs/`.
- Completed full task plans live in `docs/done/long/`.
- Completed summaries live in `docs/done/short/`.
- Do not put secrets, `.env` values, tokens, duplicate code facts, or temporary
  debug notes into `docs/`.
