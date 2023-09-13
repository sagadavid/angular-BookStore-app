import { CounterService } from './counter.service';
import { Counter2Service } from './counter2.service';
import { TestService } from './test.service';

const facts = (testService: TestService) =>
  testService.status ? new CounterService() : new Counter2Service();

export const CounterFactory = {
  //if test service is false instantiate counter2service else counterservice
  provide: CounterService,
  useFactory: facts,
  deps: [TestService], //dependancy of useFactory
};
