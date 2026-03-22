---
id: communications
title: Communications
sidebar_label: Overview
---

# Communications

This domain covers everything related to messaging — sending emails and SMS to customers and partners, managing the templates that power those messages, configuring sender identities, and collecting structured data via forms.

---

## What's in this domain

### Communications
Send and track individual communications — emails or SMS messages — to customers, partners, or internal users. Communications can be linked to a specific service record or sent standalone. Each message is logged for audit and reporting purposes.

**Key operations:** send a communication, list communications for a record, get delivery status.

### Email Templates
Reusable email templates with variable substitution (e.g. `{{customer_name}}`, `{{service_id}}`). Templates are owned by a company and used when sending communications or triggering automated notifications.

**Key operations:** list templates, create / update / delete a template, preview a rendered template.

### Email Sender Identities
Before sending emails from a custom domain, you must verify a sender identity — the "from" address that recipients see. This API manages the verification lifecycle for custom sender domains.

**Key operations:** list sender identities, create a new identity, verify domain DNS, delete an identity.

:::tip
Email sender identities require DNS verification (SPF/DKIM records). Check your domain provider's documentation after creating an identity.
:::

### System Email Templates
Platform-level email templates used for automated system notifications (password reset, onboarding, etc.). These are managed by platform administrators and apply across all companies.

**Key operations (admin only):** list system templates, update template content.

### Forms
Custom forms that can be attached to service records to collect structured data from technicians, customers, or partners. Form schemas are defined once and reused across records.

**Key operations:** list forms, create / update a form, attach a form to a service record, retrieve submitted responses.

---

## Sending an email — quick example

```bash
# Send a communication to a customer
curl -X POST https://api.warrantyflow.com/api/v3/communications \
  -H "x-api-key: your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "customer@example.com",
    "templateId": "tmpl_abc123",
    "serviceRecordId": "rec_xyz789",
    "variables": { "customer_name": "Jane Smith" }
  }'
```
