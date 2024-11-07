/* 
    Model: Portafolio
    Fields:
        id: number
        user: {
            name: string,
            lastName: string,
            email: string,
            age: number,
            role?: string ? es opcional
        },
        name: string,
        status: enum (draft, published, archived) -> default draft
        url: string,
        active: boolean,
        noVisits: number,
        createdAt: Date,
        updatedAt: Date
*/

const PortafolioCarmen = {
    id: 1,
    user: {
        name: 'Carmen',
        lastName: 'Acevedo',
        email: 'carmendaniela@gmail.com',
        age: 27,
        role: 'Full Stack Developer Jr',
    },
    name: 'My first portafolio v1',
    status: 'draft',
    url: 'https://carmenacevedo.dev/portafolio',
    active: true,
    noVisits: 2,
    createdAt: new Date('2024-10-19T08:00:00'),
    updatedAt: new Date('2024-10-19T08:00:00'),
}

module.exports = [
    PortafolioCarmen,
]