import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from '../common/common.module';
import { ReportSchema, Report } from './models/report.schema';
import { ReportsService } from './reports.service';
import { ReportsResolver } from './reports.resolver';

const services = [ ReportsService ];
const resolvers = [ ReportsResolver ];

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]),
    CommonModule,
  ],
  providers: [...services, ...resolvers],
})
export class ReportsModule {}