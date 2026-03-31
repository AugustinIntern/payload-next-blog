import { seedAdmin } from './seeders/admin.seeder'

async function main() {
  try {
    await seedAdmin()
    process.exit(0)
  } catch (error) {
    console.error('Error occurred while seeding data:', error)
    process.exit(1)
  }
}

void main()
