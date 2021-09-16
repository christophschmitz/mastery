import React from 'react';
import Tag from '../Tag/Tag';
import styles from './TagGroup.module.css';

type TagProps = {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export type TagGroupProps = {
  tagList: TagProps[];
  className?: string;
};

const TagGroup = ({ tagList, className }: TagGroupProps): JSX.Element => {
  return (
    <section className={`${styles.container} ${className}`}>
      {tagList.map((tag, index) => (
        <Tag key={index} active={tag.active} onClick={tag.onClick}>
          {tag.children}
        </Tag>
      ))}
    </section>
  );
};
export default TagGroup;
