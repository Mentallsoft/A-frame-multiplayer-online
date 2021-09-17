AFRAME.registerComponent('controles', {
    schema: {

    },

    init: function () {
        // Do something when component first attached.
    },

    update: function () {
        // Do something when component's data is updated.
        let player = document.querySelector("#walker")

        window.addEventListener("keydown", function (event) {

            if (event.code == 'ArrowUp' || event.code == 'KeyW') {
                player.setAttribute('rotation', "0 180 0")
                player.setAttribute('animation-mixer', { clip: "metarig|Walk", loop: "repeat" });
            }
            if (event.code == 'ArrowDown' || event.code == 'KeyS') {
                player.setAttribute('rotation', "0 0 0")
                player.setAttribute('animation-mixer', { clip: "metarig|Walk", loop: "repeat" });
            }
            if (event.code == 'ArrowLeft' || event.code == 'KeyA') {
                player.setAttribute('rotation', "0 -90 0")
                player.setAttribute('animation-mixer', { clip: "metarig|Walk", loop: "repeat" });
            }
            if (event.code == 'ArrowRight' || event.code == 'KeyD') {
                player.setAttribute('rotation', "0 90 0")
                player.setAttribute('animation-mixer', { clip: "metarig|Walk", loop: "repeat" });
            }
            if (event.code == 'Space') {
                player.setAttribute('rotation', "0 0 0")
                player.setAttribute('animation-mixer', { clip: "metarig|Dance1", loop: "repeat" });
            }
        }, true);

        window.addEventListener("keyup", function (event) {
            player.setAttribute('animation-mixer', { clip: "metarig|Idle(HeavyBreathing)", loop: "repeat" });
        }, true);

    },

    remove: function () {
        // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
    }
});
