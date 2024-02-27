'use client'
import { useState } from 'react';
import styles from '../../../ui/dashboard/content/content.module.css';
import BalanceHeader from '../../../ui/dashboard/content/balanceHeader';
import SearchForms from '../../../ui/dashboard/content/searchForms';
import Cards from '../../../ui/dashboard/content/cards';
import Table from '../../../ui/dashboard/content/table';
import { transactions } from '@/app/api/transactions';

const Overview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(transactions);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const results = transactions.filter(item =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
    setCurrentPage(1); // Reset to first page when performing a search
  };

  // Filtered and paginated data
  const filteredData = searchResults.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = searchResults.slice(startIndex, endIndex);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return ( 
    <div> 
      <div className={styles.container}>
        <h1>Overview</h1>
        <BalanceHeader />
      </div>
      <div className={styles.content}>
        <SearchForms 
          searchTerm={searchTerm}
          onSearch={handleSearch}
        />
        <Cards />
        <Table 
          searchResults={currentItems}
          itemsPerPage={itemsPerPage}
          handleItemsPerPageChange={handleItemsPerPageChange}
          totalPages={totalPages}
          currentPage={currentPage}
          pageNumbers={pageNumbers}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Overview;