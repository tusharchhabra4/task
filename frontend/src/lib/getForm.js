import { fetchAPI } from "./fetchAPI";

export async function getForm() {
  const data = await fetchAPI(
    "/api/forms?pLevel"
  );

  return data.data[0];
}