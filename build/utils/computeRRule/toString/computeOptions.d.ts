export default computeOptions;
declare function computeOptions({ hideStart, weekStartsOnSunday }: {
    hideStart: any;
    weekStartsOnSunday: any;
}): {
    dtstart: any;
    wkst: import("rrule").Weekday;
};
