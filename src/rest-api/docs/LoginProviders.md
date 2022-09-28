# MilestoneIntegrationPlatformVmsResTfulApi.LoginProviders

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**displayName** | **String** |  | [optional] 
**id** | **String** | ID | [optional] 
**name** | **String** | Name | [optional] 
**clientId** | **String** | Client ID. Client ID is retrieved as part of registering with the external IDP | [optional] 
**clientSecret** | **String** | Client secret. Client secret is retrieved as part of registering with the external IDP | [optional] 
**clientSecretHasValue** | **Boolean** | Client secret has value. Tells if the client secret stored on the server has a value or not. | [optional] 
**authority** | **String** | Authentication authority. Authentication authority for the external IDP | [optional] 
**callbackPath** | **String** | Callback path. Callback path for the identity provider | [optional] 
**scopes** | **[String]** | Scopes. Scopes to include in queries to external IDP | [optional] 
**userNameClaimType** | **String** | Preferred user name claim. The name of the claim used for generating unique user names for the local users | [optional] 
**promptForLogin** | **Boolean** | Prompt for login. Determines whether users will be prompted for credentials every time they log on | [optional] 
**relations** | [**LoginProvidersRelations**](LoginProvidersRelations.md) |  | [optional] 
