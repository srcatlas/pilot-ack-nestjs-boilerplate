import { ClockDomainModule } from '@modules/clock/clock.domain.module';
import { HelloDomainModule } from '@modules/hello/hello.domain.module';
import { HelloHttpService } from '@modules/hello/services/hello.http.service';
import { Module } from '@nestjs/common';

@Module({
    controllers: [],
    providers: [HelloHttpService],
    exports: [HelloHttpService],
    imports: [HelloDomainModule, ClockDomainModule],
})
export class HelloHttpModule {}
