function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //subistituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img
    img.setAttribute("src", "./assets/avatar-light.jpeg")
  } else {
    // se não estiver no light mode,  manter a img original
    img.setAttribute("src", "./assets/avatar.jpeg")
  }
}

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const imagem = document.querySelector("#profile img")
  //subistituir o alt
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar o alt
    imagem.setAttribute("alt", "Foto de um gato olhando para a tela.")
  } else {
    // se não estiver no light mode,  manter o alt original
    imagem.setAttribute("alt", "foto de perfil virando pó")
  }
}
