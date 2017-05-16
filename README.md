### Software Prerequites

Install nodejs and check its version after its installation:

  `node -v`
   
  `npm -v`

### Getting Started
1. Clone the code to your local
   
    `git clone https://github.com/JackieGe/EmployeeApp.git`

2. Install package based on "package.json". Firstly please cd to the root directly of the project

   `npm install`
   
    In China we can use taobao image:
    
    `npm install --registry "https://registry.npm.taobao.org/"`

3. Build.
    
    `npm run build`

4. Start
    
    `npm start`
    
    Then can access `http://localhost:8081`, recommend using Chrome, firefox, IE 11 or above
     
### e2e testing
1. Install protractor 
   `npm install -g protractor`
   
   For Mac and Linux, we may need super right:
   `sudo npm install -g protractor`
   
2. Update webdriver-manager

   `webdriver-manager udpate`
   
   For Mac and Linux, we may need super right:
   
   `sudo webdriver-manager update`
   
3. Start Selenuim Server

   `webdriver manager start`
   
    For Mac and Linux, we may need super right:
      
    `sudo webdriver-manager start`
    
4. Open terminal and cd to the project root folder, then do:
 
   `npm run test:e2e` or `protractor config.js`
   
### Docker support
If you want to use docker, you follow:

`npm run releasedocker`

and then

`npm run startcontainer`

Then you can access `http://localhost:8081`