import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from '../common/common.module';
import { Report, ReportSchema } from '../reports/models/report.schema'
import { ReportsResolver } from './reports.resolver';
import { ReportsService } from './reports.service';

const services = [ReportsResolver];
const resolvers = [ReportsService];

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]),
    CommonModule,
  ],
  providers: [...services, ...resolvers],
})
export class ReportsModule {}
