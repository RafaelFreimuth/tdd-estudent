import { Property } from './property';
import DateRange from '../utils/date-range';

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

    it('Não deve dar nenhum desconto caso total de noites seja menor que 7', () => {
        const property = new Property(
            '1',
            'Apartamento',
            'Apartamento todo imobiliado',
            2,
            100
        );

        const dateRange = new DateRange(new Date('2025-01-01'), new Date('2025-01-07'));
        expect(property.getTotalPriceByRange(dateRange)).toBe(600);

        const novoDateRage = new DateRange(new Date('2025-01-01'), new Date('2025-01-02'));
        expect(property.getTotalPriceByRange(novoDateRage)).toBe(100);
    });

    it('Deve dar desconto de 10% caso quantidade de noites maior ou igual a 7', () => {
        const property = new Property(
            '1',
            'Apartamento',
            'Apartamento todo imobiliado',
            2,
            100
        );

        const dateRange = new DateRange(new Date('2025-01-01'), new Date('2025-01-08'));
        expect(property.getTotalPriceByRange(dateRange)).toBe(630);

        const dateRangeSegundaOpcao = new DateRange(new Date('2025-01-01'), new Date('2025-01-09'));
        expect(property.getTotalPriceByRange(dateRangeSegundaOpcao)).toBe(720);
    })
});