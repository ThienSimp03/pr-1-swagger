import { ApiBody } from 'src/types/ApiBody'

const tmp: ApiBody = {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: '2023-08-25T07:29:28.494Z',
    status: 'placed',
    complete: true
}

export const tmplogin: any = {
    id: 'b45c2a66-fab5-423f-b683-d4ce57264a4f',
    username: 'admin',
    role: 'admin',
    accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI0NWMyYTY2LWZhYjUtNDIzZi1iNjgzLWQ0Y2U1NzI2NGE0ZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5MzUzMjAyMH0.mpqJuA5rNOkiwDolluLuAfRXe5GYHuVlL5Dj-GOvjfQ',
    permissions: [
        'createUser',
        'deleteUser',
        'updateUser',
        'getUser',
        'createCustomer',
        'deleteCustomer',
        'updateCustomer',
        'getCustomer',
        'createRole',
        'deleteRole',
        'updateRole',
        'getRole',
        'createService',
        'deleteService',
        'updateService',
        'getService',
        'createTypeGate',
        'deleteTypeGate',
        'updateTypeGate',
        'getTypeGate',
        'createCustomerServices',
        'deleteCustomerServices',
        'updateCustomerServices',
        'getCustomerServices',
        'createBank',
        'deleteBank',
        'updateBank',
        'getBank',
        'createBankAdmin',
        'deleteBankAdmin',
        'updateBankAdmin',
        'getBankAdmin',
        'createPackageService',
        'deletePackageService',
        'updatePackageService',
        'getPackageService',
        'getHistoryPayment',
        'getHistoryBankOfCustomer'
    ]
}

export default tmp
