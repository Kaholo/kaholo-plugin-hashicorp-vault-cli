# kaholo-plugin-hashicorp-vault-cli
Kaholo plugin for using the vault login cli command, that authenticates users to a Vault.

## Settings ##

* Vault URL - The URL to access the vault(both url and port). If not provided the plugin won't specify, and your cli will use whatever 
    is it's default vault URL. 
* Token - default authentication token to access the vault. The value passed is of a vault type, meaning it needs to be saved as Kaholo
    vault item first.

## Method: Login

**Description**

Authenticates users or machines to Vault. The token is cached on the local machine for future requests.

**Parameters**

* Token - Specific authentication token to access the vault in this call to the method.


Notice! You need to provide a token either in the Login method, in the settings, or in both.