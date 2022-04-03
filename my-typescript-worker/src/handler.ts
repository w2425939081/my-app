// export async function handleRequest(request: Request): Promise<Response> {
//   return new Response(`request method: ${request.method}`)
// }

export async function handleRequest(request) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  });
}
// async function handleRequest(request) {
//   let response;
//   if (request.method === 'POST') {
//     response = await generate(request);
//   } else {
//     response = new Response('Expected POST', { status: 500 });
//   }
//   // ...
// }