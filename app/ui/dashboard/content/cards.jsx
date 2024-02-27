import { BsArrowsAngleExpand } from "react-icons/bs";
import styles from '../content/content.module.css';

const Cards = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className="mb-2 text-[15px]">Transactions</div>
        <div className="text-3xl">$1,563</div>
      </div>
      <div className={styles.card}>
        <div className="mb-2 text-[15px]">Total Spend</div>
        <div className="text-3xl">$1228.90</div>
      </div>
      <div className={styles.card}>
        <div className="mb-2 text-[15px]">Missing Receipts</div>
        <div className="text-3xl flex gap-3 items-center">
          <span className="text-[#DE3F35]">42</span> 
          <span className="text-gray-500 text-[18px]"><BsArrowsAngleExpand /></span>
        </div>
      </div>
    </div>
  );
}
 
export default Cards;