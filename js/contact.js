const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    status.textContent = "✅ Message sent successfully! We'll get back to you soon.";
    form.reset();
  } else {
    status.textContent = "❌ Something went wrong. Please try again later.";
  }
});
