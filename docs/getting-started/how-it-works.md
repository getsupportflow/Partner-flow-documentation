---
title: How It Works
description: A complete overview of how PartnerFlow connects manufacturers, service providers, and customers through structured service workflows.
sidebar_position: 1
---

# How It Works

PartnerFlow is built around a simple concept: a **service** is a defined process that an item or case moves through from start to finish. You build that process once, share it with your partner network, and the platform handles the routing, tracking, invoicing, and communication automatically.

## The Three-Actor Model

Every activity in PartnerFlow involves one or more of three actors:

```
Manufacturer / Service Creator
       │
       │  Shares a service (defines the rules)
       ▼
Service Provider
       │
       │  Executes the service (carries out the work)
       ▼
    Customer
           (tracks progress, approves decisions)
```

### Manufacturer / Service Creator
The organisation that owns the product and defines how service should be delivered. They build the service flow, set the standards, manage the partner network, and retain full visibility over every active case.

### Service Provider
An external or internal team that carries out the actual service work. They receive cases through the platform, follow the flow defined by the manufacturer, update stages as work progresses, and submit invoices automatically at the end.

### Customer
The end user whose product is being serviced. They access a branded customer portal to see status updates in real time, approve estimates, confirm collection or delivery dates, and provide feedback when the service is complete.

---

## The Service Flow Lifecycle

### 1. Design the Service

The manufacturer opens the **Service Flow Builder** and creates a flow:

- **Stages** — the key checkpoints a case passes through (e.g. Intake → Assessment → Repair → QA → Complete)
- **Transitions** — the rules that control when and how a case moves between stages
- **Custom Fields** — additional data to collect at specific points in the flow
- **Service Items** — the product models or components that can be serviced, each with its own pricing rules
- **Service Options** — billing mode, customer association, logistics ownership, inventory tracking

Once the flow is configured, a contract (SLA, SOW, or MSA) can be generated automatically from the flow definition.

### 2. Share the Service with Partners

The manufacturer invites a service provider and shares the service with them. The provider reviews the full service criteria — stages, transitions, documentation, and contract — before accepting. Both parties countersign digitally.

### 3. Create a Service Record

A service record is a single instance of the service for a specific customer or item. Records can be created:

- **Manually** by the manufacturer or service provider
- **Automatically** via integration (e.g. a CRM trigger, customer portal form submission, or API call)

Each record tracks its current stage, attached documents, assigned service provider, parts used, and all associated financial activity.

### 4. Execute the Service

The assigned service provider works the case through the stages:

- Each transition may require data entry, photo uploads, or external approvals before it unlocks
- Automations trigger on transitions (notifications, webhooks, tasks)
- Inventory is consumed and tracked as parts are used
- Costs accumulate automatically based on pricing rules in the flow

### 5. Billing and Completion

When the service reaches its final stage:

- An **invoice** is generated automatically, reflecting all costs accumulated through the flow
- For out-of-warranty work, an **estimate** can be sent to the customer for approval before work begins
- The manufacturer reviews, approves, and closes the record

---

## Key Concepts

### Stages and Transitions
Stages are the milestones of a service. Transitions are the controlled paths between them. A transition can have:

- **Before conditions** — criteria that must be true before the transition is available (e.g. a required field is filled)
- **During requirements** — mandatory data or actions that must be completed to proceed
- **After automations** — actions triggered when the transition completes (send an email, create a task, call a webhook)
- **Pricing** — a fixed charge or per-item fee applied when the transition is taken

### Service Records vs. Services
A **service** is the template — the flow design. A **service record** is a specific case running through that template. One service can have thousands of active service records at any time.

### Partner Network
Partners are companies connected to your account. You can share multiple services with a partner, and a partner can be connected to multiple manufacturers. Access and permissions are controlled per service and per user role.

### Customer Portal
Each manufacturer can configure a white-label customer portal at a custom URL. Customers access it without needing a full PartnerFlow account — they authenticate with a token sent to them when their service record is created.

---

## What Happens Next

- [Set up your company profile and add users →](/docs/getting-started/setup)
- [Create your first service →](/docs/getting-started/first-service)
- [Understand the service flow builder in depth →](/docs/create-service/creating-service-flow)
