import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongooConnection = {
  isConecnected: 0,
};

export const connect = async () => {
  if (mongooConnection.isConecnected) {
    console.log("Ya estabamos conectados");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConecnected = mongoose.connections[0].readyState;

    if (mongooConnection.isConecnected === 1) {
      console.log("Usando conexion anterior");
      return;
    }
    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || "");
  mongooConnection.isConecnected === 1;
  console.log("Conectado a MongoDB:", process.env.MONGO_URL);
};

export const disconnect = async () => {
  if (mongooConnection.isConecnected === 0) return;

  await mongoose.disconnect();
  console.log("Desconectado de MongoDB");
};
