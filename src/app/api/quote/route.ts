export async function GET() {
  const res = await fetch("https://zenquotes.io/api/today");
  const data = await res.json();

  return Response.json(data);
}
