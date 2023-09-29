import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';

function useBooking() {
  const { bookingId } = useParams();

  const {
    data: booking,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return { booking, isLoading };
}

export default useBooking;
