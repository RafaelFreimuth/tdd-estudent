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
        }).toThrow('A Data inicial não deve ser igual a Data Final.');
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

    it('O intervalo de datas não pode ficar entre outro intervalo', () => {
        const startDate = new Date('2025-03-01');
        const endDate = new Date('2025-03-05');

        const dateRangeFirst = new DateRange(startDate, endDate);

        const newStartDate = new Date('2025-03-04');
        const newEndDate = new Date('2025-03-10');

        const newDateRange = new DateRange(newStartDate, newEndDate);
        const colapsed = newDateRange.colapsed(dateRangeFirst);

        expect(colapsed).toBe(true);

        const secondTestStartDate = new Date('2025-03-01');
        const secondTestEndDate = new Date('2025-03-05');

        const secondTesteDateRange = new DateRange(secondTestStartDate, secondTestEndDate);

        const secondTestStartDateNew = new Date('2025-02-28');
        const secondTestEndDateNew = new Date('2025-03-02');

        const secondTestDateRangeNew = new DateRange(secondTestStartDateNew, secondTestEndDateNew);

        const secondTestIsColapsed = secondTestDateRangeNew.colapsed(secondTesteDateRange);

        expect(secondTestIsColapsed).toBe(true);
    });

    it('Os dois ranges não devem estar conflitando', () => {
        const startDate = new Date('2025-03-01');
        const endDate = new Date('2025-03-05');

        const dateRange = new DateRange(startDate, endDate);

        const newStartDate = new Date('2025-02-27');
        const newEndDate = new Date('2025-02-28');

        const newDateRange = new DateRange(newStartDate, newEndDate);

        const isColapsed = newDateRange.colapsed(dateRange);

        expect(isColapsed).toBe(false);
    });
})