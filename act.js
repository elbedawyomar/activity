
function analyzeAsteroidData(diameters) {
    if (!Array.isArray(diameters) || diameters.length === 0) {
        return { totalCount: 0, averageDiameter: 0 };
    }
    const totalCount = diameters.length;
    const totalDiameter = diameters.reduce((sum, diameter) => sum + diameter, 0);
    const averageDiameter = totalDiameter / totalCount;
    return { totalCount, averageDiameter };
}
module.exports = { analyzeAsteroidData };