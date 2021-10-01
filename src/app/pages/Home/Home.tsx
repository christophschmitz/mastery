import React, { useState } from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Typography from '../../components/Typography/Typography';
import Navigation from '../../components/Navigation/Navigation';
import ExplorationCardGroup from '../../components/ExplorationCardGroup/ExplorationCardGroup';
import useLocalStorageSkills from '../../hooks/useLocalStorageSkills';
import { Link, useHistory } from 'react-router-dom';
import type { Skill } from '../../../types';
import ProgressTrack from '../../components/ProgressTrack/ProgressTrack';
import Rangeslider from '../../components/Slider/Slider';
import ActionButton from '../../components/Actionbutton/Actionbutton';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

export default function Home(): JSX.Element {
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [value, setValue] = useState(0);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const history = useHistory();
  const [details, setDetails] = useState<Skill>({
    id: '',
    title: '',
    category: '',
    description: '',
    progress: 500,
    imageSrc: '',
    isDone: false,
  });
  const { skills } = useLocalStorageSkills();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const hrs = parseInt(hours);
    const mins = parseInt(minutes);
    const addedHours = value + hrs + mins * 0.015;
    localStorage.setItem('progress', JSON.stringify(addedHours));
    setValue(addedHours);
  }

  const ranking =
    value === 0
      ? '0'
      : value < 99
      ? '1'
      : value > 100 && value < 199
      ? '2'
      : value > 200 && value < 299
      ? '3'
      : value > 300 && value < 399
      ? '4'
      : '5';

  const ranktrack = JSON.stringify(ranking);
  localStorage.setItem('ranking', ranking);

  const ranktrackparsed = JSON.parse(ranktrack);
  localStorage.getItem('ranking');

  function onAddClick() {
    history.push('/add');
  }

  const explorationList = [
    {
      title: 'Sport',
      description: 'Stay fit, stay healthy',
      onClick: onAddClick,
    },
    {
      title: 'Painting',
      description: 'Express yourself',
      onClick: onAddClick,
    },
    {
      title: 'Knitting',
      description: 'Preparation for cold days',
      onClick: onAddClick,
    },
  ];

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
                setShowDetailModal(true), setDetails(skill);
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

      {showDetailModal && (
        <section className={styles.modal} id="modal">
          <div className={styles.modalContainer}>
            <Header
              title={details.title}
              type="detail"
              imageSrc={details.imageSrc}
              onClick={() => {
                setShowDetailModal(false);
              }}
            />
            <main className={styles.main}>
              <ProgressTrack
                value={(details.progress - value).toFixed(1)}
                rank={ranktrackparsed}
              />
              <form className={styles.form} onSubmit={handleSubmit}>
                <Rangeslider
                  size="hours"
                  value={hours}
                  min={'0'}
                  max={'24'}
                  onChange={(event) => setHours(event.target.value)}
                />
                <Rangeslider
                  size="minutes"
                  value={minutes}
                  min={'0'}
                  max={'59'}
                  onChange={(event) => setMinutes(event.target.value)}
                />
                <ActionButton
                  children={'Submit'}
                  type={'submit'}
                  style="primary"
                ></ActionButton>
              </form>
              <ProgressBar
                percentageVal={value}
                textVal={value.toFixed(1)}
                minValue={1}
                maxValue={500}
                children={details.description}
              />
            </main>
            <Navigation
              activeLink={'home'}
              onClick={() => {
                setShowDetailModal(false);
              }}
            />
          </div>
        </section>
      )}
    </div>
  );
}
