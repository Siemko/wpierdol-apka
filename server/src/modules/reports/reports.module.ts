import { Module } from '@nestjs/common';
import { ReportsResolver } from './reports.resolver';
import { ReportsService } from './reports.service';
import { CommonModule } from '../common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Report, ReportSchema } from './models/report.schema';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]),
    CommonModule,
    UsersModule,
  ],
  providers: [ReportsResolver, ReportsService],
})
export class ReportsModule {}
