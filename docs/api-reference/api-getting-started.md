---
id: api-getting-started
title: Getting Started with the API
sidebar_label: Getting Started
sidebar_position: 0
---

# Getting Started with the API

The PartnerFlow API is a RESTful HTTP API that gives you programmatic access to every part of the platform — services, customers, billing, partners, inventory, communications, and more.

All requests and responses use **JSON**.

---

## Base URLs

| Environment | Base URL |
|---|---|
| **Production** | `https://api.warrantyflow.com/api/v3` |
| **Development** | `http://localhost:3000/api/v3` |

All endpoints below are relative to this base URL.

---

## Authentication

The API supports two authentication methods:

### 1. API Key (recommended for integrations)

Generate an API key from your PartnerFlow workspace under **Settings → API Keys**. Include it in every request as a header:

```http
x-api-key: your_api_key_here
```

**Example:**

```bash
curl https://api.warrantyflow.com/api/v3/customers \
  -H "x-api-key: your_api_key_here"
```

API keys are scoped to a company and can have specific permissions. The plain key value is only shown once at creation — store it securely.

### 2. Session Auth (for browser-based apps)

Use `POST /auth/login` with your email and password to establish a session:

```bash
curl -X POST https://api.warrantyflow.com/api/v3/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "you@example.com", "password": "your-password"}'
```

The session cookie is then sent automatically with subsequent requests (browser only). Use `POST /auth/logout` to end the session.

---

## Request Format

All request bodies must be sent as JSON with the appropriate content type header:

```http
Content-Type: application/json
```

---

## Response Format

Every API response follows a consistent envelope:

```json
{
  "success": true,
  "data": { ... },
  "message": "Optional human-readable message"
}
```

On failure:

```json
{
  "success": false,
  "error": "A description of what went wrong"
}
```

| Field | Type | Description |
|---|---|---|
| `success` | `boolean` | `true` when the operation succeeded |
| `data` | `any` | The response payload (varies by endpoint) |
| `message` | `string` | Optional success or informational message |
| `error` | `string` | Present when `success` is `false` |

---

## HTTP Status Codes

| Code | Meaning |
|---|---|
| `200` | OK — request succeeded |
| `201` | Created — resource was created |
| `400` | Bad Request — invalid input or missing required fields |
| `401` | Unauthorized — missing or invalid authentication |
| `403` | Forbidden — authenticated but not permitted |
| `404` | Not Found — resource does not exist |
| `409` | Conflict — duplicate or conflicting resource |
| `422` | Unprocessable Entity — validation error |
| `500` | Internal Server Error — something went wrong on our end |

---

## Pagination

List endpoints return paginated results. Pass `page` and `limit` as query parameters:

```http
GET /customers?page=1&limit=25
```

| Parameter | Default | Description |
|---|---|---|
| `page` | `1` | Page number (1-indexed) |
| `limit` | `25` | Number of results per page |

---

## API Keys Management

You can create and manage API keys via the API itself using the **API Keys** endpoints, or through the PartnerFlow portal under Settings.

Key properties:
- **Name** — a human-readable label for the key
- **Permissions** — a scoped list of allowed operations
- **Expiry** — optional ISO date string after which the key becomes invalid
- **Last four** — the last 4 characters of the key (visible after creation for identification)

:::tip
API keys are shown in full **only once** at creation. Copy and store the value immediately.
:::

---

## Support

If you run into issues or have questions about the API, contact us at [support@warrantyflow.com](mailto:support@warrantyflow.com) or visit the [Support page](/docs/support).
