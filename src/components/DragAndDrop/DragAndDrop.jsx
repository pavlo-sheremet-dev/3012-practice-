import styles from "./DragAndDrop.module.css";
import clsx from "clsx";

const data = [
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
];

const DragAndDrop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <h3>Список карток</h3>
        <div className={styles.cardList}>
          {[].map((card) => (
            <div key={card.id} className={styles.card}>
              {card.text}
            </div>
          ))}
        </div>
      </div>

      <div className={clsx(styles.dropZone)}>
        <h3>контейнер</h3>
        {[].map((card) => (
          <div key={card.id} className={styles.targetCard}>
            {card.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
