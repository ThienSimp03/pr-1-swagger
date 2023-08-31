type ColorMethod = Record<string, string>;

export const ColorMethodTheme: ColorMethod = {
    GET: "info.main",
    POST: "success.main",
    PUT: "warning.main",
    DELETE: "error.main",
};

export const ColorMethodApi: ColorMethod = {
    GET: "blue",
    POST: "green",
    PUT: "yellow",
    DELETE: "red",
};
