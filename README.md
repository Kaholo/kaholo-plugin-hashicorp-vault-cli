# kaholo-plugin-hashicorp-vault-cli
Kaholo plugin for using the vault login cli command, that authenticates users to a Vault.

## How To Use ##
Make sure you have the Hashicorp Vault CLI installed on your computer. 
Prior to using make sure you configure your vault server address using,

## Settings ##

1. Vault URL - Default URL to access the vault(both url and port). If not provided the plugin won't specify, and your cli will use
    whatever is it's default vault URL. 
2. Token - Default authentication token to access the vault. The value passed is of a vault type, meaning it needs to be saved as Kaholo
    vault item first.

## Method: Login

**Description**

Authenticates users or machines to Vault. The token is cached on the local machine for future requests.

**Parameters**

1. Vault URL - Specific URL to access the vault(both url and port) in this call to the method.
2. Token - Specific authentication token to access the vault in this call to the method.


Notice! You need to provide a token either in the Login method, in the settings, or in both.
You don't have to set Vault URL, but it is recommended.