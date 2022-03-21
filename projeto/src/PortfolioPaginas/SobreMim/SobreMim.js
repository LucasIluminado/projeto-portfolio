import React, {useEffect} from 'react';
import ScreenHeading from '../../Utilidades/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilidades/ScrollService';
import Animations from '../../Utilidades/Animations';



export default function SobreMim(props) {
    return (
        <div className='sobre-mim-container screen-container'>
            <div className='sobre-mim-parent'>
            <ScreenHeading title={'Sobre Mim'} subHeading={'Quem sou eu?'}/>
            </div>

        </div>
    )
}
