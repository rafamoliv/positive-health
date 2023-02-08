import { faker } from '@faker-js/faker'

export default {
  patients: [
    {
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      email: faker.internet.email()
    },
    {
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      email: faker.internet.email()
    }
  ]
}
