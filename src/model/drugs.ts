export default class Drug {
    name: string;
    datePrescribed: string;
    dosage: string;

    constructor(name:string, date:string, dose:string) {
        this.name = name;
        this.datePrescribed = date;
        this.dosage = dose;
    }
}