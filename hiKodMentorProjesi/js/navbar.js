let buttonGroup = document.querySelector(".button__group");
// navbar'da bulunan butonların kapsayıcısını seçiyoruz.

let hamburger = document.querySelector(".hamburger");

// navbarda 700px altına düşünce görünen bar butonunu seçiyoruz.

let mentorler = document.querySelector("#mentorler");

// mentorler div'ini seçiyoruz.

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  buttonGroup.classList.toggle("active");
  if (buttonGroup.classList.contains("active")) {
    mentorler.style.marginTop = "300px";
  } else {
    mentorler.style.marginTop = "0";
  }

  // Burdaki if blocklarındaki amacımız yukardan açılan pencerenin aşağıda kalan yazıların üstünü kapatmasını engellemek
});

// bar butonuna basılınca css'de tanımlamış olduğumuz 'active' class'ı hem bar butonuna hem de butonların kapsayıcısına ekleniyor.
