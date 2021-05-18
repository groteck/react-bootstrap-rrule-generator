export default computeWeekly;
declare function computeWeekly({ interval, days }: {
    interval: any;
    days: any;
}): {
    freq: import("rrule").Frequency;
    interval: any;
    byweekday: any;
};
