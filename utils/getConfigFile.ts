const fs = require("fs");
const path = require("path");

const getConfigFile = () => {
    let config = {};

    try {
        const root = path.resolve(__dirname, "..");
        const configPath = path.resolve(root, "cyrus-ui.config.json");
        const configFile = fs.readFileSync(configPath);
        config = JSON.parse(configFile);
    } catch (e) {
        config = {};
    }
    return config;
};

module.exports = { getConfigFile };
