import * as React from 'react';
import styles from './SimpleReactWebPart.module.scss';

const itemsList = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
];

const SimpleReactWebPart: React.FC = () => {
  return (
    <div className={styles.simpleReactWebPart}>
      <h2>Item List</h2>
      <ul>
        {itemsList.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleReactWebPart;
