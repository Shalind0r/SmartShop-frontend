export interface ISubCategory {
	id: number;
	name: string;
}

export interface ICategoryGroup {
	id: number;
	name: string;
	subCategories: ISubCategory[];
}

export interface ICatalog {
	id: number;
	name: string;
	categoriesGroups: ICategoryGroup[];
}
