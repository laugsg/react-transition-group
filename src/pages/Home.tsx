import styles from '../styles/Home.module.css'

// components
import { Navigation } from "../components/Navigation";

export default function Home() {
  return (
    <div className={styles.container}>

      <Navigation />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{ color: "blue" }}>Research</span>
        </h1>

        <p className={styles.description}>
          An investigation about Transition Group library to be used in DS.
        </p>

        {/* Conclusion */}
        <section>
          <h2>Conclusion</h2>

          <p>
            It provides Container Components to connect css rules with
            components, manipulating the DOM along the repaint.
          </p>

          <p>
            Then, the first and most important to know is React Transition Group
            is not an animation library.
          </p>
          <p>
            Instead, it's compounded of certain components requiring a specific
            combination of structure and css files/rules declaration.
          </p>

          <p>
            For How-To documentation for each component navigate to its pages in
            this site.
          </p>

          {/* Pros */}
          <article className={styles.article}>
            <h3>Pros</h3>
            <p>
              <code>react-transition-group</code> is well documented library
              which exposes states at the mounting and unmounting steps of React
              Components and provide an interface to apply styles rules on them.
              It's simple to use and straight foward.
            </p>
            <p>
              Currently, the community around the project is well-sized:
              (github/npm)
            </p>
            <ul>
              <li>77 Contributors</li>
              <li>Used by 1.4m</li>
              <li>Latest release v4.4.2 - 29 May 2021</li>
              <li>9m weekly downloads</li>
            </ul>
          </article>

          {/* Cons */}
          {/* <article className={styles.article}>
            <h3>Cons</h3>
          </article> */}
        </section>
      </main>
    </div>
  );
}
