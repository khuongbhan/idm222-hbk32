import { navState } from "../main-nav/nav-global";
// barba transitions 
// LifeCycle: https://waelyasmina.com/barba-js-v2-tutorial-for-total-beginners/
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
                // Leave animation
                gsap.to(current.container, {
                    opacity: 0,
                    duration: 3,
                });
                done();
            },
            async enter({next}) {
                const done = this.async();
                // Enter animation
                gsap.from(next.container, {
                    opacity: 0,
                    duration: 3,
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
        }, 
    ]
});    