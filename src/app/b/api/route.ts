// dummy API
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = {
    message: 'message',
  };
  return Response.json(data);
}
