const BASEURL = "https://fitness-website-api-v1.onrender.com";

export async function checkoutPayment(planId) {
  const response = await fetch(`${BASEURL}/payments/checkout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      planId,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to start payment");
  }

  return data;
}