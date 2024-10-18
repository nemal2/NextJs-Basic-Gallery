export interface UnsplashImage {
    description: string,
    user: {
        username: string
    }
    width: number,
    height: number,

    urls: {
        raw: string,
    }
}