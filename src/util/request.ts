export const request = async (url: string, options: { method: string, body?: object }) => {
  const { method, body } = options
  const resJson = await fetch(`http://localhost:8000${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  try {
    const json = await resJson.json();
    return json;
  } catch (err) {
    console.log(err)
    return resJson;
  }
}