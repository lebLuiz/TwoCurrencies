export default function formatTimestampToDate(timestamp: number): string {
	if (!timestamp) return '';
	const date = new Date(timestamp * 1000);

	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Months start in 0
	const day = String(date.getDate()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');

	return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
