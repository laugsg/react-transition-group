import styles from "../styles/Home.module.css";
import '../styles/switchtransition.css'

// components
import { Navigation } from "../components/Navigation";
import { SwitchTransitionComponent } from "../components/SwitchTransitionComponent";

export default function SwitchTransition() {
  return (
    <div className={styles.container}>

      <Navigation />

      <main className={styles.main}>
        <h2>SwitchTransition Component</h2>

        <p className={styles.article}>
        Controls the render between state transitions.
        </p>

        <article className={styles.article}>
          <h2>Use case</h2>
          <p>
          Based on the child's key makes a transition between two modes,
          <code>out-in</code> which waits until the old child leaves and 
          then inserts a new child, or <code>in-out</code> inserts a new child first, 
          waits for the new child to enter and then removes the old child.
          </p>
        </article>
          <SwitchTransitionComponent/>
      </main>
    </div>
  );
}
