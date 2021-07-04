// import "tailwindcss/tailwind.css";
// import "../styles.css";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";
import "tailwindcss/tailwind.css";
import "../styles.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <SwitchTransition>
      <Transition
        key={router.pathname}
        timeout={500}
        in={true}
        onEnter={enter}
        onExit={exit}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Component {...pageProps} />
      </Transition>
    </SwitchTransition>
  );
}

export default MyApp;

function enter(node) {
  gsap.from(node, {
    duration: 0.5,
    autoAlpha: 0,
  });
}

function exit(node) {
  gsap.to(node, {
    duration: 0.5,
    autoAlpha: 0,
  });
}
