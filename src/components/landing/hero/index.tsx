import style from './style.module.css'
import Header from '../../__global__/header'
import { MoveRight } from 'lucide-react'


const LandingHero = () => {
    return (
        <section className={style.section}>
            <Header />
            <div className={`center ${style.hero__content}`}>
                <h1 className={style.hero__big__title}>We are the biggest <span className={style.important__text}>quotes</span> and <span className={style.important__text}>book summaries</span> library out there.</h1>
                <a href="#" className={style.cta}>
                    <span className={`center ${style.cta__icon}`}>
                        <MoveRight size={20} />
                    </span>
                    <span>Contribute</span>
                </a>
            </div>
        </section>
    )
}

export default LandingHero