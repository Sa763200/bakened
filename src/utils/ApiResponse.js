class ApiResponse {
    constructor(statusCode, message, data = " Success"){
        this.StatusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}