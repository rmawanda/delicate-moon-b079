import type { APIRoute } from 'astro';
import { TOKEN_URL,API_URL,CLIENT_ID,CLIENT_SECRET,TOKEN,TELEPHONE,type tokenData } from "../../consts";  


export const GET: APIRoute = async ({ request }) => {
     const tokenUrl = TOKEN_URL + "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&grant_type=client_credentials";
  
    const response = await fetch(tokenUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
    });

    const data = await response.json() as tokenData;
    console.log('Access Token Object:', data);

  return new Response(
      JSON.stringify(data),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );      



};