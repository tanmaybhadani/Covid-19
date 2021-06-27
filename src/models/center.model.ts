import { vaccine_fees } from './vaccine_fees.model';
import { sessions } from "./sessions.model";
export class Center{
    constructor(
        public center_id: number,
        public name: string,
        public address: string,
        public state_name: string,
        public district_name: string,
        public block_name: string,
        public pincode: number,
        public lat: number,
        public long: number,
        public from: string,
        public to: string,
        public fee_type: string,
        public sessions: sessions[],
        public vaccine_fees: vaccine_fees       
    )
    {

    }
}