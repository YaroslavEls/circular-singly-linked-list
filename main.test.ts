import List from './main';

describe('Testing List class', () => {
    const list: List = new List;

    beforeEach(() => {
        list.clear();
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
            const newValue: string = 'Tidal Wave';
            list.append(newValue);
            expect(list.tail.value).toBe(newValue);
        });
    });

    describe('list.clear() testing', () => {
        test('list should be empty (length = 0)', () => {
            list.clear();
            expect(list.length()).toEqual(0);
        });
    });

    describe('list.get() testing', () => {
        test('sholud return the value of the 2-nd element (Tidebringer)', () => {
            expect(list.get(1)).toBe('Tidebringer');
        });

        test('shold throw an exception', () => {
            expect(() => {
                list.get(5)
            }).toThrow(new Error('Incorrect index'));
        });
    });

    describe('list.insert() testing', () => {
        test('new element should be inserted on the 2-nd position', () => {
            const newValue: string = 'Tidal Wave';
            list.insert(newValue, 1);
            expect(list.get(1)).toBe(newValue);
        });

        test('sholud throw an exception', () => {
            const newValue: string = 'Tidal Wave';
            expect(() => {
                list.insert(newValue, 5);
            }).toThrow(new Error('Incorrect index'));
        });
    });

    describe('list.delete() testing', () => {
        test('the 2-nd element shold be deleted (value: Tidebringer)', () => {
            const value = 'Tidebringer';
            expect(list.get(1)).toBe(value);
            list.delete(1);
            expect(list.get(1)).not.toBe(value);
        });

        test('sholud throw an exception', () => {
            expect(() => {
                list.delete(5);
            }).toThrow(new Error('Incorrect index'));
        });
    });

    describe('list.findFirst() testing', () => {
        test('should return the 2-nd element', () => {
            const value = 'Tidebringer';
            list.append(value);
            expect(list.findFirst(value)).toEqual(1);
        });

        test('should return -1 (no matches)', () => {
            expect(list.findFirst('Torrent Storm')).toEqual(-1);
        });
    });

    describe ('list.findLast() testing', () => {
        test('should return the 5-th element', () => {
            const value = 'Tidebringer';
            list.append(value);
            expect(list.findLast(value)).toEqual(4);
        });

        test('should return -1 (no matches)', () => {
            expect(list.findLast('Torrent Storm')).toEqual(-1);
        });
    });

});