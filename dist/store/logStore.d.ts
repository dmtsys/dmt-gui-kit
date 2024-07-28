import { type Writable } from 'svelte/store';
type LogStore = Writable<{
    entry: any;
    createdDate: Date;
    createdAt: number;
    isRecent: boolean;
    isVeryRecent: boolean;
}[]> & {
    LIMIT: number;
    log: (args: any, options?: {
        dedup?: boolean;
    }) => void;
};
declare const logStore: LogStore;
export default logStore;
