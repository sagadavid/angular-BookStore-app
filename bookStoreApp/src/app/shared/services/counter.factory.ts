import { CounterService } from './counter.service';
import { Counter2Service } from './counter2.service';
import { TestService } from './test.service';

export const CounterFactory = {
  //if test service is false instantiate counter2service else counterservice
  provide: CounterService,
  useFactory: (testService: TestService) =>
    testService.status ? new CounterService() : new Counter2Service(),
  deps: [TestService], //dependancy of useFactory
};
