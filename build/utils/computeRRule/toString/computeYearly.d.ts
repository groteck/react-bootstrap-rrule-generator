export default computeYearly;
declare function computeYearly({ mode, on, onThe }: {
    mode: any;
    on: any;
    onThe: any;
}): {
    bymonth: number;
    bymonthday: any;
    freq: import("rrule").Frequency;
} | {
    bysetpos: number;
    byweekday: number[];
    bymonth: number;
    freq: import("rrule").Frequency;
};
