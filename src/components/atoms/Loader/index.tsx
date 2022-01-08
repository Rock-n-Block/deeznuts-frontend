import { FC } from 'react';

import styles from './styles.module.scss';

const Loader: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.lds_ring}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
