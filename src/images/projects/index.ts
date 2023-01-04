function getImage(imgName: string) {
	const img = require(`./${imgName}`);
	return img || null;
}

export { getImage };
