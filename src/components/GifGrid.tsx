import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }: Category) => {
    const { images, isLoading } = useFetchGifs(category);

    console.log({ isLoading });

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map(
                        (image: GiphyImage) => (
                            <GifGridItem key={image.id} {...image} />
                        )
                    )
                }
            </div>
        </>
    )
}

type Category = {
    category: string
};

type GiphyImage = {
    id: string,
    title: string,
    url: string
};