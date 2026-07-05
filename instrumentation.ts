import { sequelize } from "@/lib/models";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    try {
      await sequelize.authenticate();
      await sequelize.sync({ alter: true });
    } catch (error) {
      console.error("Database initialization failed:", error);
    }
  }
}
