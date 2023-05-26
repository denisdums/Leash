module.exports = {
    server: {
        rewriteRequestUrl: (url) => {
            if (!url.endsWith('.bundle')) {
                return url;
            }
            return url + '?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true';
        },
    },
}