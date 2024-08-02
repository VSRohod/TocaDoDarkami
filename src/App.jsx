import { useState } from 'react'
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
          <h3>Fursuiter, Gamer e Fullstack Developer</h3>
        </div>
      </header>
    
      <main>
      
      </main>
    </div>
  )
}

export default App
