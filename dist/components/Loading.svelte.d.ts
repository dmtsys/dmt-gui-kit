/** @typedef {typeof __propDef.props}  LoadingProps */
/** @typedef {typeof __propDef.events}  LoadingEvents */
/** @typedef {typeof __propDef.slots}  LoadingSlots */
export default class Loading extends SvelteComponent<{
    dmtApp: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type LoadingProps = typeof __propDef.props;
export type LoadingEvents = typeof __propDef.events;
export type LoadingSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        dmtApp: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
