import { Property } from './property';

describe('Property', () => {
    it('Deve criar uma instancia de Property com todos os atributos', () => {
        const property = new Property(
            '1',
            'Apartamento',
            'Apartamento todo imobiliado',
            4,
            200
        );

        expect(property.getId()).toBe('1');
        expect(property.getName()).toBe('Apartamento');
        expect(property.getDescription()).toBe('Apartamento todo imobiliado');
        expect(property.getMaxGuests()).toBe(4);
        expect(property.getBasePricePerNigth()).toBe(200);
    });

    it('A quantidade maxima de hospedes nao deve ser zero ou negativo', () => {
        expect(() => {
            new Property(
                '1',
                'Apartamento',
                'Apartamento todo imobiliado',
                0,
                200
            );
        }).toThrow('A quantidade maxima de hospedes deve ser maior que zero.');

        expect(() => {
            new Property(
                '1',
                'Apartamento',
                'Apartamento todo imobiliado',
                -1,
                200
            );
        }).toThrow('A quantidade maxima de hospedes deve ser maior que zero.');
    });

    it('Deve validar caso numero de hospedes excedidos', () => {
        const property = new Property(
            '1',
            'Apartamento',
            'Apartamento todo imobiliado',
            4,
            200
        );

        expect(() => property.validateMaxGuedes(5)).toThrow('O número de máximo de hospedes foi excedido. Número máximo: 4');
    });
});