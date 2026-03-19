const { LoginPage } = require("../pages/loginPage");

const { SearchHotel } = require("../pages/searchhotel")

const { Given, When, Then } = require("@cucumber/cucumber");

let logobj;
let searchHotelObj;




 Given('user navigates to Search Hotel page in adactin website', async function () {
logobj = new LoginPage(this.page);
            
            await logobj.navigateToUrl();
            await logobj.login('Trends06208','Trends@06208');
            
 
  searchHotelObj = new SearchHotel(this.page);
           
         });
         
         

When('the user selects the location',async function () {

  await searchHotelObj.location1();
         
         });


 When('the user selects the Hotel',async function () {

  await searchHotelObj.hotels1();
           
         });


 
         When('the user selects the Room Type',async function () {

          await searchHotelObj.roomType1();
          
         });
         
         

       When('the user selects the no of rooms',async function () {
           
        await searchHotelObj.noOfRooms1();
         });
         
         

      When('the user fill the check in date',async function () {

        await searchHotelObj.inDate1();
          
         });    



          When('the user fill the check out date',async function () {
          
            await searchHotelObj.outDate1();
         });



      When('the user selects the Adults per rooms',async function () {
        
        await searchHotelObj.adults1();  


         });
         
         

       When('the user selects the children per rooms',async function () {
          
        await searchHotelObj.child1();
         });


          Then('user navigates to the select Hotel page',async function () {

            await searchHotelObj.searchButton1();

          
         });


         
         

   
