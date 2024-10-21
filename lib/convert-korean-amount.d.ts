export declare type Options = {
    wordSpacing?: boolean;
    withWonSuffix?: boolean;
    useComma?: boolean;
};
declare const convertKoreanAmount: (value: number, { wordSpacing, withWonSuffix, useComma }?: Options) => string;
export default convertKoreanAmount;
