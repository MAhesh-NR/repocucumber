const { LoginPage } = require("../pages/loginPage");

const { Given, When, Then } = require("@cucumber/cucumber");

let logobj;

         Given('user navigates to the adactin website', async function () {
            
            logobj = new LoginPage(this.page);
            
            await logobj.navigateToUrl();

         });

         When('the user enters the userName',async function () {

            

            await logobj.userName1();
          
         });

          When('the user enters the password',async function () {
            

            await logobj.password1();
          
         });


            When('the user clicks the login button',async function () {
               

                await logobj.click1();
           
         });


          Then('user navigates to the Search Hotel page',async function () {
            

            await logobj.verify();
          
         });


 When('user enters the invalid <{string}> and invalid <{string}> and fail clicks the login button',async function (userName,password,Result) {
               
              await logobj.login(userName,password,Result);          

         });

         When('user enters the invalid {string} and invalid {string} and {string} clicks the login button', async function (userName,password,Result) {
          await logobj.login(userName,password,Result);          

         });
        
         Then('user gets the error message',async function () {
           await logobj.inValid();

         });        