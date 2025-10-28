import { services } from "./services"

type NavigationLinks = {
    id: string,
    link: string,
    name: string,
    subLinks?: NavigationLinks[]
}

export const navigation: NavigationLinks[] = [
    {
        id: 'home',
        link: '/',
        name: 'Home'
    },
    {
        id: 'about',
        link: '/about',
        name: 'About Us'
    },
    {
        id: 'services',
        link: '/services',
        name: 'Our Services',
        subLinks: services.map(service => {
            return {
                id: service.id,
                link: `/services/${service.id}`,
                name: service.name,
            }
        })
    },
    {
        id: 'contact',
        link: '/contact',
        name: 'Contact Us'
    }
]