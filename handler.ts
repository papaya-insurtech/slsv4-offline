import test from "./test.graphql";

exports.hello = async function hello() {
  console.log({ test });

  return {
    body: JSON.stringify({ foo: "bar" }),
    statusCode: 200,
  };
};
