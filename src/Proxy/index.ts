interface Data {
  display(): void;
}

class SensitiveData implements Data {
  private data: string;

  constructor() {
    this.data = "Sensitive Data";
  }

  display(): void {
    console.log(this.data);
  }
}

class ProxyData implements Data {
  private data: SensitiveData;
  private access: boolean = false;

  constructor(userName: string, password: string) {
    this.data = new SensitiveData();
    if (userName === "admin" && password === "admin") {
      this.access = true;
    }
  }

  display(): void {
    if (this.access) {
      this.data.display();
    } else {
      console.log("Access Denied");
    }
  }
}

const data = new ProxyData("admin", "admin");
data.display(); // Sensitive Data

const data2 = new ProxyData("user", "user");
data2.display(); // Access Denied