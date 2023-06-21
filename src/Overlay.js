// import { Logo } from '@pmndrs/branding'
import { GiTv } from 'react-icons/gi'
import { AiOutlineHighlight, AiOutlineShopping } from 'react-icons/ai'

export default function Overlay() {
    return <Intro />
}

function Intro(){
    return(
        <div className="container">
            <header>
                <GiTv size="3em" />
                <AiOutlineShopping size="3em" />
            </header>
        </div>
    )
}