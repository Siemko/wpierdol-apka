import { Args, Query, Resolver } from '@nestjs/graphql';
import { ObjectIdScalar } from '../common/graphql-scalars/object-id.scalar';
import { Report } from './models/report.schema';
import { ReportsService } from './reports.service';

@Resolver(() => Report)
export class ReportsResolver {
  constructor(private readonly reportsService: ReportsService) {}

  @Query(() => [Report])
  async findAllReports(): Promise<Report[]> {
    return this.reportsService.findAll();
  }

  @Query(() => Report)
  async findReport(@Args('id') id: ObjectIdScalar): Promise<Report> {
      return this.reportsService.findOne(id);
  }
}
