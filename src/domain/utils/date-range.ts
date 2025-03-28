export default class DateRange {
    private readonly startDate: Date;
    private readonly endDate: Date;

    constructor(startDate: Date, endDate: Date) {
        if (endDate == startDate) {
            throw "A Data inicial não deve ser igual a Data Final.";
        }

        if (endDate < startDate) {
            throw "A Data Final deve ser posterior a Data Inicial.";
        }

        this.startDate = startDate;
        this.endDate = endDate;
    }

    getStartDate() {
        return this.startDate;
    }

    getEndDate() {
        return this.endDate;
    }

    getCountNigths(): number {
        const diff = this.startDate.getTime() - this.endDate.getTime();
        const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        return diffDays;
    }

    colapsed(outher: DateRange) {
        return (
            this.startDate < outher.endDate && outher.startDate < this.endDate
        );
    }
}