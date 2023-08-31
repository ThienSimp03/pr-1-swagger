import { ApiBody } from "src/types/ApiBody";

const tmp: ApiBody = {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2023-08-25T07:29:28.494Z",
    status: "placed",
    complete: true,
};

export const tmplogin: any = {
    id: "309c52c1-f854-42db-99fe-7fe99bbb727a",
    username: "admin",
    role: "admin",
    accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwOWM1MmMxLWY4NTQtNDJkYi05OWZlLTdmZTk5YmJiNzI3YSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5MzMwMTM2Mn0.VWperuWwGnUTJTDMqIc5MXgoYWLPmJY4f15cj9j8baw",
    permissions: ["Roles", "Users", "Customers", "History_Trans"],
};

export default tmp;
