import { NextFunction, Request, Response, Router } from 'express';

export interface IControllerRouter {
	path: string;
	func: (req: Request, res: Response, next: NextFunction) => void;
	method: keyof Pick<Router, 'get' | 'post' | 'patch' | 'delete' | 'put'>;
}