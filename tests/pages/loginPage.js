
const { expect } = require("@playwright/test")

class LoginPage {

    constructor(page){

        this.page = page;

        this.userName = page.locator("#username");

        this.password = page.locator("#password");

        this.loginButton = page.locator("#login");

        this.invalidMessage = page.locator('//b[contains(text(),"Invalid Login details")]');

    }


async navigateToUrl(){

    await this.page.goto("https://adactinhotelapp.com/");

}

async userName1(){

    await this.userName.fill('MAheshNR');

}

async password1(){

    await this.password.fill('JLX22X')
}

async click1(){

    await this.loginButton.click();  

}

async verify(){

    await expect(this.page).toHaveTitle("Adactin.com - Search Hotel");
    console.log("check")
    
}

async login(userName,password,Result){
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
    // if (Result=="fail"){
    // await expect(this.page).toHaveURL('https://adactinhotelapp.com/');
    // }else{
    //     await expect(this.page).toHaveURL('https://adactinhotelapp.com/SearchHotel.php');
    // }
    console.log(Result);
    
}
async inValid(){
   
   const value = await this.invalidMessage.isVisible();
    console.log(value);

}
}
module.exports = { LoginPage };
