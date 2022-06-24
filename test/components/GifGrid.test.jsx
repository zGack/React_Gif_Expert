import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/GifGrid";
import {useFetchGifs} from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'Stardew Valley';

    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Stardew Valley',
                url: 'https://localhost/stardew.png'
            },
            {
                id: '0123',
                title: 'Terraria',
                url: 'https://localhost/terraria.png'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={category} />);
        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
