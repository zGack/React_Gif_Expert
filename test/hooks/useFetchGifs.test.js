import {renderHook, waitFor} from "@testing-library/react";
import {useFetchGifs} from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    const category = 'Stardew Valley';

    test('debe regresar el estado inicial', () => {

        const {result} = renderHook(() => useFetchGifs(category))
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe retonar un arreglo de imagenes y el isLoading en false', async () => {

        const {result} = renderHook(() => useFetchGifs(category))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});