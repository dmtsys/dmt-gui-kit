/** @typedef {typeof __propDef.props}  NoiseProps */
/** @typedef {typeof __propDef.events}  NoiseEvents */
/** @typedef {typeof __propDef.slots}  NoiseSlots */
export default class Noise extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NoiseProps = typeof __propDef.props;
export type NoiseEvents = typeof __propDef.events;
export type NoiseSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
