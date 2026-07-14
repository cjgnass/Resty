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

export async function checkout(order: string) {
  const csrfToken = await getCsrfToken();
  if (csrfToken === undefined) {
    throw new Error("CSRF token not found");
  }
  const response = await fetch(
    "http://localhost:8000/api/restaurant/checkout",
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

  const { url, error } = await response.json();
  if (!response.ok) {
    throw new Error(error);
  }
  window.location.assign(url);
}
