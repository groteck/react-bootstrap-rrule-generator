export default computeMonthly;
declare function computeMonthly({ mode, interval, on, onThe, }: {
    mode: any;
    interval: any;
    on: any;
    onThe: any;
}): {
    bymonthday: any;
    freq: import("rrule").Frequency;
    interval: any;
} | {
    bysetpos: number;
    byweekday: number[];
    freq: import("rrule").Frequency;
    interval: any;
};
