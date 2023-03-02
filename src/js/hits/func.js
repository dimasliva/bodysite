export function createHits() {
  const container = document.createElement("div")

  const header = document.createElement("div")
  const title = document.createElement("div")

  const btns = document.createElement("div")
  const btnLeft = document.createElement("div")
  const btnRight = document.createElement("div")
  const arrowLeft = document.createElement("div")
  const arrowRight = document.createElement("div")

  const blocks = document.createElement("div")
  
  const hitsArr = [
    {title: "Смартфон Apple Iphone 8 64GB Gold", price: "56 890", lastPrice: "56 990", reviews: 10, stars: 5, icon: "iphone"},
    {title: "Смартфон Samsung Galaxy S8 64GB Black", price: "49 990", lastPrice: "54 990", reviews: 12, stars: 45, icon: "samsung"},
    {title: "Смартфон Huawei Honor 9 64GB Blue", price: "26 990", lastPrice: null, reviews: 8, stars: 4, icon: "huawei"},
    {title: "Смартфон ASUS ZenFone 4 Max ZC554KL 16GB Black", price: "13 990", lastPrice: null, reviews: 5, stars: 3, icon: "asus"},
  ] 
  let isMobile = window.innerWidth <= 414
  let textHit = ""
  if(!isMobile) {
      textHit = "hit"
  } else {
      textHit = "ХИТ"
  }
  createBlock(hitsArr, blocks, textHit)

  container.classList.add("hits_block")

  header.classList.add("header")
  title.classList.add("title")

  btns.classList.add("bts")
  arrowLeft.classList.add(...["img", "arrow"])
  arrowRight.classList.add(...["img", "arrow"])
  btnLeft.classList.add(...["btn", "left"])
  btnRight.classList.add(...["btn", "right"])

  blocks.classList.add("catalogs")
  blocks.classList.add("catalogs")
  
  title.innerHTML = "Хиты продаж"

  addEventListener("resize", (event) => {
    isMobile = window.innerWidth <= 414
    let elements = container.getElementsByClassName("hit")
    if(!isMobile) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "hit"
      }
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "ХИТ"
      }
    }
  });

  btnLeft.appendChild(arrowLeft)
  btnRight.appendChild(arrowRight)

  btns.appendChild(btnLeft)
  btns.appendChild(btnRight)

  header.appendChild(title)
  header.appendChild(btns)

  container.appendChild(header)
  container.appendChild(blocks)
  return container
}
function createBlock(catalogs, container, textHit) {
  let catalog = []
  let catalogHeader = []
  let catalogLoop = []
  let catalogHit = []

  let catalogHoverContainer = []
  let catalogHover = []
  let btnBuyOneClick = []

  let catalogIcon = []
  let catalogTitle = []
  let catalogStars = []
  let catalogReviews = []
  let catalogPrice = []
  let catalogLastPrice = []
  let catalogInStock = []
  let catalogCart = []
  let catalogRating = []
  let catalogHeart = []
  let catalogPrices = []
  let catalogFooter = []
  let catalogFooterIcons = []
  let catalogRatingBlock = []
  let succesIcon = []
  let stockText = []
  for (let i = 0; i < catalogs.length; i++) {
    
    catalog[i] = catalogs[i];
    catalogTitle[i] = catalogs[i];
    catalogHeader[i] = catalogs[i];
    catalogLoop[i] = catalogs[i];
    catalogHover[i] = catalogs[i];
    catalogHoverContainer[i] = catalogs[i];
    catalogHit[i] = catalogs[i];
    catalogIcon[i] = catalogs[i];
    catalogStars[i] = catalogs[i];
    catalogReviews[i] = catalogs[i];
    catalogPrice[i] = catalogs[i];
    catalogLastPrice[i] = catalogs[i];
    catalogInStock[i] = catalogs[i];
    catalogCart[i] = catalogs[i];
    catalogRating[i] = catalogs[i];
    catalogHeart[i] = catalogs[i];
    catalogPrices[i] = catalogs[i];
    catalogFooter[i] = catalogs[i];
    catalogFooterIcons[i] = catalogs[i];
    catalogRatingBlock[i] = catalogs[i];
    btnBuyOneClick[i] = catalogs[i];
    succesIcon[i] = catalogs[i];
    stockText[i] = catalogs[i];
    
    catalog[i] = createDiv( ["catalog",])
    catalogHeader[i] = createDiv( ["header",])
    catalogTitle[i] = createDiv( ["title",])
    catalogLoop[i] = createDiv( ["loop", "img"])
    catalogHover[i] = createDiv( ["hover", "img"])
    catalogHoverContainer[i] = createDiv( ["hover_block",])
    catalogHit[i] = createDiv( ["hit", ])
    catalogIcon[i] = createDiv( ["img", catalogIcon[i].icon])
    catalogStars[i] = createDiv( ["img", "star" + catalogStars[i].stars])
    catalogReviews[i] = createDiv( ["review",])
    catalogPrice[i] = createDiv( ["price",])
    catalogPrices[i] = createDiv( ["price_block",])
    catalogLastPrice[i] = createDiv( ["last_price", catalogs[i].lastPrice !== null ? "show" : null])
    catalogCart[i] = createDiv( ["btn", "cart"])
    catalogRating[i] = createDiv( ["rating", "img"])
    catalogHeart[i] = createDiv( ["heart", "img"])
    catalogFooter[i] = createDiv( ["footer",])
    catalogRatingBlock[i] = createDiv( ["rating_block",])
    catalogFooterIcons[i] = createDiv( ["icons",])
    btnBuyOneClick[i] = createDiv( ["buy",])
    catalogInStock[i] = createDiv( ["stock",])
    succesIcon[i] = createSpan( ["img", "buy"])
    stockText[i] = createSpan( ["text",])

    catalogTitle[i].innerHTML = catalogs[i].title
    catalogPrice[i].innerHTML = catalogs[i].price + ' ₽'
    stockText[i].innerHTML = "В наличии"
    catalogCart[i].innerHTML = "В корзину"
    catalogHit[i].innerHTML = textHit
    catalogReviews[i].innerHTML = catalogs[i].reviews + " отзывов"
    catalogLastPrice[i].innerHTML = catalogs[i].lastPrice ? catalogs[i].lastPrice + ' ₽' : null
    btnBuyOneClick[i].innerHTML = "Купить в 1 клик"

    appendContainer(catalogHoverContainer[i], [ catalogHover[i],] )
    appendContainer(catalogIcon[i], [ catalogHoverContainer[i],] )
    appendContainer(catalogInStock[i], [ succesIcon[i], stockText[i] ] )
    appendContainer(catalogHeader[i], [ catalogLoop[i], catalogHit[i] ] )
    appendContainer(catalogPrices[i], [ catalogPrice[i], catalogLastPrice[i] ] )
    appendContainer(catalogFooterIcons[i], [ catalogRating[i], catalogHeart[i] ] )
    appendContainer(catalogFooter[i], [ catalogCart[i], catalogFooterIcons[i] ] )
    appendContainer(catalogRatingBlock[i], [ catalogStars[i], catalogReviews[i] ] )

    appendContainer(catalog[i], [ catalogHeader[i], catalogIcon[i], catalogTitle[i], catalogRatingBlock[i], catalogPrices[i], catalogInStock[i], catalogFooter[i], btnBuyOneClick[i], ] )
    container.appendChild(catalog[i]);
  }
}
function appendContainer(container, elements) {
  for (let i = 0; i < elements.length; i++) {
    container.appendChild(elements[i]);
  }
}
function createDiv(nameClass) {
  let element = document.createElement("div")
  element.classList.add(...nameClass)
  return element
}
function createSpan(nameClass) {
  let element = document.createElement("span")
  element.classList.add(...nameClass)
  return element
}