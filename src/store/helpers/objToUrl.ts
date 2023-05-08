export const objToUrl = (filter: any) => {
	return Object.keys(filter).reduce((accumulator, key) => {
		if (filter[key].length > 0) {
			return accumulator + `&${key}=${filter[key].join(',')}`;
		}
		return accumulator;
	}, '');
};
