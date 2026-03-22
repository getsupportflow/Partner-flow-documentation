---
id: billing-finance
title: Billing & Finance
sidebar_label: Overview
---

# Billing & Finance

This domain handles the money side of the platform — creating estimates and invoices, recording payments, applying discounts, and managing subscription plans.

---

## What's in this domain

### Billing
The Billing API covers the full financial lifecycle of a service record. Start with an estimate, convert it to an invoice when approved, record payments as they come in, and apply coupons or adjustments as needed. Billing can be triggered manually via the API or automatically via System Automation rules.

**Key operations:**
- **Estimates** — create, update, approve, and convert to invoice
- **Invoices** — create, update, mark as paid, void
- **Transactions** — record payments, refunds, and adjustments
- **Coupons** — apply discount codes to invoices
- **Financial summary** — get billing totals for a service record

:::info Automated billing
Use the [System Automation](/docs/api-reference/integrations-automation) endpoints to trigger estimate and invoice generation automatically based on service record events.
:::

### Subscriptions
Subscriptions track your company's own PartnerFlow SaaS plan — the current plan tier, billing cycle, usage, and renewal status. Use these endpoints to inspect plan limits and manage your account subscription.

**Key operations:** get current subscription, list available plans, update subscription plan.

---

## Billing flow

```
Service Record created
  → Create Estimate (itemised)
  → Customer / Partner approves Estimate
  → Convert to Invoice
  → Record Payment
  → Mark Invoice paid
```

## Key concepts

| Term | Description |
|---|---|
| **Estimate** | A draft bill shown to the customer before work begins |
| **Invoice** | A finalised charge after approval or completion |
| **Transaction** | A payment, refund, or adjustment recorded against an invoice |
| **Coupon** | A discount code that reduces the invoice total |
