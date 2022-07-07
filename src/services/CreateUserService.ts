import { injectable } from "tsyringe";

import { User } from "../schemas/User";

interface ICreateUserDTO {
  email: string;
  socket_id: string;
  name: string;
  avatar: string;
}

@injectable()
class CreateUserService {
  async execute({ email, socket_id, name, avatar }: ICreateUserDTO) {
    const userAlreadyExists = await User.findOne({
      email,
    }).exec();

    if (userAlreadyExists) {
      const user = await User.findOneAndUpdate(
        {
          _id: userAlreadyExists._id,
        },
        {
          $set: {
            socket_id,
            avatar,
            name,
          },
        }
      );

      return user;
    } else {
      const user = await User.create({
        email,
        socket_id,
        name,
        avatar,
      });

      return user;
    }
  }
}

export { CreateUserService };
