export default configureState;
declare function configureState(config: {}, calendarComponent: any, id: any): {
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
