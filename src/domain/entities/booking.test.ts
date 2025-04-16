import DateRange from "../utils/date-range";
import { Property } from "./property";
import { User } from "./user";
import { Booking } from "./booking";

describe('Booking entitie', () => {

    it('Deve criar uma instancia de booking com os campos preenchidos', () => {
        const property = new Property('1', 'Casa', 'Caso no lago', 5, 100);
        const user = new User('1', 'Joao paulo');
        const dateRange = new DateRange(new Date('2025-01-01'), new Date('2025-01-10'));

        const booking = new Booking(
            '1',
            property,
            user,
            dateRange,
            2
        );

        expect(booking.getId()).toBe('1');
        expect(booking.getProperty()).toBe(property);
        expect(booking.getUser()).toBe(user);
        expect(booking.getDateRange()).toBe(dateRange);
        expect(booking.getCountGuests()).toBe(2);
    });

    it('Não deve criar uma reserva com quantidade de hospedes zero ou negativo', () => {
        const property = new Property('1', 'Casa', 'Caso no lago', 5, 100);
        const user = new User('1', 'Joao paulo');
        const dateRange = new DateRange(new Date('2025-01-01'), new Date('2025-01-10'));

        expect(() => {
            new Booking('1', property, user, dateRange, 0);
        }).toThrow('A quantidade de hospedes não deve ser negativa ou zero.');

        expect(() => {
            new Booking('1', property, user, dateRange, -1);
        }).toThrow('A quantidade de hospedes não deve ser negativa ou zero.');
    });

    it('Não deve ser possivel fazer uma reserva com mais hospedes que a propriedade suporte', () => {
        const property = new Property('1', 'Casa', 'Caso no lago', 2, 100);
        const user = new User('1', 'Joao paulo');
        const dateRange = new DateRange(new Date('2025-01-01'), new Date('2025-01-10'));

        expect(() => {
            new Booking('1', property, user, dateRange, 3);
        }).toThrow('O número de máximo de hospedes foi excedido. Número máximo: 2');
    });
});