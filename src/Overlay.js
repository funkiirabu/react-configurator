import { GiTv } from 'react-icons/gi'
import { AiOutlineHighlight, AiOutlineShopping, AiFillCamera, AiOutlineArrowLeft } from 'react-icons/ai'

import { useSnapshot } from 'valtio'
import { state } from './store'

export default function Overlay() {
  const snap = useSnapshot(state)

  return (
    <div className="container">
      <header>
        <GiTv size="3em" />
        <AiOutlineShopping size="3em" />
      </header>

      {snap.intro ? <Intro /> : <Customizer />}
    </div>
  )
}

function Intro() {
  return (
      <section key="main">
        <div className="section--container">
          <div>
            <h1>NOZ OM I.</h1>
          </div>
          <div className="support--content">
            <div>
              <p>
                Visualize you're exclusive Nozomi shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination </strong>
                and define your own style.
              </p>
              <button 
              style={{ background: 'black' }}
              onClick={() => (state.intro = false)}>
                CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

function Customizer() {
  const snap = useSnapshot(state)

  const colors = ['#ccc', '#edd02d', '#021164', '#af011d', '#015a32']
  const decals = ['television', 'hannya', 'kitsune', 'retro', 'writing']

  return (
    <section key="custom">
      <div className="customizer">
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
              onClick={() => (state.selectedColor = color)}
              ></div>
          ))}
        </div>

        <div className="decals">
          <div className="decals--container">
            {decals.map((decal) => (
              <div key={decal} className="decal">
                <img src={decal + '_thumb.png'} alt="brand" />
              </div>
            ))}
          </div>
        </div>

        <button className="share" style={{ background: snap.selectedColor }}>
          DOWNLOAD
          <AiFillCamera size="1.3em" />
        </button>
        <button className="exit" 
          style={{ background: snap.selectedColor }}
          onClick={() => (state.intro = true)}>
          GO BACK
          <AiOutlineArrowLeft size="1.3em" />
        </button>
      </div>
    </section>
  )
}