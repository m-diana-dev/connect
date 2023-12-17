export const updateObjectInArray = (items: any, itemId: number, objPropName: any, newObjProps: any) => {
    return items.map(el => el[objPropName] === itemId ? {...el, ...newObjProps} : el)
}