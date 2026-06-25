const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchAPI(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    cache: "no-store",
    ...options,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}