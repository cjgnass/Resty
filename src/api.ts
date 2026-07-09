export function getCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}

export async function getCsrfToken() {
  await fetch("http://localhost:8000/api/restaurant/csrf", {
    credentials: "include",
  });
  return getCookie("csrftoken");
}

export async function submitOrder(order: string) {
  const csrfToken = await getCsrfToken();
  console.log(csrfToken);
  if (csrfToken === undefined) {
    throw new Error("CSRF token not found");
  }
  const response = await fetch(
    "http://localhost:8000/api/restaurant/submit-order",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: order,
    },
  );
  return response.json();
}
