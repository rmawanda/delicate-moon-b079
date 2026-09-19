import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';
import { DatabaseSync } from 'node:sqlite';

export const POST: APIRoute = async ({ request }) => {
  // const response = await fetch('https://graph.facebook.com/v26.0/1374859062378492/messages', {
  //   headers: { Authorization: `Bearer ${getSecret('API_SECRET')}` },
  // });
  // const data = await response.json();
  // return new Response(JSON.stringify(data));
const url='https://graph.facebook.com/v26.0/1374859062378492/messages';
const token=getSecret('API_SECRET');
const url2=import.meta.env.API_URL;
const data = await request.json();
var ret="";
  try {
    const response = await fetch(url, {
      method: 'POST', // Specify the HTTP method
      headers: {
        'Content-Type': 'application/json', // Inform the server you are sending JSON data
        'Authorization': `Bearer ${token}`   // Pass your Bearer token here
      },
      body: JSON.stringify(data) // Convert your JavaScript object into a JSON string
    });

    if (!response.ok) {
      ret=`HTTP error! Status: ${response.status}`;
      return new Response(
          JSON.stringify({ message: 'Error',ErrorMsg:ret}),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );      
    }

    const responseData = await response.json(); // Parse the JSON response from the server
    return new Response(
          JSON.stringify({ message: 'Success!',ErrorMsg:''}),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    
  } catch (error) {
   ret='Error making POST request:';
  }

  return new Response(
      JSON.stringify({ message: 'Error',ErrorMsg:ret}),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );      



};