---
id: service-management
title: Service Management
sidebar_label: Overview
---

# Service Management

The Service Management domain covers the entire lifecycle of a service — from defining what a service offers, through creating and tracking individual service cases, to managing the parts and items involved.

---

## What's in this domain

### Service
Define the service templates your company offers. A service is the blueprint — it describes the type of warranty or repair contract available, its pricing, stages, and contract terms. Services are activated before they can be sold or shared with partners.

**Key operations:** list services, create a service, activate / deactivate, update pricing, get performance metrics.

### Service Records
A service record is a live case — created when a customer registers or activates a service. This is where the action happens: status transitions, technician notes, media uploads, related records, and customer or partner-facing views.

**Key operations:** create / update records, transition status, attach media, add labels, link related records, get customer or partner view.

### Service Items
Line items that make up a service record — the parts, components, or tasks that need to be tracked and resolved. Items can have custom fields, solutions attached, and inventory allocated to them.

**Key operations:** add items to a record, update item status, allocate inventory to an item, add solutions.

### Service Item Custom Fields
Extend service items with your own metadata. Custom fields let you capture business-specific data against any service item without changing the core data model.

**Key operations:** list custom fields, create / update / delete field definitions.

### Solutions
Standardised fix or resolution records that can be attached to service record items. Using solutions makes resolution tracking consistent and enables reporting on common failure patterns.

**Key operations:** add a solution to a record item, list available solutions.

### Shipping
Track and manage shipments linked to service records — sending units in for repair, dispatching replacements, or returning goods to customers.

**Key operations:** create a shipment, update shipping status, list shipments for a record.

---

## Typical workflow

```
Create Service → Activate Service → Customer registers → Service Record created
  → Technician updates record → Items tracked → Parts allocated from Inventory
  → Solutions recorded → Shipment dispatched → Record closed
```
