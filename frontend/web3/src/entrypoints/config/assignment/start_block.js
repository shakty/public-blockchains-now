

/*----------  Config Helper  ----------*/
// config
const configHandler = require("../../web3/config")
// Create config class with config path
const config = new configHandler.Config(configPath)



/*----------  Utils Helper  ----------*/
// utils
const utilsHelper = require("../../web3/utils")
// Create utils class
const utils = new utilsHelper.UniMaUtils()


// Set assignment start_block
exports.set_assignment_start_block = async (address, semester_id, assignment_id, start_block) => {
    try {
        await config.set_assignment_start_block(semester_id, assignment_id, start_block)
        return { "success": true };
    }
    catch (err) {
        return { "success": false, "error": err.message };
    }
};