import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupancyRate =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title='bookings'
        color='blue'
        value={numBookings}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title='Sales'
        color='green'
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title='Checked ins'
        color='indigo'
        value={checkins}
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title='occupancy rate'
        color='yellow'
        value={`${Math.round(occupancyRate * 100)}%`}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
