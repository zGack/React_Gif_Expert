import {render, screen} from "@testing-library/react";
import {GifExpertApp} from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
    const newCategory = 'Pixel Art';

    test('debe agregar una categoria solo si esta no ha sido agregada antes', () => {

        render(<GifExpertApp />);

        //expect(screen.getAllByRole('heading', {level: 3})).not.toHaveProperty(newCategory);
        //console.log(category);
        //screen.debug();
    });
});
