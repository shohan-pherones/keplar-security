// ELEMENTS
const btnToggle = document.querySelector(".toggle-btn");
const menuLinks = document.querySelector(".menu-links");
const btnsDownload = document.querySelectorAll(".download-btn");
const downloadModal = document.querySelector(".download-modal");
const packageModal = document.querySelector(".package-modal");
const cloaseDownloadBtn = document.querySelector(".close-download-btn");
const packageDownloadBtn = document.querySelector(".pkg-download-btn");
const overlay = document.querySelector(".overlay");
const featuresParent = document.querySelector(".features-wrapper");
const pricingBtns = document.querySelectorAll(".pricing-btn");

// FEATURES DATA
const featuresArr = [
  {
    iconClass: "fa-solid fa-fingerprint",
    title: "Secure internet",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ratione?",
  },
  {
    iconClass: "fa-solid fa-shield-heart",
    title: "Malware protection",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ratione?",
  },
  {
    iconClass: "fa-solid fa-tower-broadcast",
    title: "Fast networking",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ratione?",
  },
  {
    iconClass: "fa-solid fa-shield-virus",
    title: "Anti-theft protection",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ratione?",
  },
  {
    iconClass: "fa-solid fa-user-shield",
    title: "User friendly",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ratione?",
  },
  {
    iconClass: "fa-solid fa-mosquito-net",
    title: "Ransomware guard",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ratione?",
  },
  {
    iconClass: "fa-solid fa-globe",
    title: "Safe search ability",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ratione?",
  },
  {
    iconClass: "fa-solid fa-robot",
    title: "Prevent phishing activity",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ratione?",
  },
];

function overlayModalHide(modalName) {
  if (modalName === "download") {
    downloadModal.classList.remove("active");
  }

  if (modalName === "package") {
    packageModal.classList.remove("active");
  }

  if (modalName === "both") {
    downloadModal.classList.remove("active");
    packageModal.classList.remove("active");
  }

  overlay.style.visibility = "hidden";
  overlay.style.opacity = 0;
}

// TOGGLE BUTTON HANDLER
btnToggle.addEventListener("click", () => {
  btnToggle.classList.toggle("active");
  menuLinks.classList.toggle("active");
});

// MENU LINK HANDLER
menuLinks.addEventListener("click", () => {
  menuLinks.classList.remove("active");
  btnToggle.classList.remove("active");
});

// DOWNLOAD BUTTON HANDLER
for (const btn of btnsDownload) {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    btn.setAttribute("href", "");
    downloadModal.classList.toggle("active");

    overlay.style.visibility = "visible";
    overlay.style.opacity = 1;
  });
}

// CLOSE DOWNLOAD BUTTON EVENT
cloaseDownloadBtn.addEventListener("click", () => {
  overlayModalHide("download");
});

// CLOSE PACKAGE BUTTON EVENT
packageDownloadBtn.addEventListener("click", () => {
  overlayModalHide("package");
});

// OVERLAY EVENT
overlay.addEventListener("click", () => {
  overlayModalHide("both");
});

// KEYDOWN EVENT ON DOCUMENT
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlayModalHide();
  }
});

// RENDERING FEATURES DATA
for (const feature of featuresArr) {
  renderFeature(feature);
}

// REANDER FEATURE
function renderFeature(data) {
  const markup = `
    <div class="feature">
      <span><i class="${data.iconClass}"></i></span>
      <h3>${data.title}</h3>
      <p>
        ${data.body}
      </p>
    </div>
  `;

  featuresParent.insertAdjacentHTML("afterbegin", markup);
}

// PRICING BTNS HANDLER
for (const btn of pricingBtns) {
  btn.addEventListener("click", () => {
    packageModal.classList.toggle("active");

    overlay.style.visibility = "visible";
    overlay.style.opacity = 1;
  });
}
