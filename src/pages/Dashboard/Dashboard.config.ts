import { faker } from '@faker-js/faker'

export default {
  patients: [
    {
      avatar: faker.image.avatar(),
      name: faker.name.firstName()
    },
    {
      avatar: faker.image.avatar(),
      name: faker.name.firstName()
    },
    {
      avatar: faker.image.avatar(),
      name: faker.name.firstName()
    },
    {
      avatar: faker.image.avatar(),
      name: faker.name.firstName()
    }
  ]
}
