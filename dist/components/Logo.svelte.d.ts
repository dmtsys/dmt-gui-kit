/** @typedef {typeof __propDef.props}  LogoProps */
/** @typedef {typeof __propDef.events}  LogoEvents */
/** @typedef {typeof __propDef.slots}  LogoSlots */
export default class Logo extends SvelteComponent<{
    dmtApp: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LogoProps = typeof __propDef.props;
export type LogoEvents = typeof __propDef.events;
export type LogoSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        dmtApp: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
