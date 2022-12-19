export class RuleModelRealm{
    private _loanAmount: Number
    getLoanAmount() {
       return this._loanAmount;
    }

    setLoanAmount(amount: Number){
        return this._loanAmount =  amount;
    }

    private _merchantSettigs: any;
    
    setMerchantSettings(_merchantSettigs: any){
        this._merchantSettigs = _merchantSettigs;
    }

    getMerchantSetting() {
        return this._merchantSettigs;
    }
    
    private merchantId: string

    getMerchantID(){
        return this.merchantId;
    }

    setMerchantID(mID: string){
        this.merchantId = mID;
    }

    private isCustomerEligibleForETB: boolean;
    setCustomerEligibilityForETB(eligibility: boolean) {
        this.isCustomerEligibleForETB = eligibility;
    }

    getCustomerEligibilityForETB() {
        return this.isCustomerEligibleForETB;
    }

    private isCustomerEligibleForZest: boolean;
    setCustomerEligibilityForZest(eligibility: boolean) {
        this.isCustomerEligibleForZest = eligibility
    }

    getCustomerEligibilityForZest() {
        return this.isCustomerEligibleForETB;
    }
}