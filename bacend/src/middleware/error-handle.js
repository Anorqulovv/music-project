export function errorHandle(err, req, res){
    const statusCode = err?.statusCode || 500;
    const message = err?.messagesi || "Interneal server error";
    return res.status(statusCode).json({
        statusCode,
        message
    });
}