const app = document.getElementById("app");
const header = document.getElementById("header");

const insecticides = [
  {
    id: "akara_max",
    name: "AKARA MAX® 66% э.м.к.",
    text: `Зарарли каналарга қарши юқори самарали ихтисослашган акарицид.
Таъсир этувчи моддаси: Propargit 600 g/L + Geksitiazoks 60 g/L.
Препаратив шакли: Эмульсия концентрати`
  },
  {
    id: "mospi_chem",
    name: "MOSPI CHEM® 20% н.кук.",
    text: `Кенг таъсир доирасига эга инсектисид.
Таъсир этувчи моддаси: Acetamiprid 200 g/kg.
Препаратив шакли: Намланувчи кукун`
  },
  {
    id: "mospi_max",
    name: "MOSPI MAX® 35% с.д.г.",
    text: `Тизимли таъсирга эга замонавий инсектисид.
Таъсир этувчи моддаси: Acetamiprid 350 g/kg.
Препаратив шакли: Суда эрувчи доначалар`
  },
  {
    id: "pirido_chem",
    name: "PIRIDO CHEM® 20% н.кук.",
    text: `Сўрувчи зараркунандаларга қарши самарали восита.
Таъсир этувчи моддаси: Pirimicarb 200 g/kg.
Препаратив шакли: Намланувчи кукун`
  },
  {
    id: "tepek_chem",
    name: "TEPEK CHEM® 50% с.д.г.",
    text: `Инновацион инсектисид, барқарор таъсирга эга.
Таъсир этувчи моддаси: Flonicamid 500 g/kg.
Препаратив шакли: Суда эрувчи доначалар`
  },
  {
    id: "uvertim_plus",
    name: "UVERTIM+® 18% э.м.к.",
    text: `Акарицид ва инсектисид таъсирига эга.
Таъсир этувчи моддаси: Abamectin 18 g/L.
Препаратив шакли: Эмульсия концентрати`
  },
  {
    id: "yvertim",
    name: "YVERTIM® 1.8% э.м.к.",
    text: `Сўрувчи зараркунандаларга қарши.
Таъсир этувчи моддаси: Abamectin 18 g/L.
Препаратив шакли: Эмульсия концентрати`
  },
  {
    id: "udonis",
    name: "UDONIS® 5% с.к.",
    text: `Контакт ва тизимли таъсирга эга.
Таъсир этувчи моддаси: Lambda-cyhalothrin 50 g/L.
Препаратив шакли: Суспензия концентрати`
  },
  {
    id: "upolit",
    name: "UPOLIT® 75% э.м.к.",
    text: `Кучли инсектицид, тез таъсир қилади.
Таъсир этувчи моддаси: Chlorpyrifos 750 g/L.
Препаратив шакли: Эмульсия концентрати`
  },
  {
    id: "utastar",
    name: "UTASTAR® 10% э.м.к.",
    text: `Зараркунандаларга қарши юқори самарали.
Таъсир этувчи моддаси: Bifenthrin 100 g/L.
Препаратив шакли: Эмульсия концентрати`
  },
  {
    id: "komfidor_profi",
    name: "KOMFIDOR PROFI® 20% с.э.к.",
    text: `Тизимли таъсирга эга инсектисид.
Таъсир этувчи моддаси: Imidacloprid 200 g/L.
Препаратив шакли: Сувда эрувчи концентрат`
  },
  {
    id: "ukleym",
    name: "UKLEYM® 5% с.э.г.",
    text: `Янги авлод инсектициди.
Таъсир этувчи моддаси: Emamectin benzoate 50 g/kg.
Препаратив шакли: Сувда эрувчи гранулалар`
  },
  {
    id: "ucefat",
    name: "UCEFAT® 75% э.кук.",
    text: `Контакт таъсирга эга.
Таъсир этувчи моддаси: Acephate 750 g/kg.
Препаратив шакли: Эрувчи кукун`
  },
  {
    id: "uspilan",
    name: "USPILAN® 20% н.кук.",
    text: `Сўрувчи зараркунандаларга қарши.
Таъсир этувчи моддаси: Acetamiprid 200 g/kg.
Препаратив шакли: Намланувчи кукун`
  },
  {
    id: "uprokleyem_fit_500",
    name: "UPROKLEYM FIT-500® 50% с.э.г.",
    text: `Биологик асосдаги инсектисид.
Таъсир этувчи моддаси: Emamectin benzoate 500 g/kg.
Препаратив шакли: Сувда эрувчи гранулалар`
  },
  {
    id: "ukarat_forte",
    name: "UKARAT FORTE® 50% э.м.к.",
    text: `Кенг спектрли инсектисид.
Таъсир этувчи моддаси: Fenoxycarb 500 g/L.
Препаратив шакли: Эмульсия концентрати`
  }
];

function showInsecticides() {
  header.innerText = "Инсектицидлар";
  app.innerHTML = insecticides
    .map(
      p => `
      <div class="button" onclick="showProduct('${p.id}')">
        ${p.name}
      </div>
    `
    )
    .join("");
}

function showProduct(id) {
  const p = insecticides.find(x => x.id === id);
  header.innerText = p.name;
  app.innerHTML = `
    <div class="card">
      <img src="images/${p.id}/product.png">
    </div>
    <div class="card">
      <img src="images/${p.id}/pest.jpg">
    </div>
    <pre style="white-space:pre-wrap;padding:12px">${p.text}</pre>
    <div class="button" onclick="showInsecticides()">⬅ Орқага</div>
  `;
}

showInsecticides();
