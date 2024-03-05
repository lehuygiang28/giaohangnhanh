import { GhnAbstract } from './ghn.abstract';
import { GhnConfig } from './types';
import { GhnAddress } from './address';
import { CalculateFee } from './calculate-fee';

export class Ghn extends GhnAbstract {
    public address: GhnAddress;
    public calculateFee: CalculateFee;

    constructor(config: GhnConfig) {
        super(config);
        this.address = new GhnAddress(config);
        this.calculateFee = new CalculateFee(config);
    }
}
