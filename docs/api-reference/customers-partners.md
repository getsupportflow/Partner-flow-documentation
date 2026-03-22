---
id: customers-partners
title: Customers & Partners
sidebar_label: Overview
---

# Customers & Partners

This domain manages everyone outside your company — the end customers who receive services, the partners who deliver them, and the suppliers who provide products. It also covers the contracts and portal access that tie these relationships together.

---

## What's in this domain

### Customers
Your end customers — the individuals or organisations who register services and submit claims. Customer records store contact details, linked service records, and activity history. You can search, filter, export, and enrich customer data via AI.

**Key operations:** list / search customers, create / update a customer, export to CSV, analyse customer data.

### Customer Portal
Endpoints that power the self-service customer portal. Customers can log in to view their own service records, communicate with your team, and track progress — all without accessing the main platform.

**Key operations:** get portal profile, list portal service records, update portal preferences.

### Partner
Partners are other companies in your network who can deliver or receive services on your behalf. The Partner API manages the invitation lifecycle, relationship status, and what services are shared with whom.

**Key operations:** send a partner invitation, accept / reject invitations, list partners, view partner network.

### Suppliers
Suppliers provide the products and parts that feed your inventory. Supplier records store contact details, product catalogues, and pricing. You can import distributor product data via CSV.

**Key operations:** create / update suppliers, list supplier products, import product catalogue, manage supplier pricing.

### Contracts
Service contracts are legal agreements between your company, customers, and partners. The Contracts API lets you generate contracts from templates, send them for signature, upload signed copies, and download executed documents.

**Key operations:** list contracts for a service, generate a contract, sign / upload / download contracts, activate a contract.

---

## Relationships at a glance

```
Company ──shares services──▶ Partner
Company ──registers──▶ Customer
Customer ──activates──▶ Service Record
Partner ──fulfils──▶ Service Record
Supplier ──supplies inventory──▶ Company
Service ──governed by──▶ Contract
```
