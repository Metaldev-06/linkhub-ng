const { writeFileSync, mkdirSync } = require("fs");

require("dotenv").config();

const targetPath = "./src/environments/environment.ts";
const targetPathEnv = "./src/environments/environment.development.ts";

const projectId = process.env["projectId"];
const appId = process.env["appId"];
const storageBucket = process.env["storageBucket"];
const apiKey = process.env["apiKey"];
const authDomain = process.env["authDomain"];
const messagingSenderId = process.env["messagingSenderId"];
const measurementId = process.env["measurementId"];

if (
  !projectId ||
  !appId ||
  !storageBucket ||
  !apiKey ||
  !authDomain ||
  !messagingSenderId ||
  !measurementId
) {
  throw new Error(
    "FIREBASE_CREDENTIALS is not set in the environment variables.",
  );
}

const envFileContent = `
export const environment = {
  projectId: "${projectId}",
  appId: "${appId}",
  storageBucket: "${storageBucket}",
  apiKey: "${apiKey}",
  authDomain: "${authDomain}",
  messagingSenderId: "${messagingSenderId}",
  measurementId: "${measurementId}",
};
`;

mkdirSync("./src/environments", { recursive: true });
writeFileSync(targetPath, envFileContent, { encoding: "utf8" });
writeFileSync(targetPathEnv, envFileContent, { encoding: "utf8" });
