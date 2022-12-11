import { ActionName } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { getDateFilters, getSearchTermFilters } from './helpers'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Cursor-based pagination
    if (req.method === 'GET') {
        try {
            // TODO: Add validation
            const {
                search_term,
                action,
                page_size,
                cursor,
                sort_by,
                start_date,
                end_date,
            } = req.query

            const page_size_int = parseInt(page_size as string)

            const filterQuery = {
                ...getDateFilters(start_date as string, end_date as string),
                ...getSearchTermFilters(search_term as string),
                ...(action &&
                    (action as string) in ActionName && {
                        action: {
                            name: action as ActionName,
                        },
                    }),
            }
            const paginationQuery = {
                ...(page_size_int && {
                    skip: 1,
                    take: page_size_int,
                }),
                ...(cursor && {
                    cursor: {
                        id: cursor as string,
                    },
                }),
            }

            const [events, eventsCount] = await Promise.all([
                prisma.event.findMany({
                    where: filterQuery,
                    ...paginationQuery,
                    ...(sort_by && {
                        orderBy: {
                            [sort_by as string]: 'asc',
                        },
                    }),
                }),
                prisma.event.count({
                    where: filterQuery,
                }),
            ])

            return res.status(200).json({
                items: events,
                count: eventsCount,
            })
        } catch (err) {
            console.error(err)
            return res.status(500).json({ err })
        }
    } else if (req.method === 'POST') {
        // Create a new Event
    }
    return res.status(200).json({})
}
