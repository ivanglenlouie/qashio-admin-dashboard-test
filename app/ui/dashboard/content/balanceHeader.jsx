import styles from '../content/content.module.css';

const BalanceHeader = () => {
  return ( 
    <>
      <div className={styles.balanceHeader}>
        <div>
          <span className="text-xs text-gray-500">Current Balance</span>
          <div className="text-2xl">$628,432.90</div>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-500">Available Spend</span>
          <div className="text-lg">$1,371,568.10</div>
          <div className="text-xs text-gray-500">$2,000,000</div>
        </div>
      </div>
      <div className={`${styles.progressWrap} ${styles.progress}`}>
        <div className={`${styles.progressBar} ${styles.progress}`}></div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <span className="text-xs text-gray-500">Next Payment</span>
          <div className="text-lg">Jun 3rd</div>
        </div>
        <div className="flex-auto">
          <span className="text-xs text-gray-500">Available Cashback</span>
          <div className="text-lg">$628,432.90</div>
        </div>
      </div>
    </>
  );
}
 
export default BalanceHeader;