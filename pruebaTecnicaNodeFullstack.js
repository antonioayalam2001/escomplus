import fs from "node:fs/promises";
// import net from "node:net"

// const ping = (ip, callback) => {
//     const startTime = process.hrtime()
//     const client = net.connect({ port: 80, host: ip }, () => {
//         client.end()
//         callback(null, { time: process.hrtime(startTime), ip })
//     })

//     client.on("error", (err) => {
//         client.end()
//         callback(err)
//         throw err
//     })
// }

// ping("googcom", (err, info) => {
//     if (err) {
//         console.log("Hubo un problema");
//         throw err
//     }
//     console.log(info)
// })

// EJERCICIO 2
// function getDataPromises() {
//     return new Promise((success, reject) => {
//         setTimeout(() => {
//             success({ data: "data" })
//         }, 2000)
//     })
// }

// getDataPromises().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// // EJERCICIO 2 Async-Await
// async function getDataAsync() {
//     const promise = () => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log("Async data");
//                 resolve({ data: "data" })
//             }, 2000)
//         })
//     }

//     const data = await promise();
//     return data;
// }

// await getDataAsync();

// Archivo con import fs from "node:fs";
// async function procesarArchivo(callback) {
//     const handleReadFile = (error, data) => {
//         if (error) {
//             callback(error);
//         }
//         fs.writeFile("output.txt", data.toUpperCase(), handleWritefile);
//     }

//     const handleWritefile = () => {
//         callback(null, "Archivo procesado");
//     }


//     fs.readFile("input.txt", "utf8", handleReadFile);

// }

// await procesarArchivo((err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("Archivo procesado");
//     console.log(data);
// });


async function procesarArchivo(callback) {
    const data = await fs.readFile("input.txt", "utf8");
    await fs.writeFile("output.txt", data.toUpperCase());
    callback(null, data);

}

await procesarArchivo((err, data) => {
    if (err) {
        console.log(err);
    }
    console.log("Archivo procesado");
    console.log(data);
});