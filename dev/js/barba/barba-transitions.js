import { navState } from "../main-nav/nav-global";
// barba transitions 
// LifeCycle: https://waelyasmina.com/barba-js-v2-tutorial-for-total-beginners/
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }

  let scrollX = 0
let scrollY = 0

barba.hooks.leave(() => {
  scrollX = barba.history.current.scroll.x;
  scrollY = barba.history.current.scroll.y;
});


barba.init({
    sync: true,
    transitions: [
        {
            name: 'Opacity Transition',
            // from: {
            //     namespace: ['home', 'about']
            // },
            // to: {
            //     namespace: ['about', 'home']
            // },
            async leave({current}) {
                const done = this.async();
                scrollX = barba.history.current.scroll.x;
  scrollY = barba.history.current.scroll.y;
                // Leave animation
                gsap.to(current.container, {
                    opacity: 0,
                    y:"-100%",
                    ease:"Power2.easeInOut",
                    duration: 1.25
                });
                // window.scrollTo(0, 0);
                // window.scrollTo(scrollX, scrollY);
                done();
            },
            async enter({next}) {
                const done = this.async();
                // Enter animation
                gsap.from(next.container, {
                    opacity: 0,
                    y:"100%",
                    ease:"Power2.easeInOut",
                    duration: 1.25
                });
                done();
            },
            async beforeLeave (_) {
                console.log("LEAVING");
                navState.close(); // Close menu
            },
            async beforeEnter (_) {
                console.log("ENTERING");  
            }
        }
    ]
});    

window.scrollTo(scrollX, scrollY);