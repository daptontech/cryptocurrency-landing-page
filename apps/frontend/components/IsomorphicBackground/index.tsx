import React from "react";
import styles from './background.module.css'

const IsomorphicBackground = () => {
  return (
    <div
      className="absolute inset-0 bottom-10 h-[1000px] bg-bottom bg-no-repeat bg-slate-50 bg-[url('/hero.jpg')]">
      <div
        className={`absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] ${styles.heroImage}`}
      />
    </div>
  )
}

export default IsomorphicBackground;
