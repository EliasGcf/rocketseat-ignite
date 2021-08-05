import { createConnection, getConnectionOptions } from "typeorm";

export default async (name = "default") => {
  const ormConfigOptions = await getConnectionOptions();

  return createConnection();
};
