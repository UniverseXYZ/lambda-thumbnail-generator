const { execSync } = require("child_process");

const metadata = {
  "function-name": "createVideoThumbnail",
  "zip-file": "fileb://dist/function.zip",
  "runtime": "nodejs10.x",
  "handler": "index.handler",
  "role": "arn:aws:iam::484931367994:role/S3-Lambda-Role",
  "timeout": 90
};

const options = Object.entries(metadata).reduce(
  (query, [key, value]) => {
    query.push(`--${key}`);
    query.push(value);
    return query;
  },
  []
).join(" ");

execSync(`aws lambda create-function ${options}`);
