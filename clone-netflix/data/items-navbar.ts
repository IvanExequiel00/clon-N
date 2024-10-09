interface NavbarItem {
    name: string;
    link: string; 
}

export const itemsNavbar: NavbarItem[] = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Series",
        link: "/series",
    },
    {
        name: "Peliculas",
        link: "/movies",
    },
    {
        name: "Novedades mas vistas",
        link: "/more-views",
    },
    {
        name: "Mi lista",
        link: "/my-list",
    },
];