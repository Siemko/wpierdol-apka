import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Report } from './models/Report.schema';
import { AddReportInput } from './models/add-report.input';
import { ObjectIdScalar } from '../common/graphql-scalars/object-id.scalar';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Report.name)
    private readonly reportModel: ReturnModelType<typeof Report>,
  ) {}

  async findAll(): Promise<Report[]> {
    return this.reportModel.find().exec();
  }

  async find(id: ObjectIdScalar): Promise<Report> {
      return this.reportModel.findById(id).exec();
  }

  async add(dto: AddReportInput): Promise<Report> {
    const report = new this.reportModel();
    report.title = dto.title;
    report.description = dto.description;
    report.reportedBy = dto.reportedBy;

    return report.save();
  }
}
