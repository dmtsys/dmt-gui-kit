import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SnackBarProps = typeof __propDef.props;
export type SnackBarEvents = typeof __propDef.events;
export type SnackBarSlots = typeof __propDef.slots;
export default class SnackBar extends SvelteComponent<SnackBarProps, SnackBarEvents, SnackBarSlots> {
}
export {};
