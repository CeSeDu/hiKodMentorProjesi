let scrtollToTop = document.querySelector("#scrtollToTop");

// başlangıca dönmek için olan scroll butonunu seçiyoruz.

scrtollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// scroll butonuna basılınca scrollTo işlevine 0,0 değerlerini vererek sayfanın başına dönmeyi sağlıyoruz.
