export default computeDaily;
declare function computeDaily({ interval }: {
    interval: any;
}): {
    freq: import("rrule").Frequency;
    interval: any;
};
