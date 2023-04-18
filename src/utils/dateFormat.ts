export const dateFormat = (date: string, withHour = false): string => {
  if (withHour) {
    const dateHourPart = date.split('T');
    const datePart = dateHourPart[0].split('-');
    const hourPart = dateHourPart[1].split('.');
    return `${datePart[2]}/${datePart[1]}/${datePart[0]} ${hourPart[0]}`;
  }
  const datePart = date.split('-');
  return `${datePart[2]}/${datePart[1]}/${datePart[0]}`;
}


export const extractDateFormat = (date: string): string => {
    const dateHourPart = date.split('T');
    const datePart = dateHourPart[0].split('-');
    return `${datePart[2]}/${datePart[1]}/${datePart[0]}`;

}
export const extractHourFormat = (date: string): string => {

  const dateHourPart = date.split('T');
  const hourPart = dateHourPart[1].split('.');
  return `${hourPart[0]}`;


}


export default dateFormat;