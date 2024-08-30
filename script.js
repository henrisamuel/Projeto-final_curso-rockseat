function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //subistituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se não estiver no light mode,  manter a img original
    img.setAttribute("src", "./assets/avatar.png")
  }
}

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const alt = document.querySelector("#profile img")
  //subistituir o alt
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar o alt
    alt.setAttribute("alt", "Foto de um gato olhando para a tela.")
  } else {
    // se não estiver no light mode,  manter o alt original
    alt.setAttribute("alt", "foto de perfil virando pó")
  }
}
