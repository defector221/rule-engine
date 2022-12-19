import {Exclude, Expose} from 'class-transformer';

@Exclude()
export class PartnerFacingDTO{
    @Expose()
    eligible?: boolean;

    @Expose()
    mobileNumber?: string;

    @Expose()
    reason?: string;
}