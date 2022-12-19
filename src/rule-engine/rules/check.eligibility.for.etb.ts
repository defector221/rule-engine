import { Injectable } from "@nestjs/common";
import { ZestAdapterMediatorService } from "../../service";
import { IRule } from "../interface";
import { RuleModelRealm } from "../rule.model.realm";
import { RuleRealm } from "../rule.realm";

@Injectable()
export class CheckEligibilityForETB<R extends RuleRealm, M extends RuleModelRealm> implements IRule<R, M>{
    constructor(private _zestAdapterMediator: ZestAdapterMediatorService){}
    
    async evaluate(iRuleType: R, iRuleDTO: M) : Promise<M>{
        const merchantId = iRuleType.getMerchantID();
        iRuleDTO.setCustomerEligibilityForETB(true);
        return iRuleDTO;
    }

    async shouldRun(iRuleType: R, iRuleDTO: M): Promise<boolean> {
        const _merchantSettigs = iRuleDTO?.getMerchantSetting();
        if(_merchantSettigs?.isBankBnplEnabled){
            return true;
        }
        return false;
    }

}