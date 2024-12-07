import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { ExeptionFilter } from './errors/exeption.filter';
import { IExeptionFilter } from './errors/exeption.filter.intergace';
import { ILogger } from './logger/logger.interface';
import { LoggerService } from './logger/logger.service';
import { TYPES } from './types';
import { UserController } from './users/users.controller';

export interface IBootstrapReturn {
	appContaner: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService);
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
	bind<UserController>(TYPES.UserController).to(UserController);
	bind<App>(TYPES.Application).to(App);
});

function bootstrap(): IBootstrapReturn {
	const appContaner = new Container();
	appContaner.load(appBindings);
	const app = appContaner.get<App>(TYPES.Application);
	app.init();
	return { app, appContaner };
}

export const { app, appContaner } = bootstrap();
