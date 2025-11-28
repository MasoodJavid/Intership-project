// ====== 1. UPDATE BANNER (UPLOAD PYTHON COURSE BANNER) ======
const updateBannerBtn = document.getElementById("updateBannerBtn");
const bannerImage = document.getElementById("bannerImage");
const bannerCaption = document.getElementById("bannerCaption");

updateBannerBtn.addEventListener("click", () => {
  // Simulate adding new "Python Course Banner"
  bannerImage.src = "python-programing-banner.jpg"; // put this image in your images/ folder
  bannerCaption.textContent = "Python Course - New Banner Added!";
});

// ====== 2. UPDATE COURSE DESCRIPTIONS (TEXT UPDATE) ======
const updateCoursesBtn = document.getElementById("updateCoursesBtn");
const courseDescriptions = document.querySelectorAll(".course-desc");

const newDescriptions = [
  "Master HTML & CSS with hands-on projects and responsive layouts.",
  "Learn modern JavaScript with real-world examples and mini apps.",
  "Build Python programs for automation, data, and web applications."
];

updateCoursesBtn.addEventListener("click", () => {
  courseDescriptions.forEach((p, index) => {
    p.textContent = newDescriptions[index] || p.textContent;
  });
});

// ====== 3. SIMPLE FORM HANDLING (LOGIN, SIGNUP, CONTACT) ======

// LOGIN FORM
const loginForm = document.getElementById("loginForm");
const loginMsg = document.getElementById("loginMsg");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    loginMsg.textContent = "Please enter email and password.";
    loginMsg.style.color = "red";
  } else {
    loginMsg.textContent = "Login successful (demo).";
    loginMsg.style.color = "green";
  }
});

// SIGNUP FORM
const signupForm = document.getElementById("signupForm");
const signupMsg = document.getElementById("signupMsg");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!name || !email || !password) {
    signupMsg.textContent = "All fields are required.";
    signupMsg.style.color = "red";
  } else if (password.length < 6) {
    signupMsg.textContent = "Password must be at least 6 characters.";
    signupMsg.style.color = "red";
  } else {
    signupMsg.textContent = "Signup successful (demo).";
    signupMsg.style.color = "green";
  }
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const contactMsg = document.getElementById("contactMsg");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    contactMsg.textContent = "Please fill all fields.";
    contactMsg.style.color = "red";
  } else {
    contactMsg.textContent = "Message sent (demo).";
    contactMsg.style.color = "green";
  }
});

// ====== 4. UPDATE ANNOUNCEMENT (UPLOAD NEW CONTENT) ======
const updateAnnouncementBtn = document.getElementById("updateAnnouncementBtn");
const announcementText = document.getElementById("announcementText");

updateAnnouncementBtn.addEventListener("click", () => {
  announcementText.textContent = "New Python Batch starts on Monday! Enroll now.";
});

// ====== 5. SIMPLE TESTING LOGS (CHECK BUTTONS/LINKS/FORMS) ======
function testWebsite() {
  console.log("Testing buttons, links, and forms...");

  const buttons = document.querySelectorAll("button");
  console.log("Total buttons found:", buttons.length);

  const links = document.querySelectorAll("a");
  console.log("Total links found:", links.length);

  // You could expand this to actually test if href is valid, etc.
}

testWebsite();