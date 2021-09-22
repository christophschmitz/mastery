import React, { useState } from 'react';
import styles from './AddPage.module.css';
import Header from '../../components/Header/Header';
import TagGroup from '../../components/TagGroup/TagGroup';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import useAllSkills from '../../hooks/useAllSkills';
import { CATEGORIES } from '../../components/lib/categoryMap';
import { useHistory } from 'react-router';

export default function AddPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    'crafting'
  );
  const { skills } = useAllSkills();
  const history = useHistory();

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

  const allCategorys = skills?.map((skills) => {
    return {
      title: skills.title,
      imageSrc: skills.imageSrc,
      description: skills.description,
      category: skills.category,
    };
  });
  const filteredSkills = allCategorys?.filter(
    (skills) => skills.category === selectedCategory
  );

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Header
            className={styles.head}
            type="backwithimage"
            imageSrc="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            onClick={() => {
              history.push('/');
            }}
          />
          <TagGroup tagList={tagList} className={styles.tagGroup} />
        </header>
        <main className={styles.cardWrapper}>
          {filteredSkills &&
            filteredSkills.map((skills) => {
              return (
                <Card
                  type="add"
                  {...skills}
                  imageSrc={skills.imageSrc}
                  title={skills.title}
                  description={skills.description}
                />
              );
            })}
        </main>
        <div>
          <Navigation activeLink={'add'} />
        </div>
      </div>
    </>
  );
}
