import styles from '../../../ui/dashboard/content/content.module.css';
import { useState } from 'react';
import { transactions } from '@/app/api/transactions';

const Pagination = ({ 
  itemsPerPage,
  handleItemsPerPageChange,
  totalPages,
  currentPage,
  pageNumbers,
  handlePageChange,
}) => {

  return (
    <div className={styles.pagination}>
      <div className="flex-1">
        Show: 
        <select 
          className={styles.select}
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
        per page
      </div>
      <div className="flex-2">
        {currentPage} of {totalPages} 
      </div>
      <div className={styles.numbers}>
        {pageNumbers.map(page => (
          <button 
            key={page} 
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
 
export default Pagination;