const apiGifKey = 'qWlghzfULtfpOeC1ODSOl5EIGgWbjbLL';

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiGifKey}&limit=10&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img: GiphyImage) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}

type GiphyImage = {
    id: string,
    title: string,
    images: GiphyImageItem,
    url: string
};

type GiphyImageItem = {
    downsized_medium: GiphyImageItemImg
};

type GiphyImageItemImg = {
    url: string
};