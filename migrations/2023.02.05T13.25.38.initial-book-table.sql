-- up migration
CREATE TABLE
    book (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        publish_year INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );