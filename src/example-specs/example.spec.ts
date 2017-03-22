describe('example specs', () => {
    it('compare numbers', () => {
        expect(1).toBe(1);
    });

    it('compare strings', () => {
        expect('Hello').toBe('Hello');
    });

    it('compare objects', () => {
        const o1 = {
            name: 'C'
        };
        const o2 = {
            name: 'C'
        };
        expect(o1).toEqual(o2);
        expect(o1).not.toBe(o2);
    });
});