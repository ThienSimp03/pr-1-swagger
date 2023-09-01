import { ComponentApi } from 'src/types/TypeComponentsApi'
import { tmplogin } from './ApiBody'

const tmpApiComponent: ComponentApi[] = [
    {
        name: 'package_services',
        title: 'Everything about your Pets',
        description: 'Find out more',
        methods: [
            {
                nameMethod: 'GET',
                title: 'GET all package_services',
                url: '/api/package_services',
                fields: [],
                example: undefined
            },
            {
                nameMethod: 'DELETE',
                title: 'DELETE package_services',
                url: '/api/package_services/1',
                fields: [],
                example: undefined
            },
            {
                nameMethod: 'GET',
                title: 'GET id package_services',
                url: '/api/package_services/2',
                fields: [],
                example: undefined
            },
            {
                nameMethod: 'POST',
                title: 'POST package_services',
                url: '/api/package_service',
                fields: [
                    {
                        title: {
                            required: true,
                            typeInput: 'text',
                            default: ''
                        }
                    },
                    {
                        content: {
                            required: false,
                            typeInput: 'text',
                            default: ''
                        }
                    },
                    {
                        coin: {
                            required: false,
                            typeInput: 'text',
                            default: ''
                        }
                    },
                    {
                        bonus: {
                            required: false,
                            typeInput: 'text',
                            default: ''
                        }
                    }
                ],
                example: undefined
            }
        ]
    },
    {
        name: 'customer',
        title: 'Customer',
        description: 'click to Customer',
        methods: [
            {
                nameMethod: 'GET',
                title: 'get all customers',
                url: '/customers',
                fields: [],
                example: []
            },
            {
                nameMethod: 'GET',
                title: 'get coin of customer',
                url: '/customer/coin/a99733b0-0b07-4de3-925a-f61e056c2761',
                fields: [],
                example: []
            }
        ]
    },
    {
        name: 'login',
        title: 'login to your account',
        description: 'click to login',
        methods: [
            {
                nameMethod: 'POST',
                title: 'login to your account',
                url: '/api/auth/signin',
                fields: [
                    {
                        email: {
                            required: true,
                            typeInput: 'text',
                            default: ''
                        }
                    },
                    {
                        password: {
                            required: true,
                            typeInput: 'password',
                            default: ''
                        }
                    }
                ],
                example: [
                    {
                        status: 200,
                        body: tmplogin
                    },
                    {
                        status: 400,
                        body: 'Not Found'
                    }
                ]
            }
        ]
    },
    {
        name: 'image upload',
        title: 'upload image',
        description: 'click to upload image',
        methods: [
            {
                nameMethod: 'POST',
                url: '/api/type_gate',
                title: 'upload image',
                fields: [
                    {
                        image: {
                            required: true,
                            typeInput: 'file',
                            default: ''
                        }
                    },
                    {
                        name: {
                            required: true,
                            typeInput: 'text',
                            default: ''
                        }
                    },
                    {
                        price: {
                            required: true,
                            typeInput: 'text',
                            default: ''
                        }
                    },
                    {
                        status: {
                            required: true,
                            typeInput: 'text',
                            default: 'ACTIVE'
                        }
                    }
                ],
                example: []
            },
            {
                nameMethod: 'GET',
                url: '/api/type_gates',
                title: 'get all image',
                fields: [],
                example: []
            }
        ]
    }
]

export default tmpApiComponent
