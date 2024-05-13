export async function ListApi() {
  const response = await fetch(
    'https://openmind-api.vercel.app/6-14/subjects/'
  );
  const body = await response.json();
  return body;
}
