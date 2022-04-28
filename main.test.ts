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
        test('sholud return the value of the given element (2-nd)', () => {
            expect(list.get(1)).toBe('Tidebringer');
        });

        test('shold throw an exception', () => {
            expect(() => {
                list.get(5)
            }).toThrow(new Error('Incorrect index'));
        });
    });

    describe('list.insert() testing', () => {
        test('new element should be inserted on the given position (2-nd)', () => {
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
        test('the given element should be deleted (2-nd)', () => {
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
        test('should return the first element with the given value (2-nd)', () => {
            const value: string = 'Tidebringer';
            list.append(value);
            expect(list.findFirst(value)).toEqual(1);
        });

        test('should return -1 (no matches)', () => {
            expect(list.findFirst('Torrent Storm')).toEqual(-1);
        });
    });

    describe('list.findLast() testing', () => {
        test('should return the last element with given value (5-th)', () => {
            const value: string = 'Tidebringer';
            list.append(value);
            expect(list.findLast(value)).toEqual(4);
        });

        test('should return -1 (no matches)', () => {
            expect(list.findLast('Torrent Storm')).toEqual(-1);
        });
    });

    describe('list.deleteAll() testing', () => {
        test('should delete all elements with given value (Tidebringer)', () => {
            const value: string = 'Tidbringer';
            list.append(value);
            list.deleteAll(value);
            expect(list.findFirst(value)).toEqual(-1);
        });

        test('should not change anything in the list', () => {
            expect(list.length()).toEqual(4);
            list.deleteAll('Tidal Wave');
            expect(list.length()).toEqual(4);
        });
    });

    describe('list.clone() testing', () => {
        test('should return copy of the given list', () => {
            const newList = list.clone();
            expect(newList.head.value).toBe(list.head.value);
            expect(newList.tail.value).toBe(list.tail.value);
        })
    });

    describe('list.extend() testing', () => {
        test('length of the list should be increased', () => {
            expect(list.length()).toEqual(4);
            const newList: List = new List;
            newList.append('Tidal Wave');
            newList.append('Torrent Storm');
            list.extend(newList);
            expect(list.length()).toEqual(6);
        });

        test('should not change the original list after the second was changed', () => {
            const newList: List = new List;
            newList.append('Tidal Wave');
            newList.append('Torrent Storm');
            list.extend(newList);
            newList.append('Daedalus');
            expect(list.tail.value).toBe('Torrent Storm');
        })
    });

    describe('list.reverse() testing', () => {
        test('order of the elements in the list should be reversed', () => {
            const origHead: string = list.head.value;
            const origTail: string = list.tail.value;
            list.reverse();
            expect(list.head.value).toBe(origTail);
            expect(list.tail.value).toBe(origHead);
        });

        test('length of the list should not be changed', () => {
            expect(list.length()).toEqual(4);
            list.reverse();
            expect(list.length()).toEqual(4);
        });
    });

});