require('dotenv').config()
const prisma = require('../models/index')


async function run() {
    await prisma.$executeRawUnsafe('DROP DATABASE sarupsaisin')
    await prisma.$executeRawUnsafe('CREATE DATABASE sarupsaisin')
}

console.log('Reset DB...')
run()