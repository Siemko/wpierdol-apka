import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ObjectId } from 'bson';
import { ObjectIdScalar } from '../common/graphql-scalars/object-id.scalar';
import { Report, AddReportInput, EditReportInput } from './models';
import { ReportsService } from './reports.service';

@Resolver(() => Report)
export class ReportsResolver {
  constructor(private readonly reportsService: ReportsService) {}

  @Query(() => [Report])
  async findAllReports(): Promise<Report[]> {
    return this.reportsService.findAll();
  }

  @Mutation(() => Report)
  async addReport(@Args('report') reportInput: AddReportInput): Promise<Report> {
    return this.reportsService.add(reportInput);
  }

  @Mutation(() => Report)
  async editReport(@Args('report') reportInput: EditReportInput): Promise<Report> {
    return this.reportsService.edit(reportInput);
  }

  @Mutation(() => ObjectIdScalar)
  async deleteReport(
    @Args({ name: 'reportId', type: () => ObjectIdScalar }) reportId: ObjectId,
  ): Promise<ObjectId> {
    return this.reportsService.delete(reportId);
  }
}
