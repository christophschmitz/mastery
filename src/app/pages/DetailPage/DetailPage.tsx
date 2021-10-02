import React, { useState } from 'react';
import styles from './DetailPage.module.css';
import Header from '../../components/Header/Header';
import ProgressTrack from '../../components/ProgressTrack/ProgressTrack';
import Rangeslider from '../../components/Slider/Slider';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import ActionButton from '../../components/Actionbutton/Actionbutton';
import Navigation from '../../components/Navigation/Navigation';
import { useHistory } from 'react-router';
import useLocalStorageSkills from '../../hooks/useLocalStorageSkills';
import { useParams } from 'react-router-dom';

export default function DetailPage(): JSX.Element {
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [value, setValue] = useState(0);
  const history = useHistory();
  const { skills } = useLocalStorageSkills();

  const { title }: { title: string } = useParams();
  const filteredSkills = skills.filter(
    (skills) => skills.title === String(title)
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const hrs = parseInt(hours);
    const mins = parseInt(minutes);
    const addedHours = value + hrs + mins * 0.015;
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

  return (
    <div className={styles.container}>
      {filteredSkills.map((skills) => (
        <Header
          {...skills}
          key={skills.title}
          title={skills.title}
          type="detail"
          imageSrc={skills.imageSrc}
          onClick={() => {
            history.push('/');
          }}
        />
      ))}

      <main className={styles.main}>
        {filteredSkills.map((skills) => (
          <ProgressTrack
            value={(skills.progress - value).toFixed(1)}
            rank={ranktrackparsed}
          />
        ))}
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
        {filteredSkills.map((skills) => (
          <ProgressBar
            percentageVal={value}
            textVal={value.toFixed(1)}
            minValue={1}
            maxValue={500}
            children={skills.description}
          />
        ))}
      </main>
      <Navigation activeLink={'add'} />
    </div>
  );
}
