# Batch 17: Admin Panel Customization for Medical Leads

## Objective
Customize the admin panel to handle medical consultation leads with appropriate fields, status tracking, and filtering for Monjoven's workflow.

## Files to Modify

### 1. `src/admin/components/AdminLogin.jsx`
- Update the login page title/branding:
  - Title: "Monjoven Admin Panel"
  - Subtitle: "Lead Management System"
- Update the logo to Monjoven's logo
- Update any hardcoded color values to brand palette

### 2. `src/admin/components/AdminLogin.module.css`
- Update colors to brand palette

### 3. `src/admin/components/AdminLayout.jsx`
- Update the sidebar/layout branding:
  - App name: "Monjoven Admin"
  - Logo: Monjoven logo URL
- Update navigation labels if needed:
  - Dashboard
  - Lead Management (or "Consultation Requests")
  - Guidelines

### 4. `src/admin/components/AdminLayout.module.css`
- Update colors to brand palette

### 5. `src/admin/components/AdminTopbar.jsx`
- Update the topbar title/branding to "Monjoven Admin"
- Update any hardcoded color values

### 6. `src/admin/components/AdminTopbar.module.css`
- Update colors to brand palette

### 7. `src/admin/pages/Dashboard.jsx`
- Update dashboard welcome text: "Welcome to Monjoven Lead Management"
- Update any stat card labels:
  - "Total Consultation Requests" (instead of generic "Total Leads")
  - "Pending Follow-ups"
  - "Consultations Booked"
  - "Procedures Scheduled"
- Update any hardcoded colors

### 8. `src/admin/pages/Dashboard.module.css`
- Update colors to brand palette

### 9. `src/admin/pages/LeadManagement.jsx`
- Update column headers/labels:
  - "Patient Name" (instead of "Name")
  - "Phone"
  - "Service Interest" (dropdown filter with Monjoven services)
  - "Source" (Hero, Contact, Drawer, etc.)
  - "Status" (New, Contacted, Consultation Booked, Procedure Scheduled, Completed, Not Interested)
  - "Date"
- Update any filter/search placeholder text
- Update status label colors if needed

### 10. `src/admin/pages/LeadManagement.module.css`
- Update colors to brand palette

### 11. `src/admin/pages/LeadDetail.jsx`
- Update detail view labels:
  - "Patient Details" (instead of "Lead Details")
  - "Service Interest"
  - "Consultation Notes"
- Update status options for medical workflow
- Update any hardcoded text

### 12. `src/admin/pages/LeadDetail.module.css`
- Update colors to brand palette

### 13. `src/styles/variables.css` (Admin section)
Update the admin panel CSS variables if not already done:
- `--admin-primary`: `#1A5276`
- `--admin-primary-light`: `#2980B9`
- `--admin-accent`: `#148F77`
- Keep the gradient and other admin-specific variables updated

## Important Notes
- DO NOT modify admin authentication logic, data fetching, or CRUD operations
- Only update text labels, colors, and branding
- Ensure all admin pages are accessible and functional
- Status tracking workflow should make sense for a medical practice

## Validation
- Admin login works with existing credentials
- Dashboard shows correct labels
- Lead management table renders properly
- Lead detail view shows medical-appropriate fields
- All filters and search work
- Admin panel is responsive
- No placeholder text remains

---

**Test the changes and raise a PR after completion.**
