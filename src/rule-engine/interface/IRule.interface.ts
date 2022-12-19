export class IRule<IRuleType, IRuleDtoType>{
    async evaluate(iRuleType: IRuleType, iRuleDTO: IRuleDtoType): Promise<IRuleDtoType>{
        return iRuleDTO;
    }
    async shouldRun(iRuleType: IRuleType): Promise<boolean>{
        return false;
    }
}