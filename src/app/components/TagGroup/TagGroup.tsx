import React from 'react';
import Tag from '../Tag/Tag';
import styles from './TagGroup.module.css';

type Tag = {
  active: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export type TagGroupProps = {
  tagList: Tag[];
  className?: string;
};

const TagGroup = ({ tagList, className }: TagGroupProps): JSX.Element => {
  return (
    <section className={`${styles.container} ${className}`}>
      {tagList.map((tag, children) => (
        <Tag key={children} active={tag.active} onClick={tag.onClick}>
          {tag.children}
        </Tag>
      ))}
    </section>
  );
};
export default TagGroup;
