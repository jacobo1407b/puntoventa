interface ErrorCustom {
    name: string
    message: string
    stack?: string
}
class ErrorCustom implements ErrorCustom { }

export class Error401 extends ErrorCustom {
    constructor(msg: string) {
        super();
        let err = Error.apply(this, [msg]);
        this.name = err.name = "Error401";
        this.message = err.message,
            this.stack = err.stack
        return this
    }
}
export class Error403 extends ErrorCustom {
    constructor(msg: string) {
        super();
        let err = Error.apply(this, [msg]);
        this.name = err.name = "Error403";
        this.message = err.message,
            this.stack = err.stack
        return this
    }
}

export class Error404 extends ErrorCustom {
    constructor(msg: string) {
        super();
        let err = Error.apply(this, [msg]);
        this.name = err.name = "Error404";
        this.message = err.message;
        this.stack = err.stack;
        return this;
    }
}
export class InfoError extends ErrorCustom {
    constructor(msg: string) {
        super();
        let err = Error.apply(this, [msg]);
        this.name = err.name = "InfoError";
        this.message = err.message;
        this.stack = err.stack;
        return this;
    }
}
