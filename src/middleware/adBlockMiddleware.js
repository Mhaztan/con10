// export const detectAdBlock = (req, res, next) => {
//     const adBlockHeader = req.headers['adblock-detected'];
//     if (adBlockHeader === 'true') {
//         return res.status(403).json({ message: 'Ad blocker detected. Please disable it to use this service.' });
//     }
//     next();
// };

export const detectAdBlock = (req, res, next) => {
    const adBlockDetected = req.headers['adblocker'] === 'true';

    if (adBlockDetected) {
        console.log('Ad blocker detected, redirecting...');
        return res.redirect(`${process.env.FRONTEND_URL}/error`);
    }

    next();
};