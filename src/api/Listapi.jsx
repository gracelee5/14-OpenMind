export async function ListApi(newOffset = 0) {
  const response = await fetch(
    `https://openmind-api.vercel.app/6-14/subjects/?limit=8&offset=${newOffset}`
  );
  const body = await response.json();
  return body;
}
