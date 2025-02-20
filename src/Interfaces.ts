export interface BaseResponse {
    count: number
    next: string
    previous: any
    results: BasePokemon[]
  }

  export interface BasePokemon {
    name: string
    url: string
  }



