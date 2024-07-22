import { ApiPath } from './api-path.type';

export type PickShift = {} & ApiPath;

export type PickShiftResponse = {
    /**
     * Shift ID
     */
    id: number;

    /**
     * Shift title
     */
    title: string;

    /**
     * Shift from time
     */
    from_time: number;

    /**
     * Shift to time
     */
    to_time: number;
};
