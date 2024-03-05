export function resolveUrl(host: string, ...path: string[]) {
    const trimmedHost = host.replace(/\/$/, '');
    const trimmedPaths = path.map((p) =>
        p
            .split('/')
            .filter((part) => part)
            .join('/'),
    );
    return new URL(trimmedPaths.join('/'), trimmedHost);
}
