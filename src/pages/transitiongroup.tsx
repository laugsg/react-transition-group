import styles from "../styles/Home.module.css";
import '../styles/switchtransition.css'

// components
import { Navigation } from "../components/Navigation";
import { TodoList } from "../components/TransitionGroupComponent";

export default function TransitionGroup() {
  return (
    <div className={styles.container}>

      <Navigation />

      <main className={styles.main}>
        <h2>TransitionGroup Component</h2>

        <p className={styles.article}>
        Manages a set of transition components in a list. As the transition component, 
        It is a state machine for managing the mounting and unmounting of components over time.
        </p>

        <article className={styles.article} style={{textAlign:'left'}}>
          <h2>Use case</h2>
          <p>
          Items added/removed from a TodoList. 
          </p>
          <TodoList/>
        </article>
      </main>
    </div>
  );
}
