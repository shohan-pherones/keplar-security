// ELEMENTS
const btnToggle = document.querySelector(".toggle-btn");
const menuLinks = document.querySelector(".menu-links");
const btnsDownload = document.querySelectorAll(".download-btn");
const downloadModal = document.querySelector(".download-modal");
const cloaseDownloadBtn = document.querySelector(".close-download-btn");
const overlay = document.querySelector(".overlay");

function overlayModalHide() {
  downloadModal.classList.remove("active");

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
  overlayModalHide();
});

// OVERLAY EVENT
overlay.addEventListener("click", () => {
  overlayModalHide();
});

// KEYDOWN EVENT ON DOCUMENT
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlayModalHide();
  }
});
