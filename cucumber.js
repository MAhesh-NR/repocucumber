const { TIMEOUT } = require("node:dns");
const { format } = require("node:path");

module.exports = {

    default: {

        paths: ["tests/feature/**/*.feature"],

        require: ["tests/stepDef/**/*.js", "tests/support/**/*.js"],

        format: ["progress","allure-cucumberjs/reporter"],

        parellel: 1,

        // retry: 1,

        headless: false,

        TIMEOUT: 80000,
        

    },
};