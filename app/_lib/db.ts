import mysql from "mysql2/promise";
import { DB } from "../../utils/config";

export const db = mysql.createPool({
  host: DB.HOST,
  user: DB.USER,
  password: DB.PASSWORD,
  database: DB.DATABASE,
});