import Image from "next/image";
import type { UnsplashImage } from "@/models/unsplash";
import Link from "next/link";

export const metadata = {
    title: "Static fetch image",
}

export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY);
        const image: UnsplashImage = await response.json();

        const width = Math.min(500, image.width);
        const height = (width / image.width) * image.height;

        
    return (
        <div className="d-flex justify-content-center">
            <Image
                src={image.urls.raw}
                alt={image.description}
                width={width}
                height={height}
                className="rounded shadow mw-100 h-100"
 
            />
            by <Link href={"https://unsplash.com/@" + image.user.username}>@{image.user.username}</Link>
        </div>
    )
    
} 