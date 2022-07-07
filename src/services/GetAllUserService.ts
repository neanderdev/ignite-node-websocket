import { injectable } from "tsyringe";

import { User } from "../schemas/User";

@injectable()
class GetAllUserService {
  async execute() {
    const users = await User.find();

    return users;
  }
}

export { GetAllUserService };
