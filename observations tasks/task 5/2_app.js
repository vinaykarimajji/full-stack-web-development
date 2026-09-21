const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter filename: ", (filename) => {

    rl.question("Enter content: ", (content) => {

        // 1. Create / Write file
        fs.writeFile(filename, content, (err) => {

            if (err) {
                console.log("Error:", err);
                rl.close();
                return;
            }

            console.log("\nFile created successfully!");

            // 2. Read file
            fs.readFile(filename, "utf8", (err, data) => {

                if (err) {
                    console.log("Error:", err);
                    rl.close();
                    return;
                }

                console.log("\nOriginal Content:");
                console.log(data);

                rl.question(
                    "\nEnter additional content: ",
                    (additionalContent) => {

                    // 3. Append content
                    fs.appendFile(
                        filename,
                        "\n" + additionalContent,
                        (err) => {

                        if (err) {
                            console.log("Error:", err);
                            rl.close();
                            return;
                        }

                        console.log("\nContent appended successfully!");

                        // 4. Display final content
                        fs.readFile(
                            filename,
                            "utf8",
                            (err, finalData) => {

                            if (err) {
                                console.log("Error:", err);
                                rl.close();
                                return;
                            }

                            console.log("\nFinal Content:");
                            console.log("----------------");
                            console.log(finalData);
                            console.log("----------------");

                            rl.close();
                        });
                    });
                });
            });
        });
    });
});