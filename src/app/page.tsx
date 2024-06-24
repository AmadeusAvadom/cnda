'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Logo from '../images/logo.png'
import Image from 'next/image'

const Navbar= () => {
  return (
    <>
    <div>
      <div className='flex items-center text-center justify-center'>
        <Image 
          src={Logo}
          alt='logo'
          height={80}
          width={80}
        />
        <h3 className="text-[24px] bg-white p-2 text-center font-medium">Comision Nacional de Derechos Humanos</h3>
      </div>
      <div className="cnd--main text-center">
        <div className="flex-col flex font-bold">
          <span className="text-[30px] text-white">DEFENSA JUDICIALES</span>
          <span className="text-[30px] text-[#fde047]">EN DERECHO PENAL</span>
        </div>
        <div className="flex-col flex">
          <span className="text-[25px] text-[#fde047]">Ejercemos tu representación judicial en</span>
          <span className="text-[25px] text-white">Delitos sexuales</span>
          <span className="text-[25px] text-white">Estupefacientes y narcotrafico</span>
          <span className="text-[25px] text-white">Homicidio y feminicidio </span>
          <span className="text-[25px] text-white">Violencia intrafamiliar</span>
          <span className="text-[25px] text-white">Concierto para delinquir</span>
          <span className="text-[25px] text-white">Falsedad en documentos y monedas</span>
          <span className="text-[25px] text-white">Hurto, estafa y extorsión</span>
          <span className="text-[25px] text-white">Lavado de activos y testaferrato</span>
          <span className="text-[25px] text-white">Delitos informaticos</span>
          <span className="text-[25px] text-white">Delitos de contratación estatal</span>
        </div>
      </div>
    </div>
    <FloatingWhatsApp 
      phoneNumber='+573170386862'
      accountName='Comision de derechos humanos'
      chatMessage="Hola ¿en que podriamos ayudarle?"
      statusMessage=''
      
    />
    </>
  )
}


export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  )
}
