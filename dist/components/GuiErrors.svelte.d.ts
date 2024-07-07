/** @typedef {typeof __propDef.props}  GuiErrorsProps */
/** @typedef {typeof __propDef.events}  GuiErrorsEvents */
/** @typedef {typeof __propDef.slots}  GuiErrorsSlots */
export default class GuiErrors extends SvelteComponent<{
    errorStore: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GuiErrorsProps = typeof __propDef.props;
export type GuiErrorsEvents = typeof __propDef.events;
export type GuiErrorsSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        errorStore: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
