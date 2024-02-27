'use client'
import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { LuDownload } from "react-icons/lu";
import Datepicker from "react-tailwindcss-datepicker";
import styles from '../content/content.module.css';

const SearchForms = ({ searchTerm, onSearch }) => {

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
  } 

  const handleSearch = (e) => {
    onSearch(e.target.value)
  }

  return ( 
    <div className={styles.searchForms}>
      <div className={styles.searchFormInput}>
        <FiSearch />
        <input
          type="text"
          placeholder="Search & Filter"
          className={styles.input}
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      <Datepicker 
        primaryColor={"blue"}
        value={value} 
        onChange={handleValueChange} 
        showShortcuts={true}
        className="relative w-28 text-gray-500"
      />
      <button className={styles.dollar}><AiOutlineDollar /></button>
      <button className={styles.download}><LuDownload className="text-[#59B089] text-md" /></button>
    </div>
  );
}
 
export default SearchForms;