import { container } from "tsyringe";

import { io } from "../http";

import { CreateUserService } from "../services/CreateUserService";
import { GetAllUserService } from "../services/GetAllUserService";

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

    socket.broadcast.emit("new_users", user);
  });

  socket.on("get_users", async (callback) => {
    const getAllUserService = container.resolve(GetAllUserService);

    const users = await getAllUserService.execute();

    callback(users);
  });
});
