/* eslint-disable @typescript-eslint/no-unused-vars */
import {PrismaClient} from '@prisma/client';
import sampleData from './sample-data';

async function main() {
    const prisma = new PrismaClient();

    // Delete any products before inserting (creating new product)
    await prisma.product.deleteMany
    await prisma.product.createMany({data: sampleData.products});

    console.log('Database seeded successfully..')
}

main()