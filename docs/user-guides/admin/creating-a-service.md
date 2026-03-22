---
title: Creating a Service (Admin)
description: Step-by-step guide for administrators to create, configure, and publish a service.
sidebar_position: 2
---

# Creating a Service

**Audience:** Admin

## Before You Start

- Define the service purpose (e.g. Warranty Repair for Product Line A)
- Identify key stages (e.g. Intake → Assessment → Repair → QA → Complete)
- Decide what data to collect at each stage (custom fields)
- Determine whether a customer will be associated and how billing should work

## Create the Service

1. Navigate to **Settings → Services**
2. Click **New Service**
3. Enter a **Service Name**, **Description**, and select default options (customer linking, inventory usage, invoicing preferences)
4. Click **Save** — the Flow Editor opens

## Build the Flow

1. Add **Stages** (nodes) representing each step in your process
2. Create **Transitions** (edges) connecting stages — configure rules, required fields, automations, and pricing on each
3. Save draft — you can publish when ready

For a full reference on all flow configuration options, see [Creating a Service Flow](/docs/create-service/creating-service-flow).

## Add Custom Fields

1. Go to **Service → Custom Fields**
2. Click **Add Field**
3. Choose the field type: text, select, number, date, or file
4. Mark required fields and set stage visibility
5. Save

## Define Service Items and Pricing

1. Go to **Service → Items**
2. Click **Add Item** — enter the model name and details
3. Set pricing for each stage that has per-item pricing enabled
4. Configure invoicing behaviour for each item
5. Save

## Configure Service Options

In the **Service Options** tab, configure:

- **Delivery model** — Internal, External, or Both
- **Customer association** — whether a customer is linked to each record
- **Billing mode** — Never, Sometimes, or Always
- **Customer portal access** — whether customers can track their case
- **Inventory** — whether parts are tracked and how they are supplied
- **Logistics** — whose shipping account is used
- **Billing period** — per service or monthly

## Add Documentation (Optional)

In the **Documentation** tab, upload internal guides, checklists, and reference files. See [Service Documentation](/docs/create-service/documentation).

## Generate a Contract (Optional)

In the **Contract** tab, generate a draft SLA, SOW, or MSA. See [Contracts](/docs/create-service/contracts).

## Share the Service (Optional)

1. Go to **Service → Sharing**
2. Select partners to share with
3. Choose access level and effective dates

See [Sharing Services](/docs/sharing-service/sharing-services) for the full partner onboarding workflow.

## Publish

When your flow, fields, items, and options are ready, click **Publish**. Shared partners immediately see the service if they have accepted it. Service records can now be created.
