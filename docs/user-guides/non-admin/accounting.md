---
title: Accounting
description: Understand how estimates and invoices are generated automatically from the service flow.
sidebar_position: 2
---

# Accounting

Accounting in PartnerFlow is integrated directly with the service flow. Estimates and invoices are generated automatically based on the pricing rules, service options, and service items configured in the Service Builder — no manual calculation required.

## Estimates

Estimates provide a projected cost for a service before work begins. They are used when customer billing is enabled and the service may involve out-of-warranty charges.

Estimates are generated dynamically based on:

- Selected service options
- The service items associated with the record
- Any additional fees that apply depending on the chosen service path

### Customer Approval

When an estimate is sent, the customer can:

- **Approve** — work proceeds
- **Request changes** — the customer suggests an alternative service path; if the path changes, the estimate updates automatically to reflect the new costs
- **Decline** — the case is flagged for follow-up

Requiring approval before work starts reduces disputes and ensures customers are never surprised by the final invoice.

## Invoices

Invoices capture the actual costs once the service has progressed through its stages. Because billing is linked to the flow, every charge — base costs, per-item transition fees, logistics charges — is applied automatically as the case moves forward.

### What Appears on an Invoice

- Base service charge (if configured)
- Per-item charges from priced transitions
- Additional fees from service path decisions (e.g. repackaging, replacement)
- Logistics charges (if the provider arranged their own shipping)

Each service record's ID is included on the invoice so you can cross-reference the case history at any time.

### Invoice Generation

Invoices are generated based on the **Billing Period** set in service options:

- **Per service** — an invoice is generated when the service record reaches its final stage
- **Monthly** — all completed records within the billing period are batched into a single invoice at month end

## Benefits

| Benefit | Detail |
|---|---|
| **Accuracy** | Costs reflect the real service work — no manual reconciliation |
| **Efficiency** | Automated estimates and invoices reduce admin overhead |
| **Transparency** | Customers and partners see clear, itemised costs at every stage |
| **Control** | Service creators define all billing rules and periods in the Service Builder |
| **Integration** | Accounting is fully linked to the flow — pricing, options, and inventory feed into financial records seamlessly |

---

**See also:** [Service Options — Billing Settings](/docs/create-service/service-options)
