/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'
import {prisma} from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Returns the Latest products

export async function getLatestProducts() {

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {createdAt: 'desc'}
    });

    return convertToPlainObject(data);

}

// Return a single product by its slug
export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({where: {slug: slug}})
}