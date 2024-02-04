async function pb(url, options = {}) {
  const PB_API_URL = import.meta.env.VITE_PB_API_URL;
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    body: null,
  };
  try {
    const response = await fetch(`${PB_API_URL}/api/collections${url}`, {
      ...defaultOptions,
      ...options,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    if (!(error instanceof DOMException)) {
      throw new Error(error);
    }
  }
}
export default pb;
