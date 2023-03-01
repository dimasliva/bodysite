export function createCatalogs() {
  const container = document.createElement("div")
  const title = document.createElement("div")
  const blocks = document.createElement("div")

  const catalogsArr = [
    {title: "Компьютеры", product: 393, icon: "desctop"},
    {title: "Одежда", product: 245, icon: "cloth"},
    {title: "Электроника", product: 556, icon: "electronics"},
    {title: "Автотовары", product: 128, icon: "products"},
    {title: "Спорт и отдых", product: 197, icon: "sport"},
    {title: "Детские товары", product: 86, icon: "child"},
    {title: "Туризм и рыбалка", product: 92, icon: "tourism"},
    {title: "Инструмент", product: 104, icon: "tools"},
  ] 
  createBlock(catalogsArr, blocks)

  container.classList.add("catalog_block")

  title.classList.add("title")
  blocks.classList.add("catalogs")
  
  title.innerHTML = "Каталог товаров"


  container.appendChild(title)
  container.appendChild(blocks)
  return container
}
function createBlock(catalogs, container) {
  let catalog = []
  let catalogIcon = []
  let catalogTitle = []
  let catalogToolsNum = []
  for (let i = 0; i < catalogs.length; i++) {
    catalog[i] = catalogs[i];
    catalogTitle[i] = catalogs[i];
    catalogToolsNum[i] = catalogs[i];
    catalogIcon[i] = catalogs[i];

    catalog[i] = document.createElement("div")
    catalogTitle[i] = document.createElement("div")
    catalogToolsNum[i] = document.createElement("div")
    catalogIcon[i] = document.createElement("div")

    catalog[i].classList.add("catalog")
    catalogTitle[i].classList.add("title")
    catalogToolsNum[i].classList.add("num")
    catalogIcon[i].classList.add("img")
    catalogIcon[i].classList.add(catalogs[i].icon)

    catalogTitle[i].innerHTML = catalogs[i].title
    catalogToolsNum[i].innerHTML = catalogs[i].product + ' товара'

    catalog[i].appendChild(catalogIcon[i]);
    catalog[i].appendChild(catalogTitle[i]);
    catalog[i].appendChild(catalogToolsNum[i]);

    container.appendChild(catalog[i]);
  }
}