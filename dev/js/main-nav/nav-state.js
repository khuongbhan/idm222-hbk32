export class NavigationState {
    /**
     * 
     * @param {HTMLElement} listener The listener for click events that toggle the menu.
     * @param {gsap.core.Timeline} burgerTimeline The gsap timeline for the burger.
     * @param {gsap.core.Timeline} navTimeline The gsap timeline for the main navigation panel.
     */
    constructor(listener, burgerTimeline, navTimeline) {
        this.isOpen = false; //  A flag to check if the menu is open
        this.burgerTimeline = burgerTimeline; // Burger timeline
        this.navTimeline = navTimeline; // Main nav timeline
        this.listener = listener;
    }

    /**
     * Initalize state
     */
    init() {
        console.log("Initializing Navigation State")
        this.toggle = this.toggle.bind(this); // Bind this object to the method toggle (i.e. this keyword)
        this.listener.on("click", this.toggle);
    }

    /**
     * Open the menu (regardless of state).
     */
    open() {
        console.log("Opening nav panel...")
        this.burgerTimeline.play();
        this.navTimeline.play();
        this.isOpen = true;
    }

    /**
     * Close the menu (regardless of state).
     */
    close() {
        console.log("Closing nav panel...")
        this.burgerTimeline.reverse();
        this.navTimeline.reverse();
        this.isOpen = false;
    }

    /**
     * Toggle the menu
     */
    toggle() {
        this.isOpen? this.close(): this.open();
    }
}