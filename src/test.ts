// function Component(id: number) {
// 	console.log('init Component');
// 	return (target: Function) => {
// 		console.log('run Component');
// 		target.prototype.id = id;
// 	}
// }

// function Logger() {
// 	console.log('init Logger');
// 	return (target: Function) => {
// 		console.log('run Logger');
// 	}
// }

// function method(
// 	target: Object,
// 	propertyKey: string,
// 	propertyDescriptor: PropertyDescriptor
// ) {
// 	console.log(propertyKey);
// 	const oldValue = propertyDescriptor.value;
// 	propertyDescriptor.value = function (...args: any[]) {
// 		return args[0] * 10;
// 	}
// }

// function Prop(
// 	target:Object,
// 	propertyKey: string
// ) {
// 	let value: number;

// 	const gerrer = () => {
// 		console.log('Get!');
// 		return value;
// 	}

// 	const setter = (newValue: number) => {
// 		console.log('Set!');
// 		value = newValue;
// 	}

// 	Object.defineProperty(target, propertyKey, {
// 		get: gerrer,
// 		set: setter
// 	})
// }

// function Param(
// 	target:Object,
// 	propertyKey: string,
// 	index: number
// ) {
// 	console.log(propertyKey, index);
// }

// @Logger()
// @Component(1)
// export class User {
// 	@Prop id: number;

// 	@method
// 	updateId(@Param newId: number) {
// 		this.id = newId;
// 		return this.id;
// 	}
// }

// console.log(new User().id);
// console.log(new User().updateId(2));

// //=================Test_2_070 Metadata Reflection =====================
// import 'reflect-metadata';

// function Injectable(key: string) {
// 	return (target: Function) => {
// 		Reflect.defineMetadata(key, 1, target);
// 		const meta = Reflect.getMetadata(key, target);
// 		console.log(meta);
// 	}
// }

// function Inject(key: string) {
// 	return (target: Function) => {
// 		Reflect.defineMetadata(key, 1, target);
// 		const meta = Reflect.getMetadata(key, target);
// 		console.log(meta);
// 	}
// }

// function Prop (target: Object, name: string) {

// }

// @Injectable('C')
// export class C {
// 	@Prop prop: number;
// }

// @Injectable('D')
// export class D {
// 	constructor(@Inject('C') c: C) {}
// }

//npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier
