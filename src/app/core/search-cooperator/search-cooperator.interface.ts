export interface SearchCooperatorInterface {
    cpf: string;
    name: string;
    status: string;
    account: Account[]
}

export interface Account {
    type: string;
    institution: string;
    number: string;
    canDuplicate: boolean;
}