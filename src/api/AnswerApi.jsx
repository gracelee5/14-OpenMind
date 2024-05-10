export async function getRevies() {
  const response = await fetch(
    'https://openmind-api.vercel.app/docs/6-14/answers/`${}`'
  );
  const body = await response.json();
  return body;
}
