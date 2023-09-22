const createResponse = (body: any, options?: ResponseInit) => {
  return new Response(body, options);
};

Bun.serve({
  port: process.env.PORT || 3000,
  fetch: async (request: Request) => {
    try {
      const { pathname } = new URL(request.url);
      switch (pathname) {
        case "/":
          return createResponse("Hello World!");
        case "/package.json":
          const packageJson = Bun.file("./package.json");
          return createResponse(packageJson, { headers: { "Content-Type": "application/json" } });
        default:
          throw new Error("Not Found");
      }
    } catch (error: any) {
      const responseJson = JSON.stringify({
        error: error.message,
      });
      return createResponse(responseJson, { status: 500, headers: { "Content-Type": "application/json" } });
    }
  },
  error: (error: Error) => {
    const responseJson = JSON.stringify({
      error: error.message,
    });
    return createResponse(responseJson, { status: 500, headers: { "Content-Type": "application/json" } });
  }
});
