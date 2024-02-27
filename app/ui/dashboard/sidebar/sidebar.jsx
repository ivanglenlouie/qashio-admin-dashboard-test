import MenuLink from '../sidebar/menuLink';
import { menuItems } from '@/app/api/menuItems';
import styles from '../sidebar/sidebar.module.css'

const SideBar = () => {
  return ( 
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <MenuLink key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
}
 
export default SideBar;