import useGetGuests from "./useGetGuests";

export default function useCheckGuest(to) {
  const guests = useGetGuests();

  if (guests) {
    let filteredGuests = guests.filter((guest) => {
      return guest.name == to;
    });

    if (filteredGuests.length < 1) {
      return false;
    }

    return true;
  }

  return false;
}
