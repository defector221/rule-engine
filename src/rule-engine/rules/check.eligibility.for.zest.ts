import { Injectable } from "@nestjs/common";
import { ZestAdapterMediatorService } from "../../service";
import { IRule } from "../interface";
import { RuleModelRealm } from "../rule.model.realm";
import { RuleRealm } from "../rule.realm";

@Injectable()
export class CheckEligibilityForZest<R extends RuleRealm, M extends RuleModelRealm> implements IRule<R, M>{
    constructor(private _zestAdapterMediator: ZestAdapterMediatorService){}
    
    async evaluate(iRuleType: R, iRuleDTO: M) : Promise<M>{
        //write ZestEligibility
        return iRuleDTO;
    }

    async shouldRun(iRuleType: R, iRuleDTO: M): Promise<boolean> {
        if(iRuleDTO?.getCustomerEligibility()){
            return false;
        }
        return true;
    }

}