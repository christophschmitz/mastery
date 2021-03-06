import React, { useState } from 'react';
import styles from './AddPage.module.css';
import Header from '../../components/Header/Header';
import TagGroup from '../../components/TagGroup/TagGroup';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import useSkills from '../../hooks/useSkills';
import { CATEGORIES } from '../../components/lib/categoryMap';
import { useHistory } from 'react-router';
import useLocalStorageSkills from '../../hooks/useLocalStorageSkills';
import type { Skill } from '../../../types';
import Typography from '../../components/Typography/Typography';
import Actionbutton from '../../components/Actionbutton/Actionbutton';

export default function AddPage(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    'crafting'
  );

  const history = useHistory();
  const { skills } = useSkills();

  const { addSkill } = useLocalStorageSkills();

  const categoryList = Object.values(CATEGORIES);
  const tagList = categoryList.map((category) => {
    return {
      children: category,
      onClick: () => {
        setSelectedCategory(category);
      },
      active: category === selectedCategory,
    };
  });

  const allCategorys = skills?.map((skill) => {
    const {
      title,
      imageSrc,
      description,
      category,
      id,
      progress,
      isDone,
      rank,
      value,
    } = skill;
    return {
      title,
      imageSrc,
      description,
      category,
      id,
      progress,
      isDone,
      rank,
      value,
    };
  });
  const filteredSkills = allCategorys?.filter(
    (skills) => skills.category === selectedCategory
  );

  function addNewSkill(skills: Skill) {
    addSkill(skills);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header
          className={styles.head}
          type="backwithimage"
          imageSrc="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          onClick={() => {
            history.push('/');
          }}
        />
        <TagGroup tagList={tagList} className={styles.tagGroup} />
      </div>
      <main className={styles.cardWrapper}>
        {filteredSkills &&
          filteredSkills.map((skill) => {
            return (
              <Card
                {...skills}
                id={skill.id}
                progress={skill.progress}
                type="add"
                imageSrc={skill.imageSrc}
                title={skill.title}
                description={skill.description}
                onClick={() => {
                  addNewSkill(skill), setShowModal(true);
                }}
              />
            );
          })}
      </main>

      <Navigation activeLink={'add'} />
      {showModal && (
        <section className={styles.modalcontainer}>
          <div className={styles.modal}>
            <Typography size={'l'}>
              Succesfully <br /> Added
            </Typography>
            <Actionbutton
              type={'button'}
              style={'primary'}
              onClick={() => setShowModal(false)}
            >
              Close Window
            </Actionbutton>
          </div>
        </section>
      )}
    </div>
  );
}
