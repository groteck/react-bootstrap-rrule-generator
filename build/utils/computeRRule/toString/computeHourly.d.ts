export default computeHourly;
declare function computeHourly({ interval }: {
    interval: any;
}): {
    freq: import("rrule").Frequency;
    interval: any;
};
