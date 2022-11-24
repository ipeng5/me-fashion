import React from 'react';
import Slider from '../components/slider/Slider';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Slider />
    </motion.div>
  );
}
