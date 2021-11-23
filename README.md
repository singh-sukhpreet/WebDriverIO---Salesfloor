# wdioTest
Page Objects-based GUI tests using the [Webdriver.io](http://webdriver.io) framework

## Getting started
1. Install the LTS version of [Node.js](https://nodejs.org) - stable on (nvm use 14.18.1)
2. Clone the repo
3. Go to the project folder and install dependencies by executing `npm install` terminal

## Running tests
Execute the following commands

### To Run Storefront Test cases
npx wdio run ./wdio.conf.js --spec test/testStorefront.js

### To Run Sidebar Test cases
npx wdio run ./wdio.conf.js --spec test/testSidebar.js

### To Run the All test cases 
npx wdio run ./wdio.conf.js

## To Run tests through docker image 
1. Uncomment the following line from wdio.conf.js file 
   ( // args: ['--no-sandbox', '--disable-dev-shm-usage', '--headless'] )
3. docker pull sukhpreetsingh/wdio:1.0
4. docker container run -it sukhpreetsingh/wdio:1.0 bash
5. Execute (npx wdio run ./wdio.conf.js --spec test/testStorefront.js) to run storefront test cases
6. Execute (npx wdio run ./wdio.conf.js --spec test/testSidebar.js) to run sidebar test cases
 
## Allure Reports
Execute the following commands
### To Install Allure
brew install allure

### To Generate Allure Reports
allure generate allure-results --clean

### To Open Allure Report
allure open
