# ParaBank Playwright Test Suite (TypeScript)

This project is a functional end-to-end test suite for the [ParaBank](https://parabank.parasoft.com/parabank/index.htm) demo banking portal, written using [Playwright](https://playwright.dev/) and TypeScript.

The tests were created as part of a mandatory assignment focused on exploring Playwright’s core features and best practices.

---

## 📌 What’s Included?

- ✔ Functional tests for:
  - Customer Care form
  - User login
  - Viewing account summary
  - Navigating to the "Transfer Funds" form
- ✔ TypeScript-based Playwright setup
- ✔ Reusable login/logout using `beforeEach` and `afterEach`
- ✔ Clean, readable code using Playwright best practices
- ✔ HTML test reports enabled

---

## 📁 File Structure

## ▶ How to Run the Tests

1. Install dependencies and browsers:

   In the Terminal:
   
   npm install
   
   npx playwright install


   npx playwright test


   npx playwright show-report
   
