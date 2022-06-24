import PropTypes from 'prop-types';
import {GifItem} from "./GifItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <div>
                <h3 aria-label='h3'>{category}</h3>
            </div>

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {images.map((img) => (
                    <GifItem key={img.id}
                        {...img}
                    />
                ))}
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
