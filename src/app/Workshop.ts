
export class Workshop{
    private _title: string;
    private _date: string;
    private _cost: number;
    private _description: string;

    public constructor(title: string, date: string, cost: number, description: string){
        this._title = title;
        this._date = date;
        this._cost = cost;
        this._description = description;
    }

    get title(): string{
        return this._title;
    }

    get date(): string{
        return this._date;
    }

    get cost(): number{
        return this._cost;
    }

    get description(): string{
        return this._description;
    }
}