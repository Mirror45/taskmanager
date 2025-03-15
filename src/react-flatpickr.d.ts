declare module 'react-flatpickr' {
  import { ComponentType } from 'react';
  import { Instance as FlatpickrInstance, Options } from 'flatpickr';

  interface FlatpickrProps {
    value?: string | Date | Date[];
    options?: Options;
    placeholder?: string | Date;
    // eslint-disable-next-line no-unused-vars
    onChange?: (selectedDates: Date[], dateStr: string, instance: FlatpickrInstance) => void;
    className?: string;
    id?: string;
  }

  const Flatpickr: ComponentType<FlatpickrProps>;
  export default Flatpickr;
}
