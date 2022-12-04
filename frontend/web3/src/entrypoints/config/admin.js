/*----------  Account Helper ----------*/
// Get account Handler
const accountHandler = require(root_path + '/web3/src/web3/account');

/*----------  Config Helper  ----------*/
// config
const configHandler = require("../../web3/config");
// Create config class with config path
const config = new configHandler.Config(configPath);

/*----------  Utils Helper  ----------*/
// utils
const utilsHelper = require("../../web3/utils")
// Create utils class
const utils = new utilsHelper.UniMaUtils();

// Add admin endpoint
exports.append_admin = async (address, new_address) => {
    try {
        await config.add_admin(new_address);
        return { "success": true };
    }
    catch (err) {
        return { "success": false, "error": err.message };
    }
};

// Delete admin endpoint
exports.delete_admin = async (address, new_address) => {
    try {
        await config.remove_admin(new_address);
        return { "success": true };
    }
    catch (err) {
        return { "success": false, "error": err.message };
    }
};

// Get admin endpoint
exports.get_admin = async (address, new_address) => {
    try {
        const admins = await config.get_admins(new_address);
        return { "success": true, "admins": admins };
    }
    catch (err) {
        return { "success": false, "error": err.message };
    }
};

// Is admin endpoint
exports.is_admin = async (address, new_address) => {
    try {
        const is_admin = await config.is_admin(new_address)
        return { "success": true, "is_admin": is_admin };
    }
    catch (err) {
        return { "success": false, "error": err.message };
    }
};