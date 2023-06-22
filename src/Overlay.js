import { GiTv } from 'react-icons/gi'
import { AiOutlineHighlight, AiOutlineShopping, AiFillCamera, AiOutlineArrowLeft } from 'react-icons/ai'

export default function Overlay() {
  return <Customizer />
}

function Intro() {
  return (
    <div className="container">
      <header>
        <GiTv size="3em" />
        <div>
          <AiOutlineShopping size="3em" />
        </div>
      </header>

      <section key="main">
        <div className="section--container">
          <div>
            <h1>LET'S DO IT.</h1>
          </div>
          <div className="support--content">
            <div>
              <p>
                Visualize you're exclusive Nozomi shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination </strong>
                and define your own style.
              </p>
              <button style={{ background: 'black' }}>
                CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Customizer() {
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
              style={{ background: color }}></div>
          ))}
        </div>
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

      <button className="share" style={{ background: 'black' }}>
        DOWNLOAD
        <AiFillCamera size="1.3em" />
      </button>
      <button className="exit" style={{ background: 'black' }}>
        GO BACK
        <AiOutlineArrowLeft size="1.3em" />
      </button>
    </section>
  )
}