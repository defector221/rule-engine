import { Injectable } from "@nestjs/common";
import { ZestAdapterMediatorService } from "../../service";
import { IRule } from "../interface";
import { RuleModelRealm } from "../rule.model.realm";
import { RuleRealm } from "../rule.realm";

export class MerchantSettingRealm extends RuleRealm{}
export class MerchantSettingModelRealm extends RuleModelRealm{}

@Injectable()
export class FetchMerchantSetting implements IRule<MerchantSettingRealm, MerchantSettingModelRealm>{
    constructor(private _zestAdapterMediator: ZestAdapterMediatorService){}
    
    async evaluate(iRuleType: MerchantSettingRealm, iRuleDTO: MerchantSettingModelRealm) : Promise<MerchantSettingModelRealm>{
        iRuleDTO.setMerchantSettings(await this._zestAdapterMediator.getMerchantSettings(iRuleType?.merchantId));
        return iRuleDTO;
    }

    async shouldRun(iRuleType: MerchantSettingRealm): Promise<boolean> {
        if(iRuleType?.merchantId){
            return true;
        }
        return false;
    }

}