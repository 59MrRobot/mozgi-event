import React, { useEffect, useState } from 'react';
import './AdditionalPage.scss';
import { motion } from 'framer-motion';

export const AdditionalPage: React.FC = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 1000);
  }, []);

  return (
    <main>
      <motion.div 
        className="transition"
        initial={{left: "-100%"}}
        animate={{left: "100%"}}
        exit={{left: "-100%"}}
        transition={{duration: 2}}
      >

      </motion.div>
      {showPage && (
        <div
          className="additional-page"
        >
          <div className="additional-page__wrapper">
            <h2 className="additional-page__title">Additional Page</h2>
          </div>
        </div>
      )}
    </main>
  )
}
