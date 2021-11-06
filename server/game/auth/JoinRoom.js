class JoinRoom {
  constructor() {
    this.roomId = 0;
  }

  get ProtocolId() {
    return 80;
  }

  deserialize(input) {
    this.roomId = input.roomId;
  }

  action(socket, instance) {
    if (!instance.hasRoomId(this.roomId)) {
      instance.addRoom(this.roomId);
    }
    instance._rooms[this.roomId].addPlayer(socket.id);
    socket.join(this.roomId);
    socket.emit("event", {
      id: 150,
      players: instance._rooms[this.roomId].player,
    });
    socket.to(this.roomId).emit("event", {
      id: 200,
      message: "Bonjour",
    });
  }
}

module.exports = JoinRoom;
