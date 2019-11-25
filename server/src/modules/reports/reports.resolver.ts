import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddReportInput } from './models/add-report.input';
import { Report } from './models/report.schema';
import { ReportsService } from './reports.service';
import { ObjectIdScalar } from '../common/graphql-scalars/object-id.scalar';

@Resolver(() => Report)
export class ReportsResolver {
  constructor(private readonly reportsService: ReportsService) {}

  @Query(() => [Report])
  async findAllReports(): Promise<Report[]> {
    return this.reportsService.findAll();
  }

  @Query(() => Report)
  async findReport(id: ObjectIdScalar): Promise<Report> {
    return this.reportsService.find(id);
  }

  @Mutation(() => Report)
  async addReport(@Args('report') reportInput: AddReportInput): Promise<Report> {
    return this.reportsService.add(reportInput);
  }
}
