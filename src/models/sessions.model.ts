export class sessions{
    constructor(
        public session_id: number,
        public date: Date,
        public address: string,
        public available_capacity: number,
        public min_age_limit: 45,
        public vaccine: string,
        public slots: string[],
        public available_capacity_dose1: number,
        public available_capacity_dose2: number,    
    )
    {

    }
}