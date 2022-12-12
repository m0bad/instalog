import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        // Seed the database
        // const { seeds } = await import('../../db/seeds')
    } else if (req.method === 'POST') {
        // Create a new
    }
    const { name = 'World' } = req.query
    res.status(200).json({ name })
}
