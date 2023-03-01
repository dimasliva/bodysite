export function createNavbar() {
  const container = document.createElement("div")
  const blocks = document.createElement("div")


  createBlock(blocks, {title: "Доставка по России", desc: "Осуществляется транспортными компаниями или Почтой России", img: "deliver"})
  createBlock(blocks, {title: "On-line оплата на сайте", desc: "Оплата производится банковской картой  и электронными деньгами", img: "payment"})
  createBlock(blocks, {title: "Система скидок", desc: "Накопительные скидки и бонусная программа для наших клиентов", img: "sales"})

  container.classList.add("navbar")
  blocks.classList.add("blocks")
  
  container.appendChild(blocks)
  return container
}
function createBlock(container, data) {
  const block = document.createElement("div")

  const img = document.createElement("span")

  const about = document.createElement("div")
  const title = document.createElement("div") 
  const desc = document.createElement("div")
  
  block.classList.add("block")
  about.classList.add("about")
  img.classList.add("img")
  img.classList.add(data.img)
  title.classList.add("title")
  desc.classList.add("desc")

  title.innerHTML = data.title
  desc.innerHTML = data.desc

  about.appendChild(title)
  about.appendChild(desc)

  block.appendChild(img)
  block.appendChild(about)

  container.appendChild(block)
}