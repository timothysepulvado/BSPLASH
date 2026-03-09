'use client';

import { useState } from 'react';
import styles from './FAQAccordion.module.css';

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button className={styles.question} onClick={onClick} aria-expanded={isOpen}>
        <span>{question}</span>
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </button>
      <div className={styles.answerWrapper}>
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
