// Vazifa 1: URL Parsing

const { URL } = require("url");

const myUrl = new URL(
  "https://example.com:8080/products?category=books&sort=price#top"
);

console.log(myUrl.protocol); //  https:
console.log(myUrl.host); //  example.com:8080
console.log(myUrl.port); //  8080pathname
console.log(myUrl.pathname); // /products
console.log(myUrl.hash); // #top

// Vazifa 3: Tizim Ma'lumotlarini Chiqarish

const os = require("node:os");

console.log(os.platform); // [Function: platform] {[Symbol(Symbol.toPrimitive)]: [Function (anonymous)]}
console.log(os.arch);
console.log(os.userInfo);
console.log(os.type());
console.log(os.release());
console.log(os.uptime());
console.log(Math.floor(os.uptime / 3600));
console.log(os.cpus);
console.log(os.totalmem);
console.log(os.networkInterfaces);

// Vazifa 4: Fayl Yo'llari Bilan Ishlash
const path = require("node:path");
console.log(path.basename(__filename));
console.log(path.basename("/user/domen/index.html"));
console.log(path.extname(__filename));
console.log(path.posix.join("user", "main", "app.js"));
console.log(path.resolve("users", "index.js"));
console.log(path.parse(__filename));
console.log(path.normalize("user///unim//men.js"));

// Vazifa 7: Fayl Yaratish va O'qish

const fs = require("node:fs");
const path = require("node:path");

fs.writeFile("example.txt", "Bu mening birinchi faylim.", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

fs.readFile(path.resolve("example.txt"), (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
});
