
export const GifGridItem = ({ title, url }: GifGridItemType) => {
    return (
        <div className="card">
            <img src={url} title={title} alt={title} />
            <p>{title}</p>
        </div>
    )
}

type GifGridItemType = {
    title: string,
    url: string
}