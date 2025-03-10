import rateLimit from 'express-rate-limit';

const rateLimitMiddleware = (maxRequests, windowMs, message = 'Too many requests from this IP, please try again after a minute') => {
    return rateLimit({
        windowMs: windowMs, // Time window in milliseconds
        max: maxRequests, // Max number of requests per IP
        message: message,
        headers: true,
    });
};

export default rateLimitMiddleware;