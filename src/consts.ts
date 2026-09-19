// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "SIMSERP";
export const SITE_DESCRIPTION = "Sims Software Solutions!";
export const API_URL = 'https://graph.facebook.com/v26.0/1374859062378492/messages';
export const TOKEN_URL = 'https://graph.facebook.com/oauth/access_token';
export const CLIENT_ID = '1580946416435626';
export const CLIENT_SECRET = '3ec02286222ab2baf1569b90869d506f';
export const TOKEN = 'EAAWd3MWPgaoBShJSMGXZAPiUpUieTZBAG2nayuvYYasGyWq0j6HANfUFQ8MpsTbfpcbOtrZCNCgeiesmUD6UYqjEWzCHrEnDdaCZB45pQFPVvAOj3Bl6wmQWaWG52HqetGhc5rnEJ5ryi3jTjcJsjpqsb9s2LnCV8rnYaeyfRNU5L8wvouteJZBIVscCCRzWIhwZDZD';
export const TELEPHONE = '256772807127';

export interface tokenData {
  access_token: string;
  token_type: string;
}

// export async function getBearerToken(): Promise<string> {

//      const tokenUrl = TOKEN_URL + "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&grant_type=client_credentials";
  
//     const response = await fetch(tokenUrl, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     }
//     });

//     const data = await response.json() as tokenData;
//     console.log('Access Token Object:', data);
    
//     return data.access_token; 

// }