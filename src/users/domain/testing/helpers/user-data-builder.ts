import { faker } from "@faker-js/faker";
import { UserProps } from "../../entities/user.entity";

export function UserDateBuilder(): UserProps {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    CreateAt: new Date()
  }
}