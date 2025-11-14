# LetCode Smoke Tests

## Overview

This repository contains **smoke tests** for validating the core functionality and navigation of [LetCode.in](https://letcode.in/) using the Playwright framework. These tests are designed to **quickly verify** that key features work as expected after a new deployment or code change.

## Purpose

This test suite is built to be **lightweight, scalable, maintainable, and readable**, ensuring fast feedback during development or CI runs. 
It also serves as a **foundation for future automated UI testing**, such as deeper user flows, form validation, and regression checks.

Key architectural decisions include:
* **Page Object Model (POM)** structure for clean, reusable locators and actions
* **Centralized test data** (expected URLs, titles, labels) to avoid hardcoded values
* **Utility functions** (e.g. ```blockAds```) to simplify setup and reduce code duplication
* **Designed for long-term support**, easy scaling, and rapid maintenance

## Tech Stack

- **Test Automation:** Playwright
- **Programming Language:** JavaScript
- **CI/CD Integration:** Integrated with GitHub Actions
- **Code Quality:** ESLint + Prettier

## How to Run Tests

1. Clone the Repository:
```sh
git clone git@github.com:TheAnzhelika/letcode-smoke-tests.git
```
2. Install Dependencies:
```sh
npm install
```
3. Run Tests
```sh
npx playwright test
```

## Scope of Smoke Tests

- Home page loads with expected URL and title
- Core texts, buttons, and cards are visible on the home page
- Home page cards navigate to expected URLs & have correct titles
- Navigation bar links (including dropdowns) work and lead to expected content
- Theme toggle switches between light and dark mode

## Out of Scope

- Full user workflows (e.g. form submissions, quizzes)
- Deep functional coverage of all subpages
- Form validations and negative test cases
- Visual layout, responsiveness, accessibility
- Cross-browser and cross-device testing
