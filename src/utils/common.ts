export interface Constellation {
    /** 星座出生日期 */
    astrodate: string;
    /** 星座ID */
    astroid: number;
    /** 星座名称 */
    astroname: string;
    /** logo */
    astropic: string;
}

export interface ConstellationInfo {
    /** 星座ID */
    xz_astroid: number;
    /** 星座名称 */
    xz_astroname: string;
    xz_month: ConstellationDetail;
    xz_today: ConstellationDetail;
    xz_tomorrow: ConstellationDetail;
    xz_week: ConstellationDetail;
    xz_year: ConstellationDetail;
}

export interface ConstellationDetail {
    xz_career?: string;
    xz_date?: string;
    xz_health?: string;
    xz_love?: string;
    xz_money?: string;
    xz_summary?: string;
    xz_color?: string;
    xz_number?: string;
    xz_presummary?: string;
    xz_star?: string;
}