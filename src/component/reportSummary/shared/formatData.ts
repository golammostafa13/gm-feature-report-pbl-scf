export const formatNumber = (number: any): any => {
    if (!number) return null;
    const num = Number(number);
    const fixedPrecisionNum = Number(num.toFixed(2));
    const stringConvertedNum = fixedPrecisionNum.toLocaleString();
    if( stringConvertedNum === "0"){
        return null;
    } else {
        return stringConvertedNum;
    }
}