export default function handler(request, response) {
  response.status(200).json({ text: 'Hello' });
  // if (request.method === 'POST') {
  //   // add in how to handle a POST request
  // } else {
  //   // add in how to handle other HTTP requests
  // }
}
