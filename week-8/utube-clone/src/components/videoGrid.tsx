import { VideoCard } from "@/components/videoCard"
const videos = [
    {
        title: "Tom and Jerry | A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids",
        image: "/photo.png", thumbImage: "/photo.png",
        author: "Cartoon Networks", views: "690M", timestamp: "5 years ago"
    },
    {
        title: "Ben 10| A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids",
        image: "/photo.png", thumbImage: "/photo.png",
        author: "Cartoon Networks", views: "690M", timestamp: "5 years ago"
    },
    {
        title: "Chhota Bheem | A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids",
        image: "/photo.png", thumbImage: "/photo.png",
        author: "Cartoon Networks", views: "690M", timestamp: "5 years ago"
    },
    {
        title: "Doraemon | A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids",
        image: "/photo.png", thumbImage: "/photo.png",
        author: "Cartoon Networks", views: "690M", timestamp: "5 years ago"
    },
    {
        title: "Oggy and the Coacroch | A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids",
        image: "/photo.png", thumbImage: "/photo.png",
        author: "Cartoon Networks", views: "690M", timestamp: "5 years ago"
    },
    {
        title: "Tom and Jerry | A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids",
        image: "/photo.png", thumbImage: "/photo.png",
        author: "Cartoon Networks", views: "690M", timestamp: "5 years ago"
    },
    {
        title: "Ben 10| A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids",
        image: "/photo.png", thumbImage: "/photo.png",
        author: "Cartoon Networks", views: "690M", timestamp: "5 years ago"
    },
    {
        title: "Chhota Bheem | A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids",
        image: "/photo.png", thumbImage: "/photo.png",
        author: "Cartoon Networks", views: "690M", timestamp: "5 years ago"
    },
    {
        title: "Doraemon | A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids",
        image: "/photo.png", thumbImage: "/photo.png",
        author: "Cartoon Networks", views: "690M", timestamp: "5 years ago"
    },
    {
        title: "Oggy and the Coacroch | A Bit of Fresh Air! | Classic Cartoon Compilation | @WB Kids",
        image: "/photo.png", thumbImage: "/photo.png",
        author: "Cartoon Networks", views: "690M", timestamp: "5 years ago"
    }
]

export function VideoGrid() {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {videos.map(video => 
            <div>
                <VideoCard
                    title={video.title}
                    image={video.image} thumbImage={video.thumbImage}
                    author={video.author} views={video.views} timestamp={video.timestamp}
                    >
                </VideoCard>
            </div>
        )}
    </div>
}