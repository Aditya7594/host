exports.handler = async (event, context) => {
    if (event.httpMethod === "POST") {
        return {
            statusCode: 200,
            body: "Button triggered successfully!",
        };
    } else {
        return {
            statusCode: 405,
            body: "Method Not Allowed",
        };
    }
};
