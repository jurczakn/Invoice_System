# Invoice_System
Invoice Code Challenge

Author: Nick Jurczak

Desc: JavaScript Webapp for creating, storing, and editing invoices.

Current State: This is a demo.  There is no back-end.  All values are hard-coded in, and no user input is saved or verified.

Installation: Extract all .html files, js folder, and css folder into the same directory.  For a logical exploration of program,
begin by opening login.html

Hosted live version: http://web.engr.oregonstate.edu/~jurczakn/Invoice_System/

Dependencies: This webapp is dependant on several libraries, including Material Desing Lite (https://github.com/google/material-design-lite.git),
AngularJS (https://github.com/angular/angular.js.git), and Angular Material (https://github.com/angular/material.git).  All are accessed
through hosted links.

Rundown: The webapp includes a log in page and a registration page (neither persistant) that upon login brings you to the main page.  
Pre-loaded invoices and products are displayed in tables, as well as buttons linking to product and invoice creation pages.  Both 
invoice and products tables (visible after clicking + icon next to respective header) allow user to delete entries.  Effects are
immediatly visable but do not persist on page load.  Invoice and product Edit buttons simply direct to the creation pages respectively.

Product creation page provides a simple form to input product information.  No user input is stored.

Invoice creation page allows users to input invoice number, customer name, and date.  All changes are visible on Invoice at bottom of
page. (Invoice is scrollable if too large to fit on page)  Products can be searched in search bar, or scrolled through and selected.
Add product adds a new line to the bottom of the invoice.  Product line can edit the quantity and price, displaying total.  Grand total
of invoice is shown on last row.  Products can be removed after added.  Save button redirects to main page.
