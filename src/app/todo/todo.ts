export class Todo {
    private _todoId: number;
    private _todoName: string;
    private _todoDesc: string;
    private _isCompleted: boolean;
    constructor() { }
    set todoId(todoId: number) {
        this._todoId = todoId;
    }
    get todoId(): number {
        return this._todoId;
    }
    set todoName(todoName: string) {
        this._todoName = todoName;
    }
    get todoName(): string {
        return this._todoName;
    }
    set todoDesc(todoDesc: string) {
        this._todoDesc = todoDesc;
    }
    get todoDesc(): string {
        return this._todoDesc;
    }
    set isCompleted(isCompleted: boolean) {
        this._isCompleted = isCompleted;
    }
    get isCompleted(): boolean {
        return this._isCompleted;
    }
}
