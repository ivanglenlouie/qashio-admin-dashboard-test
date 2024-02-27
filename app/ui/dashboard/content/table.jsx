'use client';
import styles from '../../../ui/dashboard/content/content.module.css';
import Image from 'next/image';
import { BiReceipt } from "react-icons/bi";
import { transactions } from '@/app/api/transactions';
import Pagination from "./pagination";
import { useState } from 'react';

const Table = ({ 
  searchResults, 
  itemsPerPage, 
  handleItemsPerPageChange,
  totalPages,
  currentPage,
  pageNumbers,
  handlePageChange,
}) => {

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className="p-4">
          <tr>
            <td className="text-gray-500 text-xs p-4">Date</td>
            <td className="text-gray-500 text-xs">Receipt</td>
            <td className="text-gray-500 text-xs">Amount</td>
          </tr>
        </thead>
        <tbody>
          {searchResults.length > 0 ? searchResults.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                <p className="text-gray-500 text-xs mt-[10px] mb-[10px]">{transaction.status}</p>
                <div className="flex gap-2">
                  <Image
                    src={transaction.image}
                    alt={transaction.title}
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  <div>
                    <p className="text-sm">{transaction.title}</p>
                    <span className="text-gray-500 text-xs">{transaction.type} <span>•</span> {transaction.owner}</span>
                  </div>
                </div>
              </td>
              <td><BiReceipt className={ transaction.isMissing ? 'text-[#59B089]' : 'text-[#DE3F35]'} /></td>
              <td>
                <div>
                  <p className="text-sm">{transaction.amount}</p>
                  <span className="text-gray-500 text-xs">{transaction.percent}</span>
                </div>
              </td>
            </tr>
          )) : (
            <td className="text-center p-3 w-full" colspan="3">No results found</td>
          )}
        </tbody>
      </table>
      <Pagination 
        itemsPerPage={itemsPerPage}
        handleItemsPerPageChange={handleItemsPerPageChange} 
        totalPages={totalPages}
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
 
export default Table;