'use client';
import Link from 'next/link';
import styles from '../sidebar/menuLink.module.css';
import { usePathname } from 'next/navigation';


const renderSublist = (sublist) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();

  return (
    <ul className={styles.sublistContainer}>
      {sublist.map((item) => (
        <li key={item.path}>
          <Link href={item.path} className={pathname === item.path ? styles.sublistActive : ''}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

const MenuLink = ({ item }) => {

  const pathname = usePathname();

  return (
    <li className={styles.list}>
      <Link href={item.path} className={`${styles.container} ${pathname === item.path ? styles.active: ''}`}>
        {item.icon}
        {item.title}
      </Link>
      {item.sublist && renderSublist(item.sublist)}
    </li>
  );
}
 
export default MenuLink;