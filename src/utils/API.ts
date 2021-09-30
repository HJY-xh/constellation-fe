import { currentDate } from "./date";
import md5 from "md5";

export const appid = "11386";

export const secret = "22e935443c148170ccb77ee546f570fd";

export const getConstellationUrl = () => {
    let sign = md5(`appid${appid}${secret}`)
    return `https://vyps.api.storeapi.net/pyi/73/184?appid=11386&sign=${sign}`;
}

export const getConstellationDetailUrl = (astroid: number, xz_ymd: string = currentDate()): string => {
    let sign = md5(`appid${appid}astroid${astroid}xz_ymd${xz_ymd}${secret}`)
    return `https://vyps.api.storeapi.net/pyi/73/185?appid=11386&sign=${sign}&astroid=${astroid}&xz_ymd=${xz_ymd}`
};

