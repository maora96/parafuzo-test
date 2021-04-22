export function fetchWithBody(url, method, content) {
  return fetch(url, {
    method: method,
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(content),
  });
}

export function fetchNoBody(url, method) {
  return fetch(url, {
    method: method,
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
