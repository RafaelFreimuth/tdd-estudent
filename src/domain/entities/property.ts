import DateRange from "../utils/date-range";

export class Property {
    private readonly id: string;
    private readonly name: string;
    private readonly description: string;
    private readonly maxGuests: number;
    private readonly basePricePerNigth: number;

    constructor(id: string, 
                name: string, 
                description: string, 
                maxGuests: number, 
                basePricePerNigth: number) {

        if (maxGuests < 1) {
            throw 'A quantidade maxima de hospedes deve ser maior que zero.';
        }

        this.id = id;
        this.name = name;
        this.description = description;
        this.maxGuests = maxGuests;
        this.basePricePerNigth = basePricePerNigth;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getMaxGuests() {
        return this.maxGuests;
    }

    getBasePricePerNigth() {
        return this.basePricePerNigth;
    }

    validateMaxGuedes(numberGuedes: number): any {
        if (numberGuedes > this.maxGuests) {
            throw `O número de máximo de hospedes foi excedido. Número máximo: ${this.maxGuests}`;
        }
    }

    getTotalPriceByRange(dateRange: DateRange) {
        const countNigths = dateRange.getCountNigths();
        let totalPrice = this.basePricePerNigth * countNigths;
        if (countNigths >= 7) {
            totalPrice *= 0.9;
        }

        return totalPrice;
    }
}