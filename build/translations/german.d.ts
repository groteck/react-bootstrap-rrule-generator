declare namespace _default {
    const locale: string;
    const invalid_rrule: string;
    namespace months {
        const jan: string;
        const feb: string;
        const mar: string;
        const apr: string;
        const may: string;
        const jun: string;
        const jul: string;
        const aug: string;
        const sep: string;
        const oct: string;
        const nov: string;
        const dec: string;
    }
    namespace days_short {
        const mon: string;
        const tue: string;
        const wed: string;
        const thu: string;
        const fri: string;
        const sat: string;
        const sun: string;
    }
    const days: {
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
    namespace numerals {
        const first: string;
        const second: string;
        const third: string;
        const fourth: string;
        const last: string;
    }
    namespace start {
        const label: string;
        const tooltip: string;
    }
    namespace repeat {
        const label_1: string;
        export { label_1 as label };
        export namespace yearly {
            const label_2: string;
            export { label_2 as label };
            export const on: string;
            export const on_the: string;
            export const of: string;
        }
        export namespace monthly {
            const label_3: string;
            export { label_3 as label };
            export const every: string;
            const months_1: string;
            export { months_1 as months };
            export const on_day: string;
            const on_the_1: string;
            export { on_the_1 as on_the };
        }
        export namespace weekly {
            const label_4: string;
            export { label_4 as label };
            const every_1: string;
            export { every_1 as every };
            export const weeks: string;
        }
        export namespace daily {
            const label_5: string;
            export { label_5 as label };
            const every_2: string;
            export { every_2 as every };
            const days_1: string;
            export { days_1 as days };
        }
        export namespace hourly {
            const label_6: string;
            export { label_6 as label };
            const every_3: string;
            export { every_3 as every };
            export const hours: string;
        }
    }
    namespace end {
        const label_7: string;
        export { label_7 as label };
        const tooltip_1: string;
        export { tooltip_1 as tooltip };
        export const never: string;
        export const after: string;
        export const on_date: string;
        export const executions: string;
    }
}
export default _default;
