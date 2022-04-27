import List from './main';

describe('Testing List class', () => {
    const list: List = new List;

    beforeEach(() => {
        list.append('Torrent');
        list.append('Tidebringer');
        list.append('X Marks the Spot');
        list.append('Ghostship');
    });

    describe('list.length() testing', () => {
        test('should return the length of the list (4)', () => {
            expect(list.length()).toEqual(4);
        });

        test('should return the length of the list (0)', () => {
            list.clear();
            expect(list.length()).toEqual(0);
        });
    });

    describe('list.append() testing', () => {
        test('new length should be grater then the older one', () => {
            const oldLength: number = list.length();
            list.append('Tidal Wave');
            const newLength: number = list.length();
            expect(newLength).toBeGreaterThan(oldLength);
        });
        
        test('new element shold be in the tail', () => {
            const newValue = 'Tidal Wave';
            list.append(newValue);
            expect(list.tail.value).toBe(newValue);
        })
    });

});