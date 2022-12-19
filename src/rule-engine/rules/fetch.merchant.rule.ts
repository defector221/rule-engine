import { Injectable } from "@nestjs/common";
import { ZestAdapterMediatorService } from "../../service";
import { IRule } from "../interface";
import { RuleModelRealm } from "../rule.model.realm";
import { RuleRealm } from "../rule.realm";

@Injectable()
export class FetchMerchantSetting<R extends RuleRealm, M extends RuleModelRealm> implements IRule<R, M>{
    constructor(private _zestAdapterMediator: ZestAdapterMediatorService){}
    
    async evaluate(iRuleType: R, iRuleDTO: M) : Promise<M>{
        iRuleDTO?.setMerchantSettings(await this._zestAdapterMediator.getMerchantSettings(iRuleType?.merchantId));
        return iRuleDTO;
    }

    async shouldRun(iRuleType: R): Promise<boolean> {
        if(iRuleType?.merchantId && iRuleType?.merchantId.length != 0){
            return true;
        }
        return false;
    }

}