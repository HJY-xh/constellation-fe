import moment from "moment";

const FMT: string = "YYYY-MM-DD HH:mm:ss";
export function formatDate(date: string) {
	return moment(Number(date)).format(FMT);
}

export const currentDate = () => {
	let time = new Date();
	return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
}