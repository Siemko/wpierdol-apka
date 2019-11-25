import {
  Resolver,
  Mutation,
  Args,
  Query,
  Parent,
  ResolveProperty,
} from '@nestjs/graphql';
import { Report } from './models/report.schema';
import { ReportsService } from './reports.service';
import { AddReportInput } from './models/add-report.input';
import { User } from '../users/models/user.schema';
import { UsersService } from '../users/users.service';
import { ObjectId } from 'bson';
import { Inject } from '@nestjs/common';

@Resolver(() => Report)
export class ReportsResolver {
  constructor(
    @Inject(ReportsService) private readonly reportsService: ReportsService,
    @Inject(UsersService) private readonly userService: UsersService,
  ) {}

  @Query(() => [Report])
  async findAllReports(): Promise<Report[]> {
    return this.reportsService.findAll();
  }

  @Mutation(() => Report)
  async addReport(
    @Args('report') reportInput: AddReportInput,
  ): Promise<Report> {
    return this.reportsService.add(reportInput);
  }

  @ResolveProperty()
  async user(@Parent() report: Report): Promise<User> {
    return this.userService.find(report.user as ObjectId);
  }
}
