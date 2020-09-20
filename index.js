const fs = require("fs");

// fs.writeFile("test.txt", "This is Updated", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.appendFileSync("test.txt", "\nThis is New Update", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.readFile("test.txt", (err, data) => {
//   console.log(data.toString());
// });

// fs.unlinkSync("test.txt", (err) => {});

fs.readFile("old.txt", (err, data) => {
  const readAbleData = data.toString();

  fs.writeFile("new.txt", readAbleData, (err) => {
    fs.unlink("old.txt", (err) => {});
  });
});

// Some API interaction
// DATABAse Interaction
