import { faker } from '@faker-js/faker'

export default {
  schedule: [
    {
      avatar: faker.image.avatar(),
      code: faker.datatype.hexadecimal({ length: 5 }),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      plan: faker.helpers.arrayElement(['free', 'basic', 'business'])
    },
    {
      avatar: faker.image.avatar(),
      code: faker.datatype.hexadecimal({ length: 5 }),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      plan: faker.helpers.arrayElement(['free', 'basic', 'business'])
    },
    {
      avatar: faker.image.avatar(),
      code: faker.datatype.hexadecimal({ length: 5 }),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      plan: faker.helpers.arrayElement(['free', 'basic', 'business'])
    },
    {
      avatar: faker.image.avatar(),
      code: faker.datatype.hexadecimal({ length: 5 }),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      plan: faker.helpers.arrayElement(['free', 'basic', 'business'])
    }
  ]
}
