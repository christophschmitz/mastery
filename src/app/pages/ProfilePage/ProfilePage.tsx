import React from 'react';
import styles from './ProfilePage.module.css';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import Typography from '../../components/Typography/Typography';
import useLocalStorageSkills from '../../hooks/useLocalStorageSkills';

export default function AddPage(): JSX.Element {
  const { skills } = useLocalStorageSkills();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          className={styles.image}
        />
        <Typography size={'l'}>John Doe</Typography>
        <p>
          Hi, my name is John and I am a creative person based in Santa Monica
        </p>
      </div>
      <main className={styles.main}>
        <div className={styles.heading}>
          <Typography size="m">My Skills</Typography>
        </div>
        <div className={styles.cardWrapper}>
          {skills.map((skill) => (
            <Card
              {...skills}
              key={skill.title}
              id={skill.id}
              progress={skill.progress}
              type="default"
              imageSrc={skill.imageSrc}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </main>
      <Navigation activeLink={'user'} />
    </div>
  );
}
