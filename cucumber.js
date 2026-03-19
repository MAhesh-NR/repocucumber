const { TIMEOUT } = require("node:dns");

module.exports = {

    default: {

        paths: ["tests/feature/**/*.feature"],

        require: ["tests/stepDef/**/*.js", "tests/support/**/*.js"],

        format: ["progress","allure-cucumberjs/reporter"],

        parellel: 1,

        // retry: 1,
        
        TIMEOUT:80000,
        

    },
};