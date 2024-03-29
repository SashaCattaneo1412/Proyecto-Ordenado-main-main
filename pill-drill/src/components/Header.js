import style from '../Styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image'
const Header = () => {
  return (
    <header className={style.header}>
       <div className="contenedor">
       <div className={style.barra}>
        <Link href="/">
          <Image width={180} height={150} src="/Image/LOGO1.png" alt="Imagen Logo" />
        </Link>
        <div className={style.usuario}>
        
        </div>
        <div className={style.botones}>
        <button className={style.calendario} onClick={() => dispensarP()}>
        <div className={style.contenidoEncima}>CALENDARIO</div>
      </button>

      <button className={style.contactanos} onClick={() => dispensarP()}>
        <div className={style.contenidoEncima}>CONTACTANOS</div>
        </button>
        </div>

        <Link href="/">
        <Image width={150} height={125} src="/Image/usuario.png" alt="Imagen Logo" />
        </Link>
         </div>
       </div> 
    </header>
  )
}

export default Header
