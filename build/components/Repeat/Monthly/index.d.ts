export default RepeatMonthly;
declare function RepeatMonthly({ id, monthly: { mode, interval, on, onThe, options, }, handleChange, translations, monthlyFrequencyInputStyle, monthlyOnDayDropdownStyle, monthlyOnTheDayDropdownStyle, }: {
    id: any;
    monthly: {
        mode: any;
        interval: any;
        on: any;
        onThe: any;
        options: any;
    };
    handleChange: any;
    translations: any;
    monthlyFrequencyInputStyle: any;
    monthlyOnDayDropdownStyle: any;
    monthlyOnTheDayDropdownStyle: any;
}): any;
declare namespace RepeatMonthly {
    namespace propTypes {
        const id: any;
        const monthly: any;
        const handleChange: any;
        const translations: any;
        const monthlyFrequencyInputStyle: any;
        const monthlyOnDayDropdownStyle: any;
        const monthlyOnTheDayDropdownStyle: any;
    }
}
