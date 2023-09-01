export type Field = {
    typeInput: string
    required: boolean
    default: string
}

export type Example = {
    status: number
    body: any | object
}

export type MethodApi = {
    nameMethod: string
    title: string
    url: string
    fields: Record<string, Field>[]
    example: Example[] | undefined
}

export type ComponentApi = {
    name: string
    title: string
    description: string
    methods: MethodApi[]
}
