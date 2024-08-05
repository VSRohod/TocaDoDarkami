import { useState } from 'react'
// components
import Imagem from './components/imagem'

// images
import backgroundBanner from './assets/videos/background.mp4'
import backgroundBannerMobile from './assets/videos/backgroundMobile.mp4'

function App() {
  return (
    <div id='content'>
      <header>
        <div className='backgroundBanner'>
          <video muted autoPlay loop >
            <source media='(min-width : 800px)' src={backgroundBanner} type="video/mp4" />
            <source src={backgroundBannerMobile} type="video/mp4" />
          </video>
        </div>

        <div id='headerContent' className='flex colummAlign middleCenter'>
          <h1>[ Toca do Darkami ]</h1>
          <h5>Fursuiter, Gamer e Fullstack Developer</h5>
        </div>
      </header>
    
      <main>
        <section id='aboutMe' className='flex justifyCenter colummAlign'>
          <h3>Sobre Mim</h3>
          <p>lorem</p>
        </section>

        <section id='galeriaDesenhos' className='flex justifyCenter colummAlign'>
          <h3>Desenhos</h3>
          <section className='galeria'>
            <Imagem orientation="w-4 h-3" imagemTexto="Teste" source="https://i.pinimg.com/736x/b2/77/64/b27764ee886a30033a878660f243070e.jpg" />
            <Imagem orientation="w-2 h-2" imagemTexto="Teste2" source="https://img.freepik.com/fotos-gratis/foto-vertical-de-um-gatinho-ruivo-fofo-olhando-para-cima-em-uma-mesa-de-madeira_181624-51126.jpg" />
            <Imagem orientation="w-3 h-2" imagemTexto="Teste3" source="https://static.vecteezy.com/ti/fotos-gratis/p2/15192018-gato-se-concentra-enquanto-observa-suas-presas-imagem-vertical-foto.jpg" />
            <Imagem orientation="w-3 h-2" imagemTexto="Teste4" source="https://static.toiimg.com/photo/107091667/107091667.jpg" />
            <Imagem orientation="w-2 h-1" imagemTexto="Teste5" source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkmi1eaGSQuzjKE2T2qhTqehIYtK_oW3PSA&s" />
          </section>
        </section>
      </main>
    </div>
  )
}

export default App
