export interface RemoteDataPage<T> {
    totalElements?: number;
    nextPage?: number;
    fresh: boolean;
    error?: Error;
    data?: T[];
}
