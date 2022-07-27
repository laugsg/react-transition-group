import React from "react";
import { CSSTransition } from "react-transition-group";

import '../styles/csstransition.css'

/**
 * CSS file should include two clasess *-appear & *-appear-active
 */

export function CssTransitionComponentAppear() {
  const [inProp, setInProp] = React.useState(false);
  return (
    <div>
      <>
        <CSSTransition
          in={true}
          timeout={500}
          classNames="my-node"
          appear={true}
          unmountOnExit
          >
          <div>
            I'll appear by my-node-appear class and appear prop
          </div>
        </CSSTransition>
      </>
    </div>
  );
}
