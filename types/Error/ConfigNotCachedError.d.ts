declare const _exports: {
    new (message?: string): {
        name: string;
        message: string;
        stack?: string;
    };
    [Ψ__init__](): {
        new (message?: string): {
            name: string;
            message: string;
            stack?: string;
        };
        [Ψ__init__](): any;
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;
        prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
        stackTraceLimit: number;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export = _exports;
declare const Ψ__init__: unique symbol;
