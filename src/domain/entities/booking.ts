import DateRange from "../utils/date-range";
import { Property } from "./property";
import { User } from "./user";

export class Booking {
    private readonly id: string;
    private readonly property: Property;
    private readonly user: User;
    private readonly dateRange: DateRange;
    private readonly countGuests: number;

    constructor(id: string,
                property: Property,
                user: User,
                dateRange: DateRange,
                countGuests: number
    ) {
        this.id = id;
        this.property = property;
        this.user = user;
        this.dateRange = dateRange;
        this.countGuests = countGuests;
    }

    getId() {
        return this.id;
    }

    getProperty() {
        return this.property;
    }

    getUser() {
        return this.user;
    }

    getDateRange() {
        return this.dateRange;
    }

    getCountGuests() {
        return this.countGuests;
    }
}