export default Repeat;
declare function Repeat({ id, repeat: { frequency, yearly, monthly, weekly, daily, hourly, options, }, handleChange, translations, repeatDropdownStyle, monthlyFrequencyInputStyle, weeklyFrequencyInputStyle, monthlyOnDayDropdownStyle, monthlyOnTheDayDropdownStyle, }: {
    id: any;
    repeat: {
        frequency: any;
        yearly: any;
        monthly: any;
        weekly: any;
        daily: any;
        hourly: any;
        options: any;
    };
    handleChange: any;
    translations: any;
    repeatDropdownStyle: any;
    monthlyFrequencyInputStyle: any;
    weeklyFrequencyInputStyle: any;
    monthlyOnDayDropdownStyle: any;
    monthlyOnTheDayDropdownStyle: any;
}): any;
declare namespace Repeat {
    namespace propTypes {
        const id: any;
        const repeat: any;
        const handleChange: any;
        const translations: any;
        const repeatDropdownStyle: any;
        const weeklyFrequencyInputStyle: any;
        const monthlyFrequencyInputStyle: any;
        const monthlyOnDayDropdownStyle: any;
        const monthlyOnTheDayDropdownStyle: any;
    }
}
