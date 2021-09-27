import React, { useState } from 'react';
import styles from './DetailPage.module.css';
import Header from '../../components/Header/Header';
import ProgressTrack from '../../components/ProgressTrack/ProgressTrack';
import Rangeslider from '../../components/Slider/Slider';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import ActionButton from '../../components/Actionbutton/Actionbutton';
import Navigation from '../../components/Navigation/Navigation';
import useSkill from '../../hooks/useSkill';

export default function DetailPage(): JSX.Element {
  const singleSkill = {
    _id: '6149b8fb9da9c4cbfa091a9a',
    title: 'Coding',
    description: 'Build products and learn',
    imageSrc:
      'https://images.unsplash.com/photo-1577375870519-0a9fdb747f51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
    category: 'it',
    progress: 500,
    isDone: false,
  };

  const { skill } = useSkill(singleSkill.title);
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [value, setValue] = useState(0);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const hrs = parseInt(hours);
    const mins = parseInt(minutes);
    const addedHours = value + hrs + mins * 0.015;
    localStorage.setItem('progress', JSON.stringify(skill?.progress));
    setValue(addedHours);
  }

  const ranking =
    value === 0
      ? 0
      : value < 99
      ? 1
      : value > 100 && value < 199
      ? 2
      : value > 200 && value < 299
      ? 3
      : value > 300 && value < 399
      ? 4
      : 5;

  const ranktrack = JSON.stringify(ranking);
  localStorage.setItem('ranking', 'value');

  return (
    <div className={styles.container}>
      <Header
        title={singleSkill.title}
        type="detail"
        imageSrc={singleSkill.imageSrc}
      />
      <main className={styles.main}>
        <ProgressTrack
          value={(singleSkill.progress - value).toFixed(1)}
          rank={ranktrack}
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
          children={singleSkill.description}
        />
      </main>
      <Navigation activeLink={'add'} />
    </div>
  );
}
