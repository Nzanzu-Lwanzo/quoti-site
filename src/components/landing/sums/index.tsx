import style from './style.module.css'

const PreviewSummaries = () => {
    return (
        <section className={style.section}>
            <div className={`${style.sum_1} ${style.sum}`}>
                <h2 className={style.book_title}>Le Vieil homme et la Mer</h2>
                <p className={style.text}>
                    Le Vieil Homme et la Mer d’Ernest Hemingway raconte l’histoire de Santiago, un vieux pêcheur cubain qui, après 84 jours sans prise, part seul en mer déterminé à retrouver sa chance. Il finit par ferrer un gigantesque espadon qu’il lutte à capturer pendant trois jours et trois nuits. Épuisé mais résolu, Santiago réussit enfin à maîtriser le poisson et l’attache à son bateau. Sur le chemin du retour, des requins attirés par le sang dévorent peu à peu l’espadon, malgré les efforts du vieil homme pour les repousser. À son arrivée, il ne reste que le squelette du poisson. Bien que vaincu physiquement, Santiago incarne la dignité, le courage et la persévérance face à l’adversité. Ce récit symbolique explore les thèmes de la lutte, de la solitude, de la nature, et de la condition humaine, dans un style épuré et puissant, typique de Hemingway.
                </p>
                <div className={style.meta__infos}>
                    by <span className={style.author__name}>Ernest Hemingway</span> published in <span className={style.publish__year}>1950</span>
                </div>
            </div>
            <div className={`${style.sum_2} ${style.sum}`}>
                <h2 className={style.book_title}>Katia</h2>
                <p className={style.text}>
                    Katia, publié en 1859, est une courte œuvre de Léon Tolstoï qui explore les émotions, les illusions amoureuses et les compromis du mariage. Le récit est présenté du point de vue d’un jeune homme noble, Mikhaïl Dmitritch, qui tombe amoureux de Katia, une jeune femme vive et pleine de charme. Leur relation naît dans une atmosphère insouciante et romanesque. Mikhaïl croit en un amour passionné et sincère, mais une fois mariés, la réalité du quotidien et la banalité de la vie de couple s’installent. Peu à peu, il réalise que son amour n’était qu’une illusion, et qu’ils sont deux étrangers unis par un malentendu sentimental. Tolstoï, à travers ce récit subtil et introspectif, critique les idéalisations de l’amour romantique et met en lumière la dissonance entre passion et réalité. C’est une œuvre précoce mais déjà lucide, annonçant les thèmes majeurs de son œuvre future.
                </p>
                <div className={style.meta__infos}>
                    by <span className={style.author__name}>Leon Tolstoï</span> published in <span className={style.publish__year}>1859</span>
                </div>
            </div>
            <div className={`${style.sum_3} ${style.sum}`}>
                <h2 className={style.book_title}>De parte de la princesa muerta</h2>
                <p className={style.text}>
                    De parte de la princesa muerta, publié en 1987, est un roman autobiographique de Kenizé Mourad qui retrace la vie de sa mère, Selma Rauf Hanim, une princesse ottomane exilée après la chute de l’Empire. Le récit commence avec l’exil de la famille impériale turque, contrainte de fuir à l’étranger. Selma, élevée dans la pauvreté en Inde puis envoyée en Europe, est une femme partagée entre deux cultures, deux identités, et un besoin profond de liberté. Elle épouse un rajah indien pour échapper à sa condition, mais sa vie reste marquée par les conflits intérieurs, les déracinements et la quête d’amour et de dignité. À travers ce destin tragique et romanesque, Kenizé Mourad explore les thèmes de l’exil, de la mémoire, de l’identité et de la condition féminine. Le roman mêle histoire personnelle et Histoire avec une plume sensible et puissante, dressant le portrait d’une femme à la fois fragile et courageuse.
                </p>
                <div className={style.meta__infos}>
                    by <span className={style.author__name}>Kenizé Mourad</span> published in <span className={style.publish__year}>1987</span>
                </div>
            </div>
        </section>
    )
}

export default PreviewSummaries