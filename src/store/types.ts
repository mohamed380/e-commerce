export interface IRootState  {

    visits : number|null
    loading: false

}

export interface IRootGetters {
    visitsNo(state: IRootState) : number;
    isLoading(state: IRootState) : boolean;
}