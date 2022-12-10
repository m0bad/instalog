import casual from 'casual'

const usedEventsIds: string[] = []

const getRandomEvent = () => {
    let randomIndex = Math.floor(Math.random() * EVENTS_SEEDS.length)
    while (usedEventsIds.includes(EVENTS_SEEDS[randomIndex].id)) {
        randomIndex = Math.floor(Math.random() * EVENTS_SEEDS.length)
    }
    return EVENTS_SEEDS[randomIndex]
}

const getRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * USERS_SEEDS.length)
    return USERS_SEEDS[randomIndex]
}

export const USERS_SEEDS = Array.from({ length: 100 }).map(() => ({
    id: casual.uuid,
    name: casual.name,
    email: casual.email,
    password: casual.password,
    role: casual.random_element(['USER', 'ADMIN']),
}))

export const EVENTS_SEEDS = Array.from({ length: 1000 }).map(() => ({
    id: casual.uuid,
    actorId: getRandomUser().id,
    targetId: getRandomUser().id,
    group: casual.random_element(['USER', 'ADMIN']),
    location: casual.city,
    metadata: {
        redirect: casual.url,
        description: casual.description,
        x_request_id: casual.uuid,
    },
}))

export const ACTIONS_SEEDS = Array.from({ length: 1000 }).map(() => {
    const eventId = getRandomEvent().id
    usedEventsIds.push(eventId)
    return {
        eventId,
        name: casual.random_element([
            'USER_LOGIN_SUCCESS',
            'USER_LOGIN_FAILURE',
            'USER_LOGOUT',
        ]),
    }
})
