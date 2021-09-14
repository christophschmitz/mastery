import React from 'react';
import styles from './DetailImage.module.css';

type ImageProps = {
  imageSrc: string;
};

const DetailImage = ({ imageSrc }: ImageProps): JSX.Element => {
  return <img src={imageSrc} alt="PlaceholderImage" className={styles.image} />;
};

export default DetailImage;
