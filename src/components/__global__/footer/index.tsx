import style from './style.module.css'
import { MoveRight } from 'lucide-react'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.left__card}>
                <a href="#" className={style.link}>
                    <span>Quotes lib</span>
                    <span className='center'>
                        <MoveRight size={20} stroke='currentColor' />
                    </span>
                </a>
                <a href="#" className={style.link}>
                    <span>Summaries lib</span>
                    <span className='center'>
                        <MoveRight size={20} stroke='currentColor' />
                    </span>
                </a>
                <a href="#" className={style.link}>
                    <span>Browse authors</span>
                    <span className='center'>
                        <MoveRight size={20} stroke='currentColor' />
                    </span>
                </a>
                <a href="#" className={style.link}>
                    <span>Contribute</span>
                    <span className='center'>
                        <MoveRight size={20} stroke='currentColor' />
                    </span>
                </a>
                <a href="#" className={style.link}>
                    <span>Devops</span>
                    <span className='center'>
                        <MoveRight size={20} stroke='currentColor' />
                    </span>
                </a>
            </div>
        </footer>
    )
}

export default Footer