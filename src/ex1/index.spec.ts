import { isRangeAvailable, DateRange } from './index';

describe("isRangeAvailable", () => {
  describe('When requested.start is before the available range and requested.end is inside', () => {
    it('returns false', () => {
      const requestedRange: DateRange = {
        startDate: new Date('2024-07-03'),
        endDate: new Date('2024-07-16')
      };
      const availableRange: DateRange = {
        startDate: new Date('2024-07-10'),
        endDate: new Date('2024-07-20')
      };
      expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
    });
  })

  describe('When start is inside the available range and end is after', () => {
    it('returns false', () => {
      const requestedRange: DateRange = {
        startDate: new Date('2024-07-14'),
        endDate: new Date('2024-07-25')
      };
      const availableRange: DateRange = {
        startDate: new Date('2024-07-10'),
        endDate: new Date('2024-07-20')
      };
      expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
    });
  })
  
  // il n'y a pas besoin d'un test vérifiant si les deux dates requestedRange sont en dehors de available
  // 
  // 

  describe('When req.start is after req.end', () => {
    it('returns false', () => {
      const requestedRange: DateRange = {
        startDate: new Date('2024-07-19'),
        endDate: new Date('2024-07-16')
      };
      const availableRange: DateRange = {
        startDate: new Date('2024-07-10'),
        endDate: new Date('2024-07-20')
      };
      expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
    });
  })

  describe('>hen requested start and end are inside the available range', () => {
    it('returns true', () => {
      const requestedRange: DateRange = {
        startDate: new Date('2024-07-11'),
        endDate: new Date('2024-07-15')
      };
      const availableRange: DateRange = {
        startDate: new Date('2024-07-10'),
        endDate: new Date('2024-07-20')
      };
      expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
    });
  })
});
