---
id: workspace-operations
title: Workspace & Operations
sidebar_label: Overview
---

# Workspace & Operations

This domain covers the internal operational layer of PartnerFlow — company configuration, physical locations, stock management, task tracking, onboarding, and dashboards.

---

## What's in this domain

### Company
The Company API manages your organisation's core profile — name, branding, contact details, logo, and company-wide settings. Changes here affect how your company appears to partners and customers.

**Key operations:** get company details, update profile, upload logo, manage company settings.

### Locations
Locations represent physical places your company operates from — warehouses, service centres, offices. They are used to route inventory, assign service records to a site, and generate location-based reports.

**Key operations:** list locations, create / update a location, assign inventory to a location.

### Inventory
Track the physical stock your company holds — parts, products, and consumables. Inventory items can be allocated to service records, restocked from suppliers, and imported in bulk via CSV.

**Key operations:** list inventory, create / update items, allocate stock to a service record item, return stock from a record, import from supplier catalogue.

### Workspace
The Workspace API manages task lists and individual tasks within your company. Use it to build operational checklists tied to service workflows — for example, a pre-inspection checklist or a handover task list.

**Key operations:** list task lists, create tasks, update task status, assign tasks to users.

### Onboarding
Track the onboarding progress of new companies getting set up on PartnerFlow. Onboarding status indicates which setup steps have been completed and what remains outstanding.

**Key operations:** get onboarding status, mark onboarding steps complete.

### Dashboard
Build and manage customisable dashboards with metric widgets. Dashboards give operational visibility into key numbers — open records, billing totals, team performance — at a glance.

**Key operations:** list dashboards, create a dashboard, add / remove widgets, get widget data.

---

## Inventory allocation flow

```
Supplier → Import Products → Inventory
Inventory → Allocate to Service Record Item → Consumed
Service Record closed → Return unused stock → Inventory
```
