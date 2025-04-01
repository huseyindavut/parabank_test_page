# ParaBank Playwright Automated Test Suite

This project is a **mandatory test automation assignment** built using **Playwright** and **TypeScript**. The test suite is designed to validate core functionalities of the [ParaBank website](https://parabank.parasoft.com/parabank/index.htm) such as login, viewing account summary, transferring funds, and submitting the customer care form.

---

## 📌 Assignment Summary

You are tasked with simulating the role of a test automation engineer for a QA team. The objective is to automate a range of test scenarios for the ParaBank web portal, ensuring they are isolated, repeatable, and maintainable. The assignment includes:

- Exploring the website manually
- Writing manual test case descriptions
- Automating test flows for login, navigation, form submission
- Ensuring test independence using Playwright's `beforeEach` and `afterEach` hooks

---

## ⚙️ How It Works

- All tests are written using **Playwright with TypeScript**
- Tests are located in the `tests/` folder
- Login and logout actions are reused using Playwright test hooks
- Run all tests using the following command:

```bash
npx playwright test
Ensure you run npm install and npx playwright install before running the tests.

📁 Project Structure
pgsql
Kopier
Rediger
PARABANK-TESTS-TS/
│
├── tests/
│   ├── customer-care.spec.ts
│   ├── login-suite.spec.ts
│   └── login-suite-BeforeEach-AfterEach.spec.ts
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── package-lock.json
🧪 Test Case Breakdown


customer-care.spec.ts
📌 Task 1.5 – Automate Customer Care Form Submission

Navigates to the homepage

Clicks on the "Contact Us" link

Fills out the contact form with dummy data

Submits the form

Verifies a confirmation message containing "Thank you" is displayed



login-suite.spec.ts
📌 Tasks 2.2 – 2.6 – Manual Login-Based Test Cases

Includes 3 individual test cases:

Login functionality test

Account summary visibility

Access to the Transfer Funds page

Each test logs in manually and performs assertions



login-suite-BeforeEach-AfterEach.spec.ts
📌 Tasks 2.7 – 2.9 – Using Hooks for Login/Logout

Uses test.beforeEach() to perform login before every test

Uses test.afterEach() to perform logout after every test

Rewrites the 3 test cases from login-suite.spec.ts in a more reusable way:


Verifies login success

Checks if account summary table is visible

Navigates to the Transfer Funds page and checks visibility


✅ Prerequisites
Make sure the following tools are installed:

Node.js

Playwright CLI

Then run:

bash

npm install
npx playwright install
To execute the tests:

bash

npx playwright test
🎉 Result
All tests run successfully and independently. The project demonstrates how to write automated browser tests for a real-world banking website while applying good practices like test isolation and hook-based setup/teardown.

🔗 Resources
ParaBank Website

Playwright Documentation

Playwright Test Hooks
