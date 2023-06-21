import { GiTv } from 'react-icons/gi'
import { AiOutlineHighlight, AiOutlineShopping } from 'react-icons/ai'

export default function Overlay() {
    return <Intro />
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
              <h1>NOZ OM I</h1>
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