import styles from "../styles/Home.module.css";

// components
import { Navigation } from "../components/Navigation";

export default function SwitchTransition() {
  return (
    <div className={styles.container}>

      <Navigation />

      <main className={styles.main}>
        <h2>SwitchTransition Component</h2>

        <p className={styles.article}>
        Controls the render between state transitions.
        </p>
      </main>
    </div>
  );
}
