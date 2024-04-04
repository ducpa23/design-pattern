class Database {
  private static instance: Database
  private constructor() {
    this.connect()
  }
  
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public connect() {
    // handle connect db
  }
}

