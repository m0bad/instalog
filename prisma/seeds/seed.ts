import { PrismaClient } from '@prisma/client'
import { ACTIONS_SEEDS, EVENTS_SEEDS, USERS_SEEDS } from './data'
const prisma = new PrismaClient()
async function main() {
    try {
        // clean up the db
        await prisma.action.deleteMany()
        await prisma.event.deleteMany()
        await prisma.user.deleteMany()

        // Now start inserting the data
        const insertedUsers = await prisma.user.createMany({
            data: USERS_SEEDS,
        })

        console.log(`Inserted ${insertedUsers.count} users`)

        const insertedEvents = await prisma.event.createMany({
            data: EVENTS_SEEDS,
        })

        console.log(`Inserted ${insertedEvents.count} events`)

        const insertedActions = await prisma.action.createMany({
            data: ACTIONS_SEEDS,
        })

        console.log(`Inserted ${insertedActions.count} actions`)
    } catch (e) {
        console.error(e)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

main()
