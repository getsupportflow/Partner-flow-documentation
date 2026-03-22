# PartnerFlow Documentation

This repository is the documentation site for [PartnerFlow](https://portal.warrantyflow.io) — a service management platform for manufacturers, service providers, and customers.

The site is built with [Docusaurus 3](https://docusaurus.io/) and published to [docs.warrantyflow.com](https://docs.warrantyflow.com).

## Local Development

```bash
npm install --ignore-scripts
npm start          # starts dev server on http://localhost:3001
```

## Building

```bash
npm run build      # produces the static site in build/
```

## Regenerating API Docs

The `docs/api/` folder is auto-generated from `openapi.yaml`. Run this after the spec is updated:

```bash
npm run gen-api-docs
```

The CI pipeline (`openapi-sdk.yml` in the main app repo) does this automatically on every push to `main` that changes the API.

## Adding Documentation

See [DOCUMENTATION.md](./DOCUMENTATION.md) for the full guide on structure, conventions, and instructions for AI-assisted documentation.
