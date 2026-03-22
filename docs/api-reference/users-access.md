---
id: users-access
title: Users & Access
sidebar_label: Overview
---

# Users & Access

This domain controls who can access the platform and what they can do. It covers user accounts, role-based permissions, API key management, and the authentication flows used to establish identity.

---

## What's in this domain

### Users
User accounts belong to a company and represent the people who log in and work within PartnerFlow. Users can be invited, assigned roles, deactivated, and have their details updated at any time.

**Key operations:** list users, invite a user, update user details, deactivate / reactivate, get user activity.

### Roles
Roles are named sets of permissions that control what a user can see and do. Assign a role to a user to grant them the appropriate level of access — for example, administrator, technician, or read-only viewer.

**Key operations:** list roles, create / update roles, assign role to a user, list permissions.

### API Keys
API keys are credentials for machine-to-machine access. Each key is scoped to a company and optionally limited to specific permissions and an expiry date. The full key value is shown only once at creation.

**Key operations:** create an API key, list keys (with last-four visible), deactivate / regenerate a key, view key statistics.

:::tip
Store your API key securely immediately after creation — it cannot be retrieved again. Use the `x-api-key` header to authenticate requests.
:::

### Auth
The authentication endpoints cover all flows for human users: logging in with email and password, logging out, requesting a password reset link, and setting a new password.

**Key operations:** `POST /auth/login`, `POST /auth/logout`, `POST /auth/forgot-password`, `POST /auth/reset-password`.

### Profile
The Profile API gives the currently authenticated user access to their own account — update personal details, manage their offering profile, and configure fulfilment preferences.

**Key operations:** get own profile, update profile, get offering profile ID.

---

## Authentication quick reference

| Method | How to use |
|---|---|
| **API Key** | Add `x-api-key: <key>` header to every request |
| **Session** | `POST /auth/login` → session cookie sent automatically |

For full details see the [Getting Started guide](/docs/api-reference/api-getting-started).
