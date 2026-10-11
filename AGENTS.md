# AGENTS.md

## Git conventions

- **Commits** — Conventional Commits: `type(scope): description`, lowercase imperative description, no trailing period. Dependency changes use `build(deps):`.
- **Types** — `feat`, `fix`, `refactor`, `perf`, `style`, `build`, `ci`, `docs`, `test`, `chore`.
- **Tickets** — none. Branches, commits, and PRs carry no issue keys.
- **Branches** — `<type>/<kebab-description>`, cut from `origin/main` (e.g. `build/bump-dependencies`).
- **PRs** — target `main`. Titles use the same header form as commits. Merge with a merge commit, not squash, so the branch's commit history is preserved.
