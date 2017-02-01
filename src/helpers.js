export const handleUri = (uri,handlers)=>{
	const pathArr=uri.split('/').filter(item=>!!item);
	const key=pathArr[0];
	if (handlers[key]) return handlers[key](pathArr.slice(1).join('/')); 
}

export const collectionToArray=(collection)=>{
	const rst=[];
	for (let i=0;i<collection.length;i++){
		rst.push(collection.item(i));
	}
	return rst;
}

export const getClassArray=cls=>collectionToArray(document.getElementsByClassName(cls));