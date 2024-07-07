import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        showLogInitially?: boolean;
        title: any;
        limit?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type LogViewProps = typeof __propDef.props;
export type LogViewEvents = typeof __propDef.events;
export type LogViewSlots = typeof __propDef.slots;
export default class LogView extends SvelteComponent<LogViewProps, LogViewEvents, LogViewSlots> {
}
export {};
