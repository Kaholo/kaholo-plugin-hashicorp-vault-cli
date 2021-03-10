const child_process = require("child_process")

async function runCLICommand(command, vaultUrl){
	return new Promise((resolve,reject) => {
		const callback = (error, stdout, stderr) => {
			if (error) {
			   return reject(`exec error: ${error}`);
			}
			if (stderr) {
				return resolve(stderr);
			}
			return resolve("success"); // not printing stdout, because -no-print=true flag doesn't work
		};
		if (vaultUrl){
			child_process.exec(command, {env: {'VAULT_ADDR': vaultUrl}}, callback);
		}
		else {
			child_process.exec(command, callback);
		}
	})
}

async function login(action, settings){
	const token = action.params.token || settings.token || "";
	if (!token){
		throw "token was not provided";
	}
	const vaultUrl = (action.params.vaultUrl || settings.vaultUrl || "").trim();

	const loginCmd = `vault login ${token}`;
	return runCLICommand(loginCmd, vaultUrl);
}

module.exports = {
    login
}