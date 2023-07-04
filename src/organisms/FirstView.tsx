import style from './FirstView.module.css';

const FirstView = () => {
    return (
        <section className={style.first_view}>
            <img src="./first_view.png" alt="安田講堂" />
            <div className={style.triangle1}></div>
            <div className={style.triangle2}></div>
        </section>
    );
}

export default FirstView;