---
id: platform-admin
title: Platform & Admin
sidebar_label: Overview
---

# Platform & Admin

This domain covers platform-level visibility and administration — system health, performance monitoring, audit logs, analytics reporting, and service documentation management.

---

## What's in this domain

### Analytics
Comprehensive reporting across every dimension of your business. Analytics endpoints return pre-aggregated data for dashboards, exports, and business intelligence — covering service performance, financial metrics, partner activity, customer trends, and logistics.

**Key operations:** company overview, customer analytics, service performance, financial reporting, partner analytics, logistics report, statistics, date-range queries.

### Admin
Admin-only endpoints for platform operators to monitor system health, inspect per-company performance metrics, and manage global platform state. These endpoints require elevated permissions and are not available to standard company accounts.

**Key operations:** system status, per-company performance metrics, operational diagnostics.

:::warning Admin access
Admin endpoints are restricted to platform-level admin accounts only. Standard API keys will receive a `403 Forbidden` response.
:::

### Audit
A full, immutable record of every action taken within your company — who did what, when, and from where. Audit logs are essential for compliance, debugging unexpected behaviour, and security investigations.

**Key operations:** list audit events, filter by user / resource / date range, export audit log.

### Health
A lightweight health check endpoint for monitoring integrations and uptime checks. Returns the current API status and can be polled by load balancers, status pages, or observability tools.

**Key operations:** `GET /health` — returns `{ "status": "ok" }` when the API is operational.

```bash
# Simple health check
curl https://api.warrantyflow.com/api/v3/health
# → { "status": "ok" }
```

### Documentation
Manage structured documentation nodes attached to service definitions. Documentation nodes provide rich content sections — terms and conditions, procedure guides, or user instructions — that are displayed to customers and partners alongside a service.

**Key operations:** list documentation nodes for a service, create / update / delete nodes, reorder nodes.

---

## Analytics available reports

| Report | Description |
|---|---|
| Company overview | High-level KPIs across the whole account |
| Customer analytics | Customer activity, registration trends, retention |
| Service performance | Record volumes, resolution times, stage durations |
| Financial | Revenue, invoice totals, outstanding balances |
| Partner | Partner activity, service shares, claim volumes |
| Logistics | Shipment volumes, transit times, return rates |
| Date-range | Any metric filtered by a custom date window |
