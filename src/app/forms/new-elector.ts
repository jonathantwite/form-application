import { Address } from "./address";

export class NewElector {
    constructor (
        public Forename: string,
        public Surname: string,
        public Email: string,
        public Address: Address,
        public Nationality: string,
        public RequestAbsentVote: string,
        public OptOut: boolean
    ) {}
}
