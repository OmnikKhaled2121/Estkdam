export function TimeConverter(time) {
    if (time) {
        let newTime = new Date(time)
        return `${newTime.getFullYear()} - ${newTime.getMonth()}- ${newTime.getDate()} `
    }
    return ""
}