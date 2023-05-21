import styles from '../page.module.css';
import { VirtualList } from '@/components';

export default function List() {
  return (
    <main className={styles.main}>
      <VirtualList />
    </main>
  );
}
