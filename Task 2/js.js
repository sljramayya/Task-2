// Add adoptable pets to gallery on page load
const pets = [
  { name: "Bella", image: "images/dog1.jpg" },
  { name: "Luna", image: "images/dog2.jpg" },
  { name: "Charlie", image: "images/dog3.jpg" },
];

window.onload = function () {
  const gallery = document.getElementById("petGallery");
  pets.forEach(pet => {
    const div = document.createElement("div");
    div.className = "gallery-card";
    div.innerHTML = `<img src="${pet.image}" alt="${pet.name}" />
                     <p>${pet.name}</p>`;
    gallery.appendChild(div);
  });
};

// Form validation and success
document.getElementById("adoptForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("adopterName").value.trim();
  const email = document.getElementById("adopterEmail").value.trim();
  const pet = document.getElementById("petChoice").value;
  const msg = document.getElementById("formMsg");

  if (!name || !email || !pet) {
    msg.textContent = "⚠️ Please fill out all fields.";
    msg.style.color = "red";
    return;
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailRegex)) {
    msg.textContent = "⚠️ Invalid email format.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = `🎉 Application submitted to adopt ${pet}!`;
  msg.style.color = "green";
  this.reset();
});
