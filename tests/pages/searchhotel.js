const { test, expect } = require("@playwright/test");



class SearchHotel {

    constructor(page){

        this.page = page;
        this.location = page.locator('#location');
        this.hotels = page.locator('#hotels');
        this.roomType = page.locator('#room_type');
        this.noOfRooms = page.locator('#room_nos');
        this.inDate = page.locator('#datepick_in');
        this.outDate = page.locator('#datepick_out');
        this.adults = page.locator('#adult_room');
        this.child = page.locator('#child_room');
        this.searchButton = page.locator('#Submit');
  
    }   


async location1(){
    
    await this.location.selectOption('London');
}
async hotels1(){
    await this.hotels.selectOption('Hotel Sunshine');
}
async roomType1(){
    await this.roomType.selectOption('Double');
}
async noOfRooms1(){
    await this.noOfRooms.selectOption('2');

}
async inDate1(){
    await this.inDate.fill('13/03/2026');
}
async outDate1(){
    await this.outDate.fill('14/03/2026');
}
async adults1(){
    await this.adults.selectOption('2');
}
async child1(){
    await this.child.selectOption('2');
}
async searchButton1(){
    await this.searchButton.click();
    
}

}

module.exports = { SearchHotel };