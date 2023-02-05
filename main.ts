import db from "./db/database";
import * as migrations from "./migrations";

async function main() {
    console.log("starting");

    const result = await migrations.run();

    if (!result) {
        process.exit(1);
    }

    const res = await db
        .insertInto("book")
        .values({
            title: "First book",
            publish_year: 1990,
        })
        .execute();

    console.log(res);

    const allBooks = await db.selectFrom("book").selectAll().execute();

    allBooks.forEach((book) => {
        console.log(`Found ${book.title}, created on ${book.created_at}`);
    });
}

function add(a: number, b: number) {
    return a + b;
}

main().catch(console.error);
