import { Injectable } from '@nestjs/common';
import { Report } from './models/report.schema';
import { AddReportInput } from './models/add-report.input';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Report.name)
    private readonly reportModel: ReturnModelType<typeof Report>,
  ) {}

  async findAll(): Promise<Report[]> {
    return this.reportModel.find().exec();
  }

  async add(dto: AddReportInput): Promise<Report> {
    const report = new this.reportModel();

    Object.assign(report, dto);
    return report.save();
  }
}
