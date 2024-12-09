import styles from './Card.module.css';

function Card(props) {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={props.imgSrc} alt="Profile picture" />
            <h2 className={styles.cardTitle}>{props.title}</h2>
            <p className={styles.cardText}>{props.text}</p>
        </div>
    );
}

export default Card;