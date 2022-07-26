import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import '../styles/csstransition.css'

export function SwitchTransitionComponent() {
  const [state, setState] = React.useState(false);
  return (
    <SwitchTransition mode={state ? "out-in" : "in-out"}>
      <CSSTransition
        key={state ? "Goodbye, world!" : "Hello, world!"}
        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
        classNames='fade'
      >
        <button onClick={() => setState(state => !state)}>
          {state ? "Goodbye, out-in!" : "Hello, in-out!"}
        </button>
      </CSSTransition>
    </SwitchTransition>
  );
 }
