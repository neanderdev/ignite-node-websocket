import { container } from "tsyringe";

import { io } from "../http";

import { CreateUserService } from "../services/CreateUserService";

io.on("connect", (socket) => {
  socket.on("start", async (data) => {
    const { email, name, avatar } = data;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      email,
      socket_id: socket.id,
      name,
      avatar,
    });

    console.log(user);
  });
});
