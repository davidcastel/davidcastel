const gradientBadge = require('gradient-badge');
exports.endpoint = function (req, resp) {
    resp.setHeader('Content-Type', 'image/svg+xml');
    resp.end(gradientBadge({
        subject: '',
        status: 'Instagram',
        style: 'flat',
        gradient: ['405de6', '5851db', '833ab4', 'c13584', 'e1306c', 'fd1d1d', 'ff00ee', 'f56040', 'f77737', 'fcaf45', 'ffdc80']
    }));
}
