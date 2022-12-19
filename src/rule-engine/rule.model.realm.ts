export class RuleModelRealm{
    
    private _merchantSettigs: any;
    
    setMerchantSettings(_merchantSettigs: any){
        this._merchantSettigs = _merchantSettigs;
    }

    getMerchantSetting() {
        return this._merchantSettigs;
    }
    
    merchantId: string

    getMerchantID(){
        return this.merchantId;
    }

    setMerchantID(mID: string){
        this.merchantId = mID;
    }

    isCustomerEligibleForETB: boolean;
    setCustomerEligibility(eligibility: boolean) {
        this.isCustomerEligibleForETB = eligibility;
    }

    getCustomerEligibility() {
        return this.isCustomerEligibleForETB;
    }
}