import style from './style.module.css'

const PreviewSample = () => {
  return (
    <section className={style.section}>
      <div className={`center ${style.quote_1}`}>
        <div className={style.card__content}>
          <span className={style.rank}>#1</span>
          <p className={style.quote__text}>
            To be or not to be, that's the question !
          </p>

          <div className={style.meta__infos}>
            by <span className={style.author__name}>W. Shakespear</span> in <span className={style.book__title}>Hamlet</span>
          </div>
        </div>
      </div>

      <div className={`center ${style.quote_2}`}>
        <div className={style.card__content}>
          <span className={style.rank}>#2</span>
          <p className={style.quote__text}>
            Qui ne ressent que l'amour ne sait ce pas ce qu'il y a de plus beau dans la vie.
          </p>

          <div className={style.meta__infos}>
            by <span className={style.author__name}>Jean-Jacques Rousseau</span> in <span className={style.book__title}>Confessions</span>
          </div>
        </div>
      </div>
      
      <div className={`center ${style.quote_3}`}>
        <div className={style.card__content}>
          <span className={style.rank}>#3</span>
          <p className={style.quote__text}>
            Yo soy un hombre sincero de donde crece la palma
          </p>

          <div className={style.meta__infos}>
            by <span className={style.author__name}>José Martí</span> in <span className={style.book__title}>Versos Libres</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreviewSample