import styles from "../styles/Home.module.css";

// components
import { FadeInContainerWithoutButton } from "../components/FadeInContainerWithoutButton";
import { FadeInContainerWithButton } from "../components/FadeInContainerWithButton";
import { Navigation } from "../components/Navigation";

export default function StyleVariables() {
  return (
    <div className={styles.container}>
      <Navigation />

      <main className={styles.main}>
        <h2>Style Variables</h2>

        {/* Transition based in State switching */}
        <article className={styles.article}>
          <h3>classNames from Transition Components</h3>
          <p>
            The <code>classNames</code> attribute is a single name provided to
            be applied to the child component, e.g. classNames="my-node", which
            will be suffixed for each stage: appears, enters, exits and finished
            the transition.
          </p>

          <p>
            They are joined with the ones that are already defined on the child
            component, so if you want to add some base styles, you can use
            className without worrying that it will be overridden.
          </p>

          <p>There are 4 main states a Transition can be in:</p>
          <ul>
            <li>'entering' as *-enter</li>
            <li>'entered' as *-enter-active</li>
            <li>'exiting' as *-exit</li>
            <li>'exited' as *-exit-active</li>
          </ul>

          <p>
            The transition begins at the "Enter" stage. During this stage, the
            component will shift from its current transition state, to
            'entering' for the duration of the transition and then to the
            'entered' stage once it's complete.
          </p>

          <p>
            At the final stage of the transition same thing happens except the
            state moves from 'exiting' to 'exited'.
          </p>

          <p>
            This is How-To define the transition behavior and effects for
            components when appearing and exiting.
          </p>
        </article>

        {/* Transition by default */}
        <article className={styles.article}>
          <h3>How-To define transitions</h3>
          <p>
            Each of Transition Group Components expose states as state machine
            for managing the mounting and unmounting of components over time.
          </p>

          <p>
            Those states are suffixed to the name provided through classNames
            attribute, so common css classes can ruled those state from a css
            file, module or camelCase variables as follows:
          </p>
        </article>

        {/* Transition by default */}
        <article className={styles.article}>
          <h4>CSS rules basic definition</h4>

          <p>
            Specified independently each individual selector based in the name
            provided to the parent Transition Component (the attribute
            classNames) plus the suffix for the target state.
          </p>
          <code className={styles.code}>
            <pre>
              {`
            .my-node-enter {
              opacity: 0;
              transform: scale(1.1);
            }             
            `}
            </pre>
          </code>
        </article>

        {/* Transition by default */}
        <article className={styles.article}>
          <h4>Import classes as Modules</h4>
          <p>
            If you want to set these classes using CSS Modules:{" "}
            <code>import styles from './styles.css';</code>
            you might want to use camelCase in your CSS file, that way could
            simply spread them instead of listing them one by one:{" "}
            <code>
              classNames={"{{"} ...styles {"}}"}
            </code>
          </p>
        </article>

        {/* Transition by default */}
        <article className={styles.article}>
          <h4>Classes as camelCase Variables</h4>
          <p>
            type: string | {"{"} appear?: string, appearActive?: string,
            appearDone?: string, enter?: string, enterActive?: string,
            enterDone?: string, exit?: string, exitActive?: string, exitDone?:
            string, {"}"}
          </p>
        </article>

        <article className={styles.article}>
          <h4>Specify classes for transitions</h4>

          <p>
            Each individual classNames can also be specified independently like:
          </p>
          <code className={styles.code}>
            <pre>
              {`
            classNames={{
              appear: 'my-appear',
              appearActive: 'my-active-appear',
              appearDone: 'my-done-appear',
              enter: 'my-enter',
              enterActive: 'my-active-enter',
              enterDone: 'my-done-enter',
              exit: 'my-exit',
              exitActive: 'my-active-exit',
              exitDone: 'my-done-exit',
            }}             
            `}
            </pre>
          </code>
        </article>
      </main>
    </div>
  );
}
