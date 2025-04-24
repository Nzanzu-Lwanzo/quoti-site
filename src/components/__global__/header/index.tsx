import style from './style.module.css'
import { Rss } from 'lucide-react'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}></div>
      <nav className={style.navbar}>
        <a href="#" className={style.navlink}>Documentation</a>
        <a href="#" className={style.navlink}>Api</a>
        <a href="#" className={style.navlink}>Dashboard</a>
        <a href="#" className={style.navbutton}>
          <span>Post a quote</span>
          <span className="center">
            <Rss size={15} stroke='currentColor' />
          </span>
        </a>
      </nav>
    </header>
  )
}

export default Header