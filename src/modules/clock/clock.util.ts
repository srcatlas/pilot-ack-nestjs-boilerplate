import { Injectable } from '@nestjs/common';

@Injectable()
export class ClockUtil {
    now(): Date {
        return new Date();
    }
}
