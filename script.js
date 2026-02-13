const BASE_PATH = "images";

// универсальная функция проверки картинки
function imgWithFallback(src, alt) {
  return `
    <img 
      src="${src}" 
      alt="${alt}"
      onerror="this.onerror=null;this.src='${BASE_PATH}/no-image.png';console.warn('❌ Нет картинки:', '${src}')"
    >
  `;
}

function showProduct(id) {
  const p = insecticides.find(x => x.id === id);
  if (!p) {
    alert("Препарат не найден: " + id);
    return;
  }

  header.innerText = p.name;

  const productImg = `${BASE_PATH}/${p.id}/product.png`;
  const pestImg = `${BASE_PATH}/${p.id}/pest.jpg`;

  app.innerHTML = `
    <div class="card">
      <h3>Препарат</h3>
      ${imgWithFallback(productImg, p.name)}
    </div>

    <div class="card">
      <h3>Зараркунанда</h3>
      ${imgWithFallback(pestImg, "Pest")}
    </div>

    <pre style="white-space:pre-wrap;padding:12px">${p.text}</pre>

    <div class="button" onclick="showInsecticides()">⬅ Орқага</div>
  `;
}

showMain();
