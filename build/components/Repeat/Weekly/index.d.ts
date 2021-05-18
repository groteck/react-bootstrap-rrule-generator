export default RepeatWeekly;
declare function RepeatWeekly({ id, weekly: { interval, days, options, }, handleChange, translations, weeklyFrequencyInputStyle, }: {
    id: any;
    weekly: {
        interval: any;
        days: any;
        options: any;
    };
    handleChange: any;
    translations: any;
    weeklyFrequencyInputStyle: any;
}): any;
declare namespace RepeatWeekly {
    namespace propTypes {
        const id: any;
        const weekly: any;
        const handleChange: any;
        const translations: any;
        const weeklyFrequencyInputStyle: any;
    }
}
