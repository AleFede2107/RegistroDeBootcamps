import React from 'react';
import styles from './BootcampList.module.css';

const bootcamps = [
  { id: 1, name: 'Full Stack Developer Bootcamp', signUpLink: '#'},
  { id: 2, name: 'Data Science Bootcamp', signUpLink: '#'},
  { id: 3, name: 'UI/UX Design Bootcamp', signUpLink: '#'},
];

const BootcampList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sign Up for a Bootcamp</h2>
      <ul className={styles.list}>
        {bootcamps.map(bootcamp => (
          <li key={bootcamp.id} className={styles.listItem}>
            <a href={bootcamp.signUpLink} className={styles.link}>
              {bootcamp.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BootcampList;