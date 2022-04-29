// import $ from "jquery";
import { Fancybox } from "@fancyapps/ui";

export function fancyBox(){
    Fancybox.bind("[data-fancybox]", {
        Toolbar: {
            display: [
              { id: "close", position: "right" }
            ]
        },
        Thumbs: false
    });
    
}