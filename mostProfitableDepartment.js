export default function mostProfitableDepartment(list) {
    const listMap = {};
    for (var i = 0; i < list.length; i++) {
        const list1 = list[i];
        listMap[list1.department] = 0;
    }
    for (var i = 0; i < list.length; i++) {
        const list1 = list[i];
        var currentDepartmentTotal = listMap[list1.department];
        currentDepartmentTotal += list1.sales
        listMap[list1.department] = currentDepartmentTotal
    }
    var currentMaxSales = 0;
    var profitableDepartment = '';
    for (const listDepartment in listMap) {
        const currentListSales = listMap[listDepartment];
        if (currentListSales > currentMaxSales) {
            currentMaxSales = currentListSales
            profitableDepartment = listDepartment

        }
    }
    return profitableDepartment
}