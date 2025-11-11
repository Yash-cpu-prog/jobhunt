const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("noResults");
const jobCount = document.getElementById("jobCount");

// 8 Jobs with real logo URLs
const jobs = [
  { title: "Frontend Developer", company: "TechNova", location: "Remote", type: "remote", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", desc: "Work with React.js, Tailwind CSS, and frontend tools." },
  { title: "Backend Engineer", company: "CodeWorks", location: "Pune", type: "fulltime", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png", desc: "Develop APIs with Node.js, Express, MongoDB." },
  { title: "Data Analyst Intern", company: "InsightPro", location: "Mumbai", type: "internship", logo: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png", desc: "Analyze data and create dashboards using Power BI." },
  { title: "Full Stack Developer", company: "DevSphere", location: "Bangalore", type: "fulltime", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png", desc: "Build full-stack apps using MERN stack." },
  { title: "UI/UX Designer", company: "DesignHive", location: "Remote", type: "remote", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", desc: "Design modern user interfaces using Figma." },
  { title: "Machine Learning Engineer", company: "AI Labs", location: "Hyderabad", type: "fulltime", logo: "https://cdn-icons-png.flaticon.com/512/4712/4712107.png", desc: "Build ML models with TensorFlow and Scikit-learn." },
  { title: "Marketing Intern", company: "GrowthNest", location: "Delhi", type: "internship", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png", desc: "Assist in digital marketing and brand strategies." },
  { title: "DevOps Engineer", company: "Cloudify", location: "Chennai", type: "fulltime", logo: "https://cdn-icons-png.flaticon.com/512/2721/2721277.png", desc: "Manage CI/CD pipelines and cloud deployments." }
];

// Render Jobs
function displayJobs(filteredJobs) {
  jobList.innerHTML = "";
  jobCount.textContent = filteredJobs.length ? `📋 Total Jobs: ${filteredJobs.length}` : "";
  if (filteredJobs.length === 0) {
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";
  filteredJobs.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("job-card");
    card.innerHTML = `
      <img src="${job.logo}" alt="${job.company}" class="job-logo" />
      <div class="job-info">
        <h3>${job.title}</h3>
        <p><strong>${job.company}</strong></p>
        <p>${job.location}</p>
        <button class="details-btn">View Details</button>
        <button class="apply-btn">Apply</button>
      </div>
    `;
    card.querySelector(".details-btn").addEventListener("click", () => openPopup(job));
    card.querySelector(".apply-btn").addEventListener("click", () => alert(`✅ You applied for ${job.title} at ${job.company}!`));
    jobList.appendChild(card);
  });
}

// Popup
function openPopup(job) {
  const popup = document.createElement("div");
  popup.classList.add("job-popup", "active");
  popup.innerHTML = `
    <div class="popup-content">
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p>${job.desc}</p>
      <button class="close-btn">Close</button>
    </div>
  `;
  document.body.appendChild(popup);
  popup.querySelector(".close-btn").addEventListener("click", () => popup.remove());
}

// Filters
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.dataset.category;
    const filtered = category === "all" ? jobs : jobs.filter(job => job.type === category);
    displayJobs(filtered);
  });
});

// Search
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(value) || job.company.toLowerCase().includes(value)
  );
  displayJobs(filtered);
});

// Initial load
displayJobs(jobs);











