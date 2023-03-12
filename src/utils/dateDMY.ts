export default function dateDMY(date: Date): string {
	//                                          ↓ JavaScript moment
	return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}
