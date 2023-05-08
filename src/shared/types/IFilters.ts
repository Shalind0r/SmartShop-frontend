export interface ISpecifications {
	id: number;
	specification: string;
	value: string;
}
export interface IModels {
	id: number;
	model: string;
	img: string;
}
export interface ISpecification {
	id: number;
	name: string;
	specifications: ISpecifications[];
}
export interface IFilters {
	specification: ISpecification[];
	models: IModels[];
}
