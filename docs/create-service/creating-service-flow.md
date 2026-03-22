---
title: Creating a Service Flow
description: Design multi-stage service flows with transitions, custom fields, and service items.
sidebar_position: 1
---

# Creating a Service Flow

A service flow in PartnerFlow defines how a service progresses from start to finish. It provides a structured path made up of stages, transitions, and key data points — ensuring services are handled consistently and efficiently across your team and partners.

## Stages

Stages represent the main checkpoints of a service, such as Inspection, Approval, Repair, or Completion. Each stage marks a significant milestone in the case lifecycle.

**With stages, you can:**
- Create checkpoints for any service type
- Monitor progress and identify bottlenecks
- Set SLA thresholds so overdue cases are flagged automatically
- Define entry and exit criteria to validate work at each step

To add a stage, click **Add Stage** in the flow editor, give it a name, and optionally set an SLA threshold.

## Transitions

Transitions define how a case moves from one stage to another. They act as the rules that connect stages and can include before, during, and after conditions.

**With transitions, you can:**
- Control exactly when a case is allowed to progress
- Enforce mandatory data collection before advancing
- Trigger automations (notifications, webhooks, tasks) when a transition occurs
- Apply pricing as cases move through the flow

### Transition Configuration

Click any transition in the flow editor to open its configuration panel:

| Section | Purpose |
|---|---|
| **Before** | Conditions that must be satisfied before the transition is available to the user (e.g. a field has a value, an approval was received) |
| **During** | Fields or actions the user must complete when taking this transition (e.g. upload a photo, enter a serial number) |
| **After** | Automations triggered immediately after the transition completes (send email, fire webhook, assign task) |
| **Pricing** | Apply a charge when this transition is taken — fixed price (same for all items) or per item (calculated individually) |

## Custom Fields

Custom fields extend a service record with data specific to your service or industry, capturing information beyond the default fields.

**With custom fields, you can:**
- Collect service-specific data (e.g. warranty ID, fault code, serial number, engineer notes)
- Define field types: text, number, date, dropdown, or file upload
- Mark fields as required on specific transitions
- Use field values in reports, contracts, and automation conditions

To add custom fields, open **Service → Custom Fields** in the service editor.

## Service Items

Service items represent the specific product, asset, or component being serviced. By linking items directly to a case, PartnerFlow ensures pricing reflects the real work being carried out.

Costs are not static — they adapt depending on the service path. During transitions between stages, additional charges can be applied if extra work is required, or voided entirely if the service moves down a route that avoids them. For example, one path may require repackaging with an added cost, while another may not. This flexibility ensures every invoice reflects the exact service delivered.

**With service items, you can:**
- Associate cases with the exact item, product, or asset being serviced
- Apply pricing rules that adapt to the chosen service path
- Add or void costs dynamically during transitions between stages
- Automate invoicing by linking charges directly to service progression

To add service items, open **Service → Items** in the right panel of the service editor.

---

## Tips for Building Effective Flows

- **Start simple** — build the minimum viable flow first (3–5 stages), publish it, and iterate based on real usage
- **Use Before conditions sparingly** — too many conditions create friction; focus on the transitions where compliance really matters
- **Name stages from the work perspective** — "Under Repair" is clearer than "Stage 3"
- **Use After automations for notifications** — customers and partners should never need to chase for a status update
- **Test with a sample record** before sharing with partners

---

**Next:** [Service Options →](/docs/create-service/service-options)
