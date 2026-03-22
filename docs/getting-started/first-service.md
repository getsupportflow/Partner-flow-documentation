---
title: Your First Service
description: A step-by-step walkthrough for creating, configuring, and publishing your first service in PartnerFlow.
sidebar_position: 3
---

# Your First Service

This walkthrough takes you through creating a service from scratch — building the flow, configuring options, adding fields and items, and publishing it for your team or partners to use.

## Create the Service

1. Go to **Settings → Services**
2. Click **New Service**
3. Enter a **Service Name** (e.g. "Warranty Repair — Product Line A") and a short **Description**
4. Click **Save** — you are taken to the **Service Editor**

## The Service Editor

The Service Editor has four tabs:

| Tab | What you configure |
|---|---|
| **Service Flow** | Stages, transitions, custom fields, and service items |
| **Service Options** | Billing, customer association, inventory, and logistics settings |
| **Documentation** | Internal guides, checklists, and reference files |
| **Contract** | Generate and manage SLA, SOW, or MSA contracts |

Work through each tab in order.

---

## Build Your Service Flow

In the **Service Flow** tab, you design the path a case takes from start to finish.

### Add Stages

1. Click **Add Stage**
2. Enter a stage name (e.g. "Intake", "Assessment", "Repair", "QA", "Complete")
3. Optionally set an **SLA threshold** — the time limit before this stage is flagged as overdue
4. Repeat for each milestone in your process

### Connect Stages with Transitions

1. Hover over a stage to reveal the connection handle at the bottom
2. Drag it to the next stage to create a transition
3. Click the transition to open the transition configuration panel

Each transition has four configuration sections:

- **Before** — conditions that must be satisfied before the transition becomes available (e.g. a required field is filled, an approval is granted)
- **During** — mandatory fields or actions the user must complete to proceed
- **After** — automations triggered when the transition completes (send email, fire webhook, create task)
- **Pricing** — choose **Fixed price** (same charge regardless of item) or **Per item** (charge calculated per service item)

### Add Custom Fields

Custom fields let you capture data specific to your service at the record level.

1. Click **Custom Fields** in the service flow panel
2. Click **Add Field**
3. Choose the field type: text, number, date, dropdown, or file upload
4. Mark fields as required if they must be completed before a transition
5. Save

### Add Service Items

Service items represent the specific models or components that can go through this service.

1. Click **Service Items** in the panel on the right
2. Click **Add Item**
3. Enter the item name and model information
4. Set the price for each stage that has per-item pricing enabled
5. Save

---

## Configure Service Options

In the **Service Options** tab, set:

- Whether the service is **Internal** (your team only), **External** (partner-delivered), or **Both**
- Whether a **Customer** is associated with each service record
- **Customer billing** — Never, Sometimes (conditional), or Always
- Whether customers get access to the **Customer Portal**
- Which **communication channels** are available to customers
- **Inventory** settings — whether providers are supplied parts or purchase independently
- **Logistics** — whose shipping account is used
- **Billing period** — per service (event-based) or monthly

---

## Add Documentation (Optional)

In the **Documentation** tab, you can upload or link reference files for internal use and service providers:

- Technical repair guides
- Quality checklists
- Compliance documents
- Training materials

Documents are accessible from the service record. Customers do not have access to these files.

---

## Generate a Contract (Optional)

In the **Contract** tab, PartnerFlow can generate a draft contract automatically from your flow definition. Select the contract type:

- **SLA** — sets performance standards and timelines
- **SOW** — outlines scope of work and deliverables
- **MSA** — establishes overarching terms for long-term partnerships

Review the draft, share it with your legal team if needed, and use it when onboarding new service provider partners.

---

## Publish the Service

When your flow, fields, items, and options are configured:

1. Click **Publish**
2. The service becomes available to your team and any partners you have shared it with

You can continue editing a published service — changes take effect on the next service record created.

---

## Next Steps

- [Share this service with a partner →](/docs/sharing-service/sharing-services)
- [Understand all service flow options in depth →](/docs/create-service/creating-service-flow)
- [Create a service record →](/docs/user-guides/non-admin/service-management)
