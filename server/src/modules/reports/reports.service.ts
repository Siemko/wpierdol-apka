import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Report, AddReportInput, EditReportInput } from './models'

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

  async edit(dto: EditReportInput): Promise<Report> {
    const report = await this.reportModel.findById(dto._id);
    if (!report) {
      throw new Error(`Report with id: "${dto._id}" not found.`);
    }
    Object.assign(report, dto);
    return report.save();
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const report = await this.reportModel.findById(id);
    if (!report) {
      throw new Error(`Report with id: "${id}" not found.`);
    }

    await report.remove();
    return id;
  }
}
