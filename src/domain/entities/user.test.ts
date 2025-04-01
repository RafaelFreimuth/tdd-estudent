import { User }  from './user';

describe('User entities', () => {
    it('Deve criar uma instancia de um usuario com id e nome', () => {
        const user = new User('1', 'Rafael Betta');

        expect(user.getId()).toBe('1');
        expect(user.getNome()).toBe('Rafael Betta');
    });

    it('Não deve ser possível instanciar um usuario sem nome', () => {
        expect(() => new User('1', '')).toThrow('O nome é de preenchimento obrigatório.');
    });
});