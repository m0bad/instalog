export const getDateFilters = (startDate?: string, endDate?: string) => {
    if (!startDate && !endDate) return {}

    if (startDate && endDate) {
        return {
            occurred_at: {
                gte: new Date(startDate as string),
                lte: new Date(endDate as string),
            },
        }
    }
    if (startDate) {
        return {
            occurred_at: {
                gte: new Date(startDate as string),
            },
        }
    }
    return {
        occurred_at: {
            lte: new Date(endDate as string),
        },
    }
}

export const getSearchTermFilters = (searchTerm?: string) => {
    if (!searchTerm) return {}

    return {
        OR: [
            {
                actor: {
                    name: {
                        contains: searchTerm,
                    },
                },
            },
            {
                target: {
                    name: {
                        contains: searchTerm,
                    },
                },
            },
            {
                location: searchTerm,
            },
            {
                group: searchTerm,
            },
        ],
    }
}
