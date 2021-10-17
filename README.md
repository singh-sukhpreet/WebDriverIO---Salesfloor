# wdioTest
Page Objects-based GUI tests using the [Webdriver.io](http://webdriver.io) framework

## Getting started
1. Install the LTS version of [Node.js](https://nodejs.org)
2. Clone the repo
3. Inside the project folder, do `npm install`

## Running tests
There are two test files and two run each one of them execute the following commands

### To Run Storefront Test cases
npx wdio run ./wdio.conf.js --spec test/testStorefront.js

### To Run Sidebar Test cases
npx wdio run ./wdio.conf.js --spec test/testSidebar.js

### To Run the All test cases 
npx wdio run ./wdio.conf.js

## Allure Reports
### Generate Allure Reports
Execute 'allure generate allure-results --clean' in your project repo

### Open Allure Report
Execute 'allure open' in your project repo
