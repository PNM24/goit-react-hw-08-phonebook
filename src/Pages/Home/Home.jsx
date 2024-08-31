import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Home.module.css';

const Home = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };

    updateTime();
    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="container">
      <Box className={styles.homeContainer}>
        <img
          src="../public/phonebook.png"
          alt="Phonebook"
          className={styles.image}
        />
        <Typography variant="h4" className={styles.slogan}>Organizează-ți contactele cu ușurință!</Typography>
        <Typography variant="h6" className={styles.time}>{`Ora locală: ${time}`}</Typography>
      </Box>
    </div>
  );
};

export default Home;