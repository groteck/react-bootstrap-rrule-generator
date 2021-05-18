export default ReactRRuleGenerator;
declare class ReactRRuleGenerator {
    state: {
        id: any;
        data: {
            start: {
                onDate: {
                    date: any;
                    options: {
                        weekStartsOnSunday: any;
                        calendarComponent: any;
                    };
                };
            };
            repeat: {
                frequency: any;
                yearly: {
                    mode: any;
                    on: {
                        month: string;
                        day: number;
                    };
                    onThe: {
                        month: string;
                        day: string;
                        which: string;
                    };
                    options: {
                        modes: any;
                    };
                };
                monthly: {
                    mode: any;
                    interval: number;
                    on: {
                        day: number;
                    };
                    onThe: {
                        day: string;
                        which: string;
                    };
                    options: {
                        modes: any;
                    };
                };
                weekly: {
                    interval: number;
                    days: {
                        mon: boolean;
                        tue: boolean;
                        wed: boolean;
                        thu: boolean;
                        fri: boolean;
                        sat: boolean;
                        sun: boolean;
                    };
                    options: {
                        weekStartsOnSunday: any;
                    };
                };
                daily: {
                    interval: number;
                };
                hourly: {
                    interval: number;
                };
                options: {
                    frequency: any;
                };
            };
            end: {
                mode: any;
                after: number;
                onDate: {
                    date: any;
                    options: {
                        weekStartsOnSunday: any;
                        calendarComponent: any;
                    };
                };
                options: {
                    modes: any;
                };
            };
            options: {
                hideStart: any;
                hideEnd: any;
                hideError: any;
                weekStartsOnSunday: any;
            };
            error: any;
        };
        rrule: string;
    };
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    handleChange: ({ target }: {
        target: any;
    }) => void;
    render(): any;
}
declare namespace ReactRRuleGenerator {
    namespace propTypes {
        const id: any;
        const config: any;
        const value: any;
        const onChange: any;
        const calendarComponent: any;
        const translations: any;
        const repeatDropdownStyle: any;
        const weeklyFrequencyInputStyle: any;
        const monthlyFrequencyInputStyle: any;
        const monthlyOnDayDropdownStyle: any;
        const monthlyOnTheDayDropdownStyle: any;
    }
    namespace defaultProps {
        const id_1: any;
        export { id_1 as id };
        const value_1: string;
        export { value_1 as value };
        const config_1: {};
        export { config_1 as config };
        export function onChange(): void;
        export function onChange(): void;
        const calendarComponent_1: any;
        export { calendarComponent_1 as calendarComponent };
        const translations_1: {
            locale: string;
            invalid_rrule: string;
            months: {
                jan: string;
                feb: string;
                mar: string;
                apr: string;
                may: string;
                jun: string;
                jul: string;
                aug: string;
                sep: string;
                oct: string;
                nov: string;
                dec: string;
            };
            days_short: {
                mon: string;
                tue: string;
                wed: string;
                thu: string;
                fri: string;
                sat: string;
                sun: string;
            };
            days: {
                monday: string;
                tuesday: string;
                wednesday: string;
                thursday: string;
                friday: string;
                saturday: string;
                sunday: string;
                day: string;
                weekday: string;
                'weekend day': string;
            };
            numerals: {
                first: string;
                second: string;
                third: string;
                fourth: string;
                last: string;
            };
            start: {
                label: string;
                tooltip: string;
            };
            repeat: {
                label: string;
                yearly: {
                    label: string;
                    on: string;
                    on_the: string;
                    of: string;
                };
                monthly: {
                    label: string;
                    every: string;
                    months: string;
                    on_day: string;
                    on_the: string;
                };
                weekly: {
                    label: string;
                    every: string;
                    weeks: string;
                };
                daily: {
                    label: string;
                    every: string;
                    days: string;
                };
                hourly: {
                    label: string;
                    every: string;
                    hours: string;
                };
            };
            end: {
                label: string;
                tooltip: string;
                never: string;
                after: string;
                on_date: string;
                executions: string;
            };
        };
        export { translations_1 as translations };
        const repeatDropdownStyle_1: {};
        export { repeatDropdownStyle_1 as repeatDropdownStyle };
        const weeklyFrequencyInputStyle_1: {};
        export { weeklyFrequencyInputStyle_1 as weeklyFrequencyInputStyle };
        const monthlyFrequencyInputStyle_1: {};
        export { monthlyFrequencyInputStyle_1 as monthlyFrequencyInputStyle };
        const monthlyOnDayDropdownStyle_1: {};
        export { monthlyOnDayDropdownStyle_1 as monthlyOnDayDropdownStyle };
        const monthlyOnTheDayDropdownStyle_1: {};
        export { monthlyOnTheDayDropdownStyle_1 as monthlyOnTheDayDropdownStyle };
    }
}
