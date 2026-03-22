---
title: Gmail Integration
description: Connect a Gmail account to send automated notifications and receive customer replies directly in PartnerFlow.
sidebar_position: 1
---

# Gmail Integration

**Audience:** Admin

## Overview

Connecting a Gmail account enables PartnerFlow to send system notifications from your company email address and receive customer replies directly within the platform. This keeps all service-related communication in one place without requiring your team to switch between tools.

## Prerequisites

- A Google Workspace or personal Gmail account
- Admin consent to create OAuth credentials (Client ID and Client Secret) if using Google Workspace
- Access to PartnerFlow Settings

## Setup Steps

1. Go to **Settings → Integrations → Gmail**
2. Click **Connect**
3. Sign in with your Google account
4. Grant the requested permissions (send email, read replies)
5. Confirm the connected email address and set the default sender name that appears on outbound emails

## Routing and Templates

Once connected, configure which platform events trigger automated emails:

- **Service record created** — notify the customer and assigned provider
- **Stage transition** — alert relevant parties when a case moves forward
- **Estimate sent / approved** — trigger billing workflow emails
- **Service completed** — send a completion and feedback request

Customise the content of each email type in **Settings → Email Templates**.

## Troubleshooting

| Issue | Resolution |
|---|---|
| Connection expired | Go to **Settings → Integrations → Gmail** and click **Reconnect** |
| Emails not being sent | Verify the connected account has not had access revoked in Google settings |
| Template variables not rendering | Check that the variable names in your template match the available fields for that event |
| Replies not appearing in the platform | Confirm you granted the "Read email" scope during the OAuth flow |

## Disconnecting

To disconnect Gmail:

1. Go to **Settings → Integrations → Gmail**
2. Click **Disconnect**

Existing email logs are retained. New notifications will not be sent until you reconnect or connect a different email provider.
