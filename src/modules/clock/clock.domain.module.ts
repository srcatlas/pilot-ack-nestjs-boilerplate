import { ClockUtil } from '@modules/clock/clock.util';
import { Module } from '@nestjs/common';

@Module({
    controllers: [],
    providers: [ClockUtil],
    exports: [ClockUtil],
    imports: [],
})
export class ClockDomainModule {}
