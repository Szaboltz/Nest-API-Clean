import { faker } from "@faker-js/faker";
import { UserProps } from "../../modals/user.modal";


export function UserDataBuilder(): UserProps {
  return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: new Date()
  }
}