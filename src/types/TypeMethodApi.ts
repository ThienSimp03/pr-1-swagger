type ColorMethod = Record<string, string>;

export const ColorMethodApi: ColorMethod = {
    get: "info.main",
    post: "success.main",
    put: "warning.main",
    delete: "error.main",
};

export type TypeMethodApi = {
    nameMethod: string;
    urlMethod: string;
    descriptionMethod: string;
    colorMethod: string;
    [key: string]: any;
};
