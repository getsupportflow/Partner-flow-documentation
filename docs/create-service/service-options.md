---
title: Service Options
description: Configure delivery model, billing, customer access, inventory, logistics, and billing period for a service.
sidebar_position: 2
---

# Service Options

Service options define how a service is delivered, managed, and billed. They provide the flexibility to adapt workflows to internal teams, external providers, or a blend of both. Configure these in the **Service Options** tab of the service editor.

## Internal, External, or Both

Choose whether a service is handled entirely in-house, outsourced to a partner, or managed collaboratively. This setting determines which billing rules, communication settings, inventory controls, and logistics options apply.

| Mode | When to use |
|---|---|
| **Internal** | All work is carried out by your own team |
| **External** | Work is fully delegated to a service provider partner |
| **Both** | Some steps are handled internally and others by a partner |

## Customer Association

Not all services involve customers directly. Toggle this setting to specify whether a customer is linked to each service record. When enabled, you can configure how customers are billed, notified, and given access.

## Customer Billing

When a customer is associated with a service, define when invoices are generated:

| Option | Behaviour |
|---|---|
| **Never** | No charges are applied to the customer |
| **Sometimes** | Charges are applied on specific service paths or conditions (e.g. out-of-warranty repairs) |
| **Always** | Every service record generates a customer invoice |

## Customer Portal Access

Toggle this on to give customers access to a dedicated portal where they can track their service progress in real time. The portal increases transparency, reduces inbound support queries, and allows customers to take actions (approve estimates, confirm dates, make payments) without calling in.

## Communication Channels

When a customer is associated, choose how they receive updates: email, phone, chat, or a combination. These can be tailored to the nature of the service.

## Inventory Management

Specify whether this service requires parts or components to be tracked. When inventory is enabled, you can define how partners handle stock:

- **Supplied by service creator** — parts are sent directly to the service provider
- **Purchased independently** — the service provider sources their own parts and requests credit against the service creator's account

This ensures accurate cost tracking and accountability across multiple parties.

## Logistics

Specify whose logistics framework is used to move products or assets:

- **Service creator's account** — service providers generate shipping orders under the parent (manufacturer) account
- **Service provider's own logistics** — providers arrange shipping independently, and the fee is automatically added to their invoice as a logistics charge

## Billing Period

Define how billing is structured for completed services:

- **Per service** — an invoice is generated each time a service record is completed (event-based)
- **Monthly** — all completed service records are batched and billed together at the end of the month

The system aligns invoices automatically with the selected billing model, removing the need for manual reconciliation.

---

**Next:** [Documentation →](/docs/create-service/documentation)
