import { parse, format } from 'date-fns';

function formatDate(dateString) {
  const parsedDate = parse(dateString, 'd/M/yyyy', new Date());
  return format(parsedDate, 'MMMM d, yyyy');
}

export default formatDate