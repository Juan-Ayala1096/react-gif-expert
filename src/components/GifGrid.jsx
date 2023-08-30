import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )

    console.log({images, isLoading});

    //Se pueden  realizare de dos maneras, para obtener las imagenes
    //1.
    // useEffect( () => {
    //     getGifs(category)
    //         .then( newImages => setImages(newImages) );
    // }, [])

    //2. 
    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])

    return (
        <>
            <h3>{ category }</h3>
            {/* Se pueden realizar de varias maneras lo que es el isLoading */}
            {/* 1era */}
            {/* {
                isLoading
                ? (<h2 >Cargando...</h2> )
                : null
                
            } */}
            {/* 2da */}
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid" >
                {
                    images.map (( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image } //operador strep, sirve para que reciba cada una de las propiedades que contiene la imagen como property ya sea id, url, titulo etc
                        />
                    ))
                }
            </div>

            {/* <h5>{ counter }</h5>

            <button onClick={ () => setCounter( counter + 1 )}>+1</button> */}
        </>
  )
}
