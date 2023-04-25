const menuBtn = document.querySelector(".menu-btn");
        const menu = document.querySelector(".menu");
        const closeBtn = document.querySelector(".close-btn");

        let menuOpen = false;

        menuBtn.addEventListener("click", () => {
            if (!menuOpen) {
                menu.classList.add("menu--open");
                menuOpen = true;
            } else {
                menu.classList.remove("menu--open");
                menuOpen = false;
            }
        });

        closeBtn.addEventListener("click", () => {
            menu.classList.remove("menu--open");
            menuOpen = false;
        });
