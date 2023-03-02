export function createCatalogs() {
  const container = document.createElement("div")
  const title = document.createElement("div")
  const blocks = document.createElement("div")

  const btn = document.createElement("div")
  const btnText = document.createElement("span")
  const btnArrow = document.createElement("span")

  let isMobile = window.innerWidth <= 414
  addEventListener("resize", (event) => {
    isMobile = window.innerWidth <= 414
    let elements = document.getElementsByClassName("num")
    if(!isMobile) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = catalogsArr[i].product + " товара"
      }
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = catalogsArr[i].product
      }
    }
  });
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

  createBlock(catalogsArr, blocks, isMobile)
  container.classList.add("catalog_block")

  title.classList.add("title")
  blocks.classList.add("catalogs")
  btn.classList.add(...["btn", "more"])
  btnText.classList.add("text")
  btnArrow.classList.add(...["img", "arrow"])
  
  title.innerHTML = isMobile ? "Популярные категории" : "Каталог товаров"
  btnText.innerHTML = "Показать ещё"


  container.appendChild(title)
  container.appendChild(blocks)

  if(isMobile) {
    btn.appendChild(btnText)
    btn.appendChild(btnArrow)
    container.appendChild(btn)
  }
  return container
}
function createBlock(catalogs, container, isMobile) {
  let catalogLeft = []
  let catalogRight = []
  let catalogArrow = []

  let catalog = []
  let catalogIcon = []
  let catalogTitle = []
  let catalogToolsNum = []
  for (let i = 0; i < catalogs.length; i++) {
    catalog[i] = catalogs[i];
    catalogTitle[i] = catalogs[i];
    catalogToolsNum[i] = catalogs[i];
    catalogIcon[i] = catalogs[i];

    catalogLeft[i] = document.createElement("div")
    catalogRight[i] = document.createElement("div")
    catalogArrow[i] = document.createElement("span")

    catalog[i] = document.createElement("div")
    catalogTitle[i] = document.createElement("div")
    catalogToolsNum[i] = document.createElement("div")
    catalogIcon[i] = document.createElement("div")

    catalogLeft[i].classList.add("left")
    catalogRight[i].classList.add("right")
    catalogArrow[i].classList.add(...["img", "arrow"])

    catalog[i].classList.add("catalog")
    catalogTitle[i].classList.add("title")
    catalogToolsNum[i].classList.add("num")
    catalogIcon[i].classList.add("img")
    catalogIcon[i].classList.add(catalogs[i].icon)

    catalogTitle[i].innerHTML = catalogs[i].title
    catalogToolsNum[i].innerHTML = isMobile ? catalogs[i].product : catalogs[i].product + " товара"

    catalogLeft[i].appendChild(catalogIcon[i]);
    catalogLeft[i].appendChild(catalogTitle[i]);
    catalogRight[i].appendChild(catalogToolsNum[i]);
    catalogRight[i].appendChild(catalogArrow[i]);
    catalog[i].appendChild(catalogLeft[i]);
    catalog[i].appendChild(catalogRight[i]);

    container.appendChild(catalog[i]);
  }
}