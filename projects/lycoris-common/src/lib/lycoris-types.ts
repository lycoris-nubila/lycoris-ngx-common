import {RemoteData} from './models/remote-data';
import {RemoteDataPage} from './models/remote-data-page';
import {Observable} from 'rxjs';

export type Nullish<T> = T | undefined | null;

export type Data$<T> = Observable<RemoteData<T>>;

export type DataPage$<T> = Observable<RemoteDataPage<T>>;
