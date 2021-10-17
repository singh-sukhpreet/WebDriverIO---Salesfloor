# wdioTest
Page Objects-based GUI tests using the [Webdriver.io](http://webdriver.io) framework

## Getting started
Install the LTS version of [Node.js](https://nodejs.org)
Clone the repo, then inside the project folder, do `npm install`

## Running tests
There are two test files and two run each one of them execute the following commands

### To Run Storefront Test cases
npx wdio run ./wdio.conf.js --spec testStorefront.js

### To Run Sidebar Test cases
npx wdio run ./wdio.conf.js --spec testSidebar.js

### To Run the All test cases 
npx wdio run ./wdio.conf.js


