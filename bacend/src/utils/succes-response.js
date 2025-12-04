export async function succesRes(res,data,statusCode = 200) {
    return res.status(statusCode).json({
        statusCode,
        message: "succes",
        data
    });
}