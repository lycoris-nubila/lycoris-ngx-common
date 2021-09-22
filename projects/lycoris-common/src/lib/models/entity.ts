import {Nullish} from '../lycoris-types';

export interface IEntity {
  readonly id: string;
  readonly updateTimestamp?: Nullish<number>;
  readonly creationTimestamp?: Nullish<number>;
}

export class Entity implements IEntity {

  private _id: string;
  private _updateTimestamp?: Nullish<number>;
  private _creationTimestamp?: Nullish<number>;

  constructor(
      id: string, creationTimestamp?: number, updateTimestamp?: number) {
    this._id = id;
    this._updateTimestamp = updateTimestamp;
    this._creationTimestamp = creationTimestamp;
  }

  public get id(): string {
    return this._id;
  }

  public get updateTimestamp(): Nullish<number> {
    return this._updateTimestamp;
  }

  public get creationTimestamp(): Nullish<number> {
    return this._creationTimestamp;
  }

  protected markUpdated(): void {
    this._updateTimestamp = Date.now();
  }
}
