const handler = async function (event: any, context: any) {
  console.log('Hello from lambda. event:', event);
};

export { handler };