class ApiError extends Error {
    Constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        statck = ""
    ) {
        super(message)
        this.StatusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(statck) {
            this.stack = statck 
        } else {
            Error.captureStackTrace(this, this.Constructor)
        }
    }
}

export {ApiError}