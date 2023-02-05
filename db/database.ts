import Database from "better-sqlite3";
import { Generated, SqliteDialect, Kysely, ColumnType } from "kysely";

interface BookTable {
    id: Generated<number>;

    title: string;
    publish_year: number;

    created_at: ColumnType<Date, never, never>;
}

interface BookDatabase {
    book: BookTable;
}

export const dbDriver = new Database("./data.db");

const db = new Kysely<BookDatabase>({
    dialect: new SqliteDialect({
        database: dbDriver,
    }),
    log: ["query", "error"],
});
export default db;
