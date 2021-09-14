import React from 'react';
import styles from '@styles/borderedCard/BorderedCard.module.scss';

interface BorderedCardProps {
  children: JSX.Element | JSX.Element[];
}

const BorderedCard = ({ children }: BorderedCardProps) => (
  <div className={styles.card}>
    {children}
  </div>
);

export default BorderedCard;
