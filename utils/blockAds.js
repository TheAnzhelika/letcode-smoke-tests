const DEFAULT_BLOCK_HOSTS = [
    'googlesyndication.com',
    'doubleclick.net',
    'googleads.g.doubleclick.net',
    'pagead2.googlesyndication.com',
    'adservice.google.com',
    'googletagmanager.com',
    'google-analytics.com',
];
    
async function blockAds(context, extraHosts = []) {
    const blockHosts = new Set([...DEFAULT_BLOCK_HOSTS, ...extraHosts]);
    await context.route('**/*', route => {
        try {
            const { hostname } = new URL(route.request().url());
            for (const h of blockHosts) {
                if (hostname === h || hostname.endsWith(`.${h}`)) {
                    return route.abort();
                }
            }
        } catch { /* ignore invalid URLs */ }
        return route.continue();
    });
}

export default blockAds;
