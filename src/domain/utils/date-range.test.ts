import DateRange from "./date-range";

describe('DateRange test', () => {
    it('Deve dar erro caso data final anterior a data inicial', () => {
        expect(() => {
            const startDate = new Date("2025-03-25");
            const endDate = new Date("2025-03-24");
            
            new DateRange(startDate, endDate);
        }).toThrow("A Data Final deve ser posterior a Data Inicial.") 
    });

    it('Deve dar erro caso a data final seja igual a data inicial', () => {
        expect(() => {
            const hoje = new Date();
            const startDate = hoje;
            const endDate = hoje;

            new DateRange(startDate, endDate);
        }).toThrow('A Data Final deve ser posterior a Data Inicial.');
    });

    it('Deve criar o range e ser possível obiter as datas', () => {
        expect(() => {
            const startDate = new Date('2025-03-01');
            const endDate = new Date('2025-03-02');

            const dateRange = new DateRange(startDate, endDate);

            expect(dateRange.getStartDate()).toBe(startDate);
            expect(dateRange.getEndDate()).toBe(endDate);
        });
    });

    it('Deve obter a quantidade de noites no intervalo de datas', () => {
        expect(() => {
            const startDate = new Date('2025-03-01');
            const endDate = new Date('2025-03-10');
            const dateRange = new DateRange(startDate, endDate);
            
            expect(dateRange.getCountNigths()).toBe(10);

            const startDateTwo = new Date('2025-01-01');
            const endDateTwo = new Date('2025-12-31');

            const dateRangeTwo = new DateRange(startDateTwo, endDateTwo);

            expect(dateRangeTwo.getCountNigths()).toBe(365);
        });
    });
})