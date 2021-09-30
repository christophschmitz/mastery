import React from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Typography from '../../components/Typography/Typography';
import Navigation from '../../components/Navigation/Navigation';
import ExplorationCardGroup from '../../components/ExplorationCardGroup/ExplorationCardGroup';
import useLocalStorageSkills from '../../hooks/useLocalStorageSkills';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function Home(): JSX.Element {
  const history = useHistory();
  const params = useParams<{ title: string }>();

  const onAddClick = () => console.log('added');

  const explorationList = [
    {
      title: 'Crafting',
      description: 'Exampledescription',
      onClick: onAddClick,
    },
    {
      title: 'Knitting',
      description: 'Exampledescription',
      onClick: onAddClick,
    },
    {
      title: 'Art',
      description: 'Exampledescription',
      onClick: onAddClick,
    },
  ];
  const { skills } = useLocalStorageSkills();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header
          className={styles.head}
          type="home"
          imageSrc="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        />
      </div>
      <main className={styles.mainWrapper}>
        <div className={styles.greeting}>
          <Typography size={'pp'}>{'Welcome back'}</Typography>
          <Typography size={'xl'}>{'John'}</Typography>
        </div>
        <div className={styles.heading}>
          <Typography size={'m'}>{'My top skills'}</Typography>
          <Link to="/add">view all</Link>
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
              onClick={() => {
                history.push(`/detail/${params.title}`);
              }}
            />
          ))}
        </div>
        <div className={styles.cardHeader}>
          <Typography size={'m'}>{'Next skill to master'}</Typography>
        </div>

        <ExplorationCardGroup
          className={styles.cardGroup}
          explorationList={explorationList}
        />
      </main>
      <Navigation activeLink={'home'} />
    </div>
  );
}
