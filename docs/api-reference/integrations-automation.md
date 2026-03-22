---
id: integrations-automation
title: Integrations & Automation
sidebar_label: Overview
---

# Integrations & Automation

This domain connects PartnerFlow to the outside world — third-party services like Gmail and Stripe, real-time event webhooks, rule-based system automations, and AI-powered analysis.

---

## What's in this domain

### Integrations
Connect third-party services to your PartnerFlow account. Integrations are configured per company and handle OAuth flows, API key storage, and connection health. Currently supported integrations include Gmail (email sync) and Stripe (payment processing).

**Key operations:** list integrations, connect / disconnect an integration, get integration status, configure integration settings.

| Integration | What it enables |
|---|---|
| **Gmail** | Sync inbound customer emails to service records, send from your Gmail account |
| **Stripe** | Process card payments directly from invoices |

### Webhooks
Register webhook endpoints to receive real-time event notifications from PartnerFlow. When something happens — a service record status changes, an invoice is paid, a partner accepts an invitation — PartnerFlow sends an HTTP POST to your endpoint.

**Key operations:** list webhooks, register a new endpoint, update / delete an endpoint, view delivery logs.

#### Webhook event structure

```json
{
  "event": "service_record.status_changed",
  "timestamp": "2024-11-01T10:30:00Z",
  "data": {
    "recordId": "rec_abc123",
    "newStatus": "in_progress",
    "previousStatus": "pending"
  }
}
```

:::tip Webhook security
Validate the `x-partnerflow-signature` header on incoming webhook requests to verify the payload came from PartnerFlow.
:::

### System Automation
Trigger platform-level automations programmatically — actions that would otherwise require manual steps or be fired by event rules. Use these endpoints to auto-generate estimates, invoices, shipments, service transfers, and task lists based on your own business logic.

**Key operations:** trigger estimate generation, trigger invoice creation, initiate service transfer, auto-create shipment, generate task list from template.

### AI
AI-powered endpoints that provide intelligent analysis and content generation. Use the AI API to analyse service records, surface insights about customers or workflows, and auto-generate contract text from a service definition.

**Key operations:** analyse a customer, analyse a service record, analyse a workflow, generate contract text.

---

## Automation trigger example

```bash
# Auto-generate an estimate for a service record
curl -X POST https://api.warrantyflow.com/api/v3/system-automation/estimate \
  -H "x-api-key: your_api_key" \
  -H "Content-Type: application/json" \
  -d '{ "serviceRecordId": "rec_xyz789" }'
```
